from django.shortcuts import render
from rest_framework import viewsets
from .models import Empleado,Telefono,Correo
from .serializers import EmpleadoSerializer,CorreoSerializer,TelefonoSerializer
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from rest_framework import status


@api_view(['POST'])
def registro(request):
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=serializer.data['username'])
        user.set_password(serializer.data['password'])
        user.save()
        
        token = Token.objects.create(user=user)
        return Response({'token': token.key,"user": serializer.data})        
    
    return Response(serializer.errors)

@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    
    if not user.check_password(request.data['password']):
        return Response({"error": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)
    
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({"token": token.key,"user": serializer.data})
    
class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

class TelefonoViewSet(viewsets.ModelViewSet):
    queryset = Telefono.objects.all()
    serializer_class = TelefonoSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

class CorreoViewSet(viewsets.ModelViewSet):
    queryset = Correo.objects.all()
    serializer_class = CorreoSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

