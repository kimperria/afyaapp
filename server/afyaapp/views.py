from django.shortcuts import render
from django.http import HttpResponse

from .models import Profile
from .serializers import LoginSerializer, PatientInformationSerializer

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
        pass
    
    @swagger_auto_schema(operation_summary='Update patient information')
    def put(self, request):
        pass

