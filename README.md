# API con Express.js, JWT, MariaDB, MongoDB y Socket.IO

Este proyecto es una API desarrollada con **Express.js**, que implementa autenticación con **JWT**, conexión a bases de datos (**MariaDB** y **MongoDB**) y comunicación en tiempo real mediante **Socket.IO**. Está diseñado para ser modular, escalable y fácil de usar.

---

## **Características**

- **Autenticación**:
  - Registro e inicio de sesión de usuarios.
  - Tokens seguros utilizando **JWT**.
  - Middleware para proteger rutas.

- **Bases de Datos**:
  - **MariaDB**: Gestión de usuarios y mensajes.
  - **MongoDB**: Alternativa para almacenamiento de mensajes.

- **Comunicación en Tiempo Real**:
  - Implementación de un chat con **Socket.IO**.
  - Manejo de eventos de conexión, desconexión y mensajes.

- **Estructura Modular**:
  - Rutas, controladores y modelos separados para mantener un código limpio.

---

## **Requisitos Previos**

Asegúrate de tener instalado lo siguiente:

- **Node.js**: [Descargar Node.js](https://nodejs.org/)
- **MariaDB**: [Descargar MariaDB](https://mariadb.com/)
- **MongoDB**: [Descargar MongoDB](https://www.mongodb.com/)
- **Git** (opcional): [Descargar Git](https://git-scm.com/)

---

## **Estructura**

   
mi_proyecto_api/
├── controllers/        # Lógica de los endpoints
├── models/             # Modelos de bases de datos
├── routes/             # Definición de rutas
├── config/             # Configuración de bases de datos
├── app.js              # Configuración principal de la API
├── server.js           # Configuración del servidor Socket.IO
├── .env                # Variables de entorno
├── package.json        # Dependencias y scripts del proyecto


##**Endpoints**

Autenticación
Método	Ruta	Descripción
POST	/auth/register	Registrar un usuario
POST	/auth/login	Iniciar sesión

Chat
Método	Ruta	Descripción
GET	/chat/messages	Obtener mensajes
POST	/chat/send	Enviar un mensaje

