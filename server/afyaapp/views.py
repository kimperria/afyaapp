from django.shortcuts import render
from django.http import HttpResponse

from .models import Profile
from .serializers import LoginSerializer

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