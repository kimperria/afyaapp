from django.contrib.auth.models import User
from django.contrib import auth
from .models import Profile, PatientInformation

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

    
    
class PatientInformationSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    date_of_birth = serializers.DateField()

    class Meta:
        model = PatientInformation

        fields = ('first_name', 'last_name', 'date_of_birth')
