from django.contrib.auth.models import User
from django.contrib import auth
from .models import Profile, PatientInformation,AppointmentDetails

from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed


class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=30, min_length=5)
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    

    class Meta:
        model = User
        fields = ('username', 'password')

    def validate(self, validated_data):
        username = validated_data['username']
        password = validated_data['password']

        authenticated_user = auth.authenticate(username=username, password=password)

        if not authenticated_user:
            raise AuthenticationFailed('Invalid credentials, please try again')
        
        if not authenticated_user.is_active:
            raise AuthenticationFailed('Disabled account, please contact admin')
        
        return validated_data
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

    
    
class PatientInformationSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    date_of_birth = serializers.DateField()
    gender = serializers.CharField()
    created_by = UserSerializer(read_only=True)

    class Meta:
        model = PatientInformation

        fields = ['id', 'first_name', 'last_name', 'date_of_birth', 'gender', 'registered_on', 'created_by']
        depth = 1

class CreatePatientInformationSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    date_of_birth = serializers.DateField()
    gender = serializers.CharField()

    class Meta:
        model = PatientInformation

        fields = ['first_name', 'last_name', 'date_of_birth', 'gender']


class AppointmentSerializer(serializers.ModelSerializer):
    height = serializers.IntegerField()
    weight = serializers.IntegerField()
    body_mass_index = serializers.IntegerField()
    patient = PatientInformationSerializer(read_only=True)
    created_by = UserSerializer(read_only=True)

    class Meta:
        model = AppointmentDetails

        fields = ['id', 'height', 'weight', 'body_mass_index', 'appointment_date', 'patient','created_by']

        depth = 1


class CreatePatientAppointmentSerializer(serializers.ModelSerializer):
    appointment_date = serializers.DateField()
    patient_id = serializers.IntegerField()
    height = serializers.IntegerField()
    weight = serializers.IntegerField()
    body_mass_index = serializers.IntegerField()

    class Meta:
        model = AppointmentDetails

        fields = ('appointment_date','patient_id', 'height', 'weight', 'body_mass_index')

        depth = 1
