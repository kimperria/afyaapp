from django.contrib.auth.models import User
from django.contrib import auth
from .models import Profile

from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed


class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=30, min_length=5)
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    

    class Meta:
        model = User
        fields = ('username', 'password')

    def validate(self, attrs):
        username = attrs.get('username', '')
        password = attrs.get('password', '')

        authenticated_user = auth.authenticate(username=username, password=password)
        print(authenticated_user, password)

        if not authenticated_user:
            raise AuthenticationFailed('Invalid credentials, please try again')
        
        if not authenticated_user.is_active:
            raise AuthenticationFailed('Disabled account, please contact admin')
        
        return {
            'email': authenticated_user.username,
            # 'token': authenticated_user.token
        }