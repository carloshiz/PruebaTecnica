from django.urls import path, include,re_path
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()
router.register(r'Empleado', views.EmpleadoViewSet)
router.register(r'Telefono', views.TelefonoViewSet)
router.register(r'Correo', views.CorreoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    re_path('registro',views.registro),
    re_path('login',views.login),
]