# Docker Compose Databases

Este repositorio contiene configuraciones de Docker Compose para levantar y gestionar distintos tipos de bases de datos en contenedores Docker de manera rápida y sencilla.

## Contenidos

- Configuraciones Docker Compose para varias bases de datos.
- Scripts de configuración inicial para bases de datos (como creación de usuarios, bases de datos y volúmenes).
- Ejemplos de volúmenes persistentes para conservar los datos entre reinicios de contenedores.

## Bases de datos incluidas

Actualmente, este repositorio incluye configuraciones para las siguientes bases de datos:

- MongoDB


## Requisitos

- [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/) instalados en tu sistema.

## Cómo usar

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/ecommerce-portafolio/db-compose-setup.git
   cd db-compose-setup
   ```

2. Navega al directorio de la base de datos que deseas levantar y ejecuta el comando:

   ```bash
   docker-compose -f mongo/docker-compose.mongo.yml up -d
   ```

3. La base de datos estará disponible según la configuración del archivo `docker-compose.database.yml` correspondiente. Puedes cambiar las variables de entorno en cada archivo para personalizar la configuración (como usuario, contraseña y nombre de la base de datos).

4. Para detener y eliminar los contenedores de una base de datos:

   ```bash
   docker-compose down
   ```

## Estructura del repositorio

Cada directorio contiene un archivo `docker-compose.database.yml` para una base de datos específica y, en algunos casos, archivos adicionales para configuraciones personalizadas.

```plaintext
docker-compose-databases/
├── mongo/
│   └── docker-compose.mongo.yml
```

## Personalización

Cada archivo `docker-compose.database.yml` permite ajustes como:

- Puertos
- Volúmenes
- Variables de entorno (usuario, contraseña, etc.)

Edita estos valores según tus necesidades antes de ejecutar `docker-compose up`.
