# Prueba Tecnica
## _Mateo Asdrubal Hernandez Peña_

_Herramientas_
- Axios: Realizando conexiones de api rest.
- Boostrap: Plantilla para dar estilos, formatos y formularios.
- NPM: Realizar el despliegue de la aplicación al ambiente local por medio del puerto 3000.
- Git: Para implementar cambios en el repositorio de la nube.


_Instructivo de uso_
- Para inicializar la aplicación utilizamos el comando de NPM y desplegar el ambiente de forma local
`--npm star`.
- Se despliega el ambiente en el nacegador de prefencia por medio de `http://localhost:3000/`.
- Al iniciar el ambiente se despliega el registro donde encontramos cuatro campos requeridos para la creación del usuario `Nombre, Identificación, Email, Contraseña`.
- Con los campos requeridos ya diligenciados se procede a registrar los datos en el caso de no tener los campos diligenciados no deja crear el.
- Despues de realizar un registro exitoso nos redirige al login, donde vamos a encontrar dos campos necesarios para el inicio de sesión `Email, Contraseña`..
- En el momento de inciar sesio se dirige a los comics donde encontramos la imagen el nombre y un boton de selecionar como favorito.
- Se realiza la extración de estos datos por medio de la conexion a la api rest de _`Marvel`_ por una petición _GET_ `/v1/public/characters`.
- Para realizar la peticion _GET_ primero creamos una cuenta en la pagina de desarolladores de `Marvel` _https://developer.marvel.com_.
- Con una cuenta ya creada en `Marvel` podemos obtener la _Private Key_ y la _Public Key_ que son necesarias para realizar la peticion. 