from django.contrib.auth.models import User
from django.contrib import auth
from .models import Profile

from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=30, min_length=5)
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    

    class Meta:
        model = User
        fields = ('email', 'password')

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')

        authenticated_user = auth.authenticate(email=email, password=password)

        if not authenticated_user:
            raise AuthenticationFailed('Invalid credentials, please try again')
        
        if not authenticated_user.is_active:
            raise AuthenticationFailed('Disabled account, please contact admin')
        
        return {
            'email': authenticated_user.email,
        }