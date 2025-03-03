from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password

# Serializer tio confirm passwords are uniform
class UserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField()
    password = serializers.CharField(write_only = True)
    confirm_password = serializers.CharField(write_only = True)
    class Meta: 
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'confirm_password']

    # Method to serialize the two passwords
    def validate(self, data):
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if password and confirm_password and password != confirm_password:
            raise serializers.ValidationError("Password Mismatch!")
        return data
        
    # before creating a user, i remove confirn_password and ash the password
    def create(self, validated_data):
        validated_data.pop('confirm_password')
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)