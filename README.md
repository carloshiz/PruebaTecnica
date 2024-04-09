agregar el entorno virutal e iniciarlo

Instalar django, django rest framework
->pip install django 
->pip install djangorestframework

Instalar 
->pip install django-cors-headers //para los cors y la conexion
->pip install psycopg2 //base de datos

Realizar las migraciones 
->python manage.py makemigrations
->python manage.py migrate

IMPORTANTE: para el envio de los correos se utilizó la libreria integrada de django, solo envia correos para gmail

Otra opcion es instalar: pip freeze > requirements.txt

Api:

Obtener todos los empleados y agregar empleado : http://localhost:8000/api/Empleado
Eliminar y actualizar: http://localhost:8000/api/Empleado/{id}

Obtener todos los correos y agregar correo : http://localhost:8000/api/Correo
Eliminar y actualizar: http://localhost:8000/api/Correo/{id}

Obtener todos los telefonos y agregar telefono : http://localhost:8000/api/Telefono
Eliminar y actualizar: http://localhost:8000/api/Telefono/{id}

Se agregó un paso más de inicio de sesion o registro para obtener el token para las peticiones.

///////////////////////

para el front
npm i react-router-dom
npm i axios
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

/////////////////////////////////////

Para la base de datos tener en cuenta la configuracion, ya que es local
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'pruebaTecnica', ///Tener una base de datos con este nombre
        'USER': 'postgres', //verificar usuario
        'PASSWORD': 'root', //verificar contraseña
        'HOST': 'localhost',  
        'PORT': '5432', // verificar puerto
    }
}

