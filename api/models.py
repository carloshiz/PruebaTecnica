from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
# Create your models here.

class Empleado(models.Model):
    nombres = models.CharField(max_length=150)
    apellidos = models.CharField(max_length=150)
    tipoIdentificacion = models.CharField(max_length=3,choices=[('NIT', 'NIT'), ('CC', 'Cédula de Ciudadanía')])
    identificacion = models.CharField(max_length=30, unique=True)
    fechaIngreso = models.DateField()
    cargo = models.CharField(max_length=150)
    departamento = models.CharField(max_length=150)


class Telefono(models.Model):
    tipo = models.CharField(max_length=4, choices=[('Cell', 'Celular'), ('Tel', 'Telefono')])
    numero = models.CharField(max_length=10)
    indicativo = models.CharField(max_length=100)
    Empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)


class Correo(models.Model):
    email = models.EmailField()
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)



# @receiver(post_save, sender=Correo)
# def post_save_correo(sender, instance, created, **kwargs):
#     if created:
#         send_mail(
#             'Bienvenido a EmpresaFake',
#             f'Hola {instance.empleado.nombres}, bienvenido a empresafake. Tu cargo es {instance.empleado.cargo}.',
#             'talentohumanocol567@gmail.com',
#             [instance.email],
#             fail_silently=False,
#         )

@receiver(post_save, sender=Correo)
def post_save_correo(sender, instance, created, **kwargs):
    if created:
        subject = '¡Bienvenido a SolucionesCartagena!'
        message = (
            f'Hola {instance.empleado.nombres},\n\n'
            '¡Estamos emocionados de tenerte a bordo en SolucionesCartagena! '
            'Tu talento y tus habilidades son una adición increíble a nuestro equipo y estamos felices y agradecidos de poder contar contigo. '
            f'Como {instance.empleado.cargo}, creemos que contribuirás significativamente a nuestros proyectos y objetivos.\n\n'
            
            'Saludos cordiales,\n'
            'El Equipo de SolucionesCartagena'
        )
        from_email = 'talentohumanocol567@gmail.com'
        recipient_list = [instance.email]

        send_mail(subject, message, from_email, recipient_list, fail_silently=False)
