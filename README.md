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

2- Alojamientos:
* id
* Propietario_id
* Nombre del alojamiento
* Descripción
* Ubicación
* Precio
* Disponibilidad

3- Reservas:
* id
* Usuario_id
* Alojamiento_id
* Fecha_inicio
* Fecha_fin


  


