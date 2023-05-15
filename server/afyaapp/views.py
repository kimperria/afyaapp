from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.http import HttpResponse

from .models import Profile, PatientInformation, AppointmentDetails
from .serializers import CreatePatientAppointmentSerializer, PatientInformationSerializer, AppointmentSerializer, CreatePatientInformationSerializer

from rest_framework import generics, status
from rest_framework.response import Response

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


# Create your views here.
def helloAfya(request):
    return HttpResponse('This is the initial DRF test')


# class LoginAPIView(generics.GenericAPIView):

#     serializer_class = LoginSerializer


#     @swagger_auto_schema(operation_summary='Authenticated user')
#     def post(self, request):

#         user = request.data

#         serializer = self.serializer_class(data=user)

#         if serializer.is_valid(raise_exception=True):

#             response = {
#                 'information': 'Login success',
#                 'authenticatied': True,
#                 'user': serializer.data
#             }

#             return Response(data=response, status=status.HTTP_200_OK)
        
class RegisterNewPatient(generics.GenericAPIView):

    serializer_class = CreatePatientInformationSerializer

    @swagger_auto_schema(operation_summary='Save patient information')
    def post(self, request):

        patient = request.data

        medic = request.user

        serializer = self.serializer_class(data=patient)

        if serializer.is_valid(raise_exception=True):

            serializer.save(created_by=medic)
            response = {
                'success': True, 
                'data': serializer.data
            }

            return Response(data=response, status=status.HTTP_200_OK)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class PatientsDataView(generics.GenericAPIView):
    
    serializer_class = PatientInformationSerializer
    queryset = PatientInformation.objects.all()

    @swagger_auto_schema(operation_summary='List all patient information')
    def get(self, request):
        
        all_patients = PatientInformation.objects.all()

        serializer = self.serializer_class(instance=all_patients, many=True)

        response = {
                'success': True,
                'data': serializer.data
            }
        return Response(data=response, status=status.HTTP_200_OK)
        
class PatientInformationView(generics.GenericAPIView):

    serializer_class = PatientInformationSerializer
    permission_classes = [IsAuthenticated]

    
    @swagger_auto_schema(operation_summary='Get patient data by ID')
    def get(self, request, patient_id):
        try:
            patient = PatientInformation.objects.get(id=patient_id)

            serializer = self.serializer_class(instance=patient)

            response = {
                'success': True,
                'data': serializer.data
            }

            return Response(data=response, status=status.HTTP_200_OK)
        except PatientInformation.DoesNotExist:
            response = {
                'success': False,
                'data': {
                    'error': 'Patient not found',
                    'message': 'No patient matches the provided ID'
                }
            }

            return Response(data=response, status=status.HTTP_200_OK)
    
    @swagger_auto_schema(operation_summary='Update patient information')
    def put(self, request, patient_id):
        
        updated_information = request.data

        medic = request.user

        try: 
            patient_information = PatientInformation.objects.get(pk=patient_id)

            serializer = self.serializer_class(data=updated_information, instance=patient_information)


            if serializer.is_valid():
                serializer.save(created_by=medic)
                response = {
                    'success': True,
                    'message': 'Infomation updated successfully',
                    'data': serializer.data
                }
                return Response(data=response, status=status.HTTP_201_CREATED)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except PatientInformation.DoesNotExist:
            response = {
                'success': False,
                'data': {
                    'message': 'Failed to update patient information'
                }
            }
            return Response(data=response, status=status.HTTP_404_NOT_FOUND)

class AppointmentInformationView(generics.GenericAPIView):

    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = AppointmentDetails.objects.all()


    @swagger_auto_schema(operation_summary='List all appountments')
    def get(self, request):
        
        all_appointments = AppointmentDetails.objects.all()

        serializer = self.serializer_class(instance=all_appointments, many=True)

        response = {
                'success': True,
                'data': serializer.data
            }
        return Response(data=response, status=status.HTTP_200_OK)
    

class CreatePatientAppointment(generics.GenericAPIView):

    serializer_class = CreatePatientAppointmentSerializer

    ## Overwrite create method
    def create(self, request, *args, **kwargs):

        appointment_data = request.data

        new_appointment = AppointmentDetails.objects.create(patient=PatientInformation.objects.get(first_name=appointment_data['patient_id']), 
                                                            height=appointment_data['height'],
                                                            weight=appointment_data['weight'],
                                                            body_mass_index=appointment_data['body_mass_index'],
                                                            created_by=request.user)
        new_appointment.save()

        serializer = CreatePatientAppointmentSerializer(new_appointment)

        return Response(serializer.data)


    @swagger_auto_schema(operation_summary='Create appointment detail')
    def post(self, request):

        appointment = request.data

        medic = request.user

        serializer = self.serializer_class(data=appointment)

        if serializer.is_valid(raise_exception=True):

            serializer.save(created_by=medic)
            response = {
                'success-status': True,
                'appointment-status': serializer.data
            }

            return Response(data=response, status=status.HTTP_200_OK)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PatientAppointmentView(generics.GenericAPIView):
    serializer_class = AppointmentSerializer
    queryset = AppointmentDetails.objects.all()

    @swagger_auto_schema(operation_summary='Get appointment data by ID')
    def get(self, request, appointment_id):
        try:
            appointment = AppointmentDetails.objects.get(id=appointment_id)

            serializer = self.serializer_class(instance=appointment)

            response = {
                'success': True,
                'appointment-information': serializer.data
            }

            return Response(data=response, status=status.HTTP_200_OK)
        except AppointmentDetails.DoesNotExist:
            response = {
                'success': False,
                'message': {
                    'error': 'Appointment not found',
                    'data': 'No appointment matches the provided ID'
                }
            }

            return Response(data=response, status=status.HTTP_200_OK)
    
    @swagger_auto_schema(operation_summary='Update appointment information')
    def put(self, request, appointment_id):
        
        updated_appointment = request.data

        appointment_information = get_object_or_404(PatientInformation, pk=appointment_id)

        serializer = self.serializer_class(data=updated_appointment, instance=appointment_information)

        if serializer.is_valid():
            serializer.save()
            response = {
                'infomation': 'Infomation updated successfully',
                'data': serializer.data
            }
            return Response(data=response, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)