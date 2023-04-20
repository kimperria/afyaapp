from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .models import Profile, PatientInformation, AppointmentDetails
from .serializers import LoginSerializer, PatientInformationSerializer, AppointmentSerializer

from rest_framework import generics, status
from rest_framework.response import Response

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


# Create your views here.
def helloAfya(request):
    return HttpResponse('This is the initial DRF test')


class LoginAPIView(generics.GenericAPIView):

    serializer_class = LoginSerializer


    @swagger_auto_schema(operation_summary='Authenticated user')
    def post(self, request):

        user = request.data

        serializer = self.serializer_class(data=user)

        if serializer.is_valid(raise_exception=True):

            response = {
                'information': 'Login success',
                'authenticatied': True,
                'user': serializer.data
            }

            return Response(data=response, status=status.HTTP_200_OK)
        
class PatientInformationView(generics.GenericAPIView):

    serializer_class = PatientInformationSerializer
    queryset = PatientInformation.objects.all()

    @swagger_auto_schema(operation_summary='Save patient information')
    def post(self, request):

        patient = request.data

        serializer = self.serializer_class(data=patient)

        if serializer.is_valid(raise_exception=True):

            response = {
                'success-status': True, 
                'patient-information': serializer.data
            }

        return Response(data=response, status=status.HTTP_200_OK)
    
    @swagger_auto_schema(operation_summary='Get patient information')
    def get(self, request):
        
        all_patients = PatientInformation.objects.all()

        serializer = self.serializer_class(instance=all_patients, many=True)

        response = {
                'success-status': True,
                'patients': serializer.data
            }
        return Response(data=response, status=status.HTTP_200_OK)
    
    @swagger_auto_schema(operation_summary='Get patient data by ID')
    def get(self, request, patient_id):
        try:
            patient = PatientInformation.objects.get(id=patient_id)

            serializer = self.serializer_class(instance=patient)

            response = {
                'success': True,
                'patient-information': serializer.data
            }

            return Response(data=response, status=status.HTTP_200_OK)
        except PatientInformation.DoesNotExist:
            response = {
                'success': False,
                'message': {
                    'error': 'Patient not found',
                    'data': 'No patient matches the provided ID'
                }
            }

            return Response(data=response, status=status.HTTP_200_OK)
    
    @swagger_auto_schema(operation_summary='Update patient information')
    def put(self, request, patient_id):
        
        updated_information = request.data

        patient_information = get_object_or_404(PatientInformation, pk=patient_id)

        serializer = self.serializer_class(data=updated_information, instance=patient_information)

        if serializer.is_valid():
            serializer.save()
            response = {
                'infomation': 'Infomation updated successfully',
                'data': serializer.data
            }
            return Response(data=response, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AppointmentInformationView(generics.GenericAPIView):

    serializer_class = AppointmentSerializer
    queryset = AppointmentDetails.objects.all()

    @swagger_auto_schema(operation_summary='Save appointment detail')
    def post(self, request):

        appointment = request.data

        serializer = self.serializer_class(data=appointment)

        if serializer.is_valid(raise_exception=True):

            response = {
                'success-status': True,
                'appointment-status': serializer.data
            }

            return Response(data=response, status=status.HTTP_200_OK)
    

    @swagger_auto_schema(operation_summary='List all appountments')
    def get(self, request):
        
        all_appointments = AppointmentDetails.objects.all()

        serializer = self.serializer_class(instance=all_appointments, many=True)

        response = {
                'success-status': True,
                'appointments': serializer.data
            }
        return Response(data=response, status=status.HTTP_200_OK)

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