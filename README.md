# RentForces
Plataforma de alquiler para las fuerzas armadas

Este proyecto consiste en desarollar una plataforma de alquiler específicamente dirigida a las fuerzas armadas, como fuerza y cuerpos de seguridad como la policía, militar etc... La plataforma permitirá a los miembros de las fuerzas armadas encontrar y alquilar alojamientos adecuados a sus necesidades.

Policias trasladados: Después de prestar juramento, es común que los policías sean asignados a diferentes ciudades o regiones por un período determinado, a menudo dos años. Durante este tiempo, necesitarán alojamiento temporal en su nueva ubicación. La plataforma puede proporcionarles una solución conveniente para encontrar viviendas adecuadas y seguras durante su asignación.

Policías que buscan alojamiento temporal: Además de los traslados, puede haber situaciones en las que los policías necesiten alojamiento temporal, como asignaciones cortas, investigaciones especiales o asistencia a seminarios o cursos de capacitación. La plataforma puede ofrecerles opciones de alquiler a corto plazo para satisfacer estas necesidades específicas.

Compañeros policías como arrendadores: Muchos policías pueden tener propiedades adicionales o habitaciones disponibles para alquilar. Al ofrecerles la oportunidad de publicar anuncios en esa plataforma, podrán encontrar inquilinos confiables y de confianza en su propia red profesional. Los policías a menudo prefieren alquilar a sus compañeros debido a la confianza y el entendimiento mutuo.



# Funcionalidades previstas

### Mapa interactivo: 
* Se integrará un mapa en la plataforma que permitirá a los usuarios visualizar las viviendas disponibles en diferentes áreas geográficas.

### Sistema de registro e inicio de sesión: 
* Los usuarios podrán registrarse e iniciar sesión en la plataforma para acceder a todas las funcionalidades.

### Gestión de perfiles de usuarios: 
* Los usuarios podrán crear y actualizar su perfil, agregar información personal y cargar fotos.

### Publicación de viviendas: 
* Los propietarios de viviendas podrán publicar anuncios con descripciones detalladas, fotos e información sobre la disponibilidad.

### Búsqueda y filtros: 
* Los usuarios podrán realizar búsquedas de viviendas utilizando criterios como ubicación, precio y comodidades.

### Sistema de reservas: 
* Los usuarios podrán reservar viviendas disponibles para períodos específicos.

### Integración de base de datos: 
* Se utilizará una base de datos SQL para almacenar la información de usuarios, viviendas y reservas.

### Contenerización con Docker Compose: 
* El proyecto se contenerizará utilizando Docker Compose para facilitar el despliegue y gestión del entorno de desarrollo.

### Uso de tecnologías front-end: 
* El proyecto utilizará las siguientes tecnologías: Vite, React, JavaScript, HTML y CSS para crear la interfaz de usuario.

### Uso de tecnologías back-end: 
* El proyecto utilizará Node.js y Express para desarrollar la API, con el uso de bibliotecas como Slonik para interactuar con la base de datos, JWT y cookies para la autenticación.

### Comunicación con la API: 
* Se utilizará Axios para las solicitudes HTTP entre el front-end y el back-end.

# Definición técnica

## Base de datos

### Tablas propuestas:
  

1. Usuarios:
- id
- nombre
- email
- contraseña

2. Alojamientos:
- id
- propietario_id
- nombre del alojamiento
- descripción
- ubicación
- precio
- disponibilidad

3. Reservas:
- id
- usuario_id
- alojamiento_id
- fecha_inicio
- fecha_fin

## Endpoints

1. Usuarios:
        POST /usuarios: Crear un nuevo usuario. Recibe el nombre, email y contraseña del usuario en el cuerpo de la solicitud. Devuelve el ID del nuevo usuario creado.
        POST /usuarios/login: Iniciar sesión de usuario. Recibe el email y contraseña en el cuerpo de la solicitud. Devuelve un token de autenticación.

    Alojamientos:
        GET /alojamientos: Obtener una lista de todos los alojamientos disponibles.
        GET /alojamientos/{id}: Obtener información detallada de un alojamiento específico.
        POST /alojamientos: Crear un nuevo alojamiento. Recibe los datos del alojamiento en el cuerpo de la solicitud. Devuelve el ID del nuevo alojamiento creado.
        PUT /alojamientos/{id}: Actualizar los datos de un alojamiento existente. Recibe los datos actualizados en el cuerpo de la solicitud.

    Reservas:
        GET /reservas: Obtener una lista de todas las reservas realizadas por el usuario autenticado.
        POST /reservas: Realizar una nueva reserva. Recibe el ID del alojamiento y las fechas de inicio y fin de la reserva en el cuerpo de la solicitud. Devuelve el ID de la nueva reserva creada.
  


