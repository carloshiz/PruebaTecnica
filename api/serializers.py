from rest_framework import serializers
from .models import Empleado,Telefono,Correo
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password']

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = '__all__'
        
class TelefonoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Telefono
        fields = '__all__'
        
class CorreoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Correo
        fields = '__all__'
        
