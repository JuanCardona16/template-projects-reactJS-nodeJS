# Plantilla de API Rest construido con Node.js & Express

En este documento encontraras toda la documentacion correspondiente sobre esta plantilla, tanto su arquitectura, tecnologias y configuracion adicional para que puedas sacarle el maximo provecho.

## Descripción

Este repositorio sirve como una plantilla **robusta, escalable y optimizada** para construir APIs backend utilizando Node.js y TypeScript, con **MongoDB** como base de datos principal a través de **Mongoose ODM**. Se enfoca en las mejores prácticas de desarrollo, incluyendo una arquitectura clara, tipado estático, manejo eficiente de base de datos, autenticación segura, validación de datos, testing y configuración centralizada.

El objetivo es proporcionar una base sólida y reutilizable que acelere el desarrollo de nuevas aplicaciones backend sobre MongoDB, garantizando calidad, mantenibilidad y rendimiento.

## Tecnologias utilizadas

Estas son las tecnologias utilizadas en este proyecto:

### Node.js API Template - Backend Escalable con MongoDB (TypeScript)

![Node.js](https://img.shields.io/badge/Node.js-18.x+-green.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x+-blue.svg) ![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg) ![Mongoose](https://img.shields.io/badge/Mongoose-8.x-red.svg) ![MongoDB](https://img.shields.io/badge/MongoDB-green.svg) ![JWT](https://img.shields.io/badge/Auth-JWT-red.svg) ![Jest](https://img.shields.io/badge/Tests-Jest-brightgreen.svg) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Características Principales

- **🚀 Framework:** Express.js
- **🔒 Tipado Estático:** TypeScript para mayor robustez y mejor experiencia de desarrollo.
- **🔑 Autenticación:** Basada en JSON Web Tokens (JWT) almacenados en cookies `HttpOnly` y `Secure`.
- **🛡️ Seguridad:** Hashing de contraseñas con `bcrypt`, validación de entrada con `Zod`, cabeceras de seguridad con `helmet`, prevención básica de ataques de fuerza bruta con `express-rate-limit`.
- **💾 ODM:** Mongoose para modelado de datos, validación de esquemas y interacción simplificada con MongoDB.
- **✅ Validación:** Validación de esquemas para cuerpos de solicitud, parámetros y consultas usando Zod (complementa las validaciones de Mongoose a nivel de API).
- **🚦 Arquitectura Modular:** Estructura organizada por capas (rutas, controladores, servicios, modelos Mongoose) y potencialmente por _features_ para facilitar la escalabilidad.
- **⚙️ Configuración Centralizada:** Manejo de variables de entorno con `dotenv` y validación opcional de las mismas.
- **centralized:** Middleware centralizado para capturar y manejar errores de forma consistente.
- **🧪 Testing:** Configuración lista para pruebas unitarias y de integración con Jest (o Vitest como alternativa).
- **📜 Logging:** Logging estructurado y configurable (ej. con Winston o Pino) para desarrollo y producción.
- **📄 Documentación API:** Generación automática de documentación API con Swagger/OpenAPI.
- **💅 Linting y Formateo:** ESLint y Prettier preconfigurados para mantener la consistencia del código.

## 🛠️ Stack Tecnológico

- **Lenguaje:** TypeScript 5.x+
- **Entorno:** Node.js 18.x+
- **Framework Web:** Express.js 4.x
- **Base de Datos:** MongoDB
- **ODM:** Mongoose 8.x
- **Autenticación:** `jsonwebtoken`, `bcryptjs`
- **Validación:** Zod, Mongoose Schemas
- **Testing:** Jest (o Vitest)
- **Logging:** Winston (o Pino)
- **Seguridad:** `helmet`, `express-rate-limit`, `cors`
- **Variables de Entorno:** `dotenv`
- **Documentación API:** `swagger-ui-express`, `swagger-jsdoc`
- **Linting/Formateo:** ESLint, Prettier

## Arquitectura propuesta

En la actualidad existen diferentes arquitectura o patrones de diseño que nos ayudan a estructurar nuestro proyecto de tal manera que se nos sea mas facil mantenerlo, escalarlo y llevar un control de lo que construimos. Aqui te presento una arquitectura que extrae lo mejor de los monolitos modulares y los microservicios, enfocada en la escalabilidad y la migracion facil a microservicios.

Esta arquitectura nos ayudara a tener un mayor control y escalabilidad dependiendo de los requerimientos y las funcionalidades que resente tu proyecto. A continuacion te presento la maquetacion de la arquitectura.

## 📂 Estructura del Proyecto (Propuesta con Mongoose)

```text
.
├── src/
│   ├── config/            # Archivos de configuración (db, env, logger, etc.)
│   │   └── database.ts    # Conexión a MongoDB con Mongoose
│   ├── core/              # Lógica central (servidor, errores, middlewares globales)
│   │   ├── errors/        # Clases de error personalizadas
│   │   ├── middleware/    # Middlewares globales (auth, error, validate, logging)
│   │   └── Server.ts      # Clase o función para configurar y lanzar el servidor Express
│   ├── features/          # Módulos/Funcionalidades de la aplicación
│   │   └── auth/          # Ejemplo: Módulo de autenticación
│   │       ├── auth.controller.ts
│   │       ├── auth.routes.ts
│   │       ├── auth.service.ts
│   │       ├── auth.schema.ts   # Esquemas Zod para validación de API
│   │       ├── user.model.ts    # Modelo y Esquema Mongoose para Usuarios
│   │       └── auth.types.ts    # Tipos específicos del módulo (si es necesario)
│   │   └── ...            # Otros módulos/features
│   ├── lib/               # Librerías/utilidades compartidas (ej: JWT helpers, password hasher)
│   ├── types/             # Tipos globales o compartidos (ej: tipos de Express Request)
│   └── index.ts           # Punto de entrada principal de la aplicación
├── tests/                 # Archivos de pruebas (unitarias, integración)
│   ├── integration/
│   └── unit/
├── .env.example           # Archivo de ejemplo para variables de entorno
├── .eslintrc.js           # Configuración de ESLint
├── .gitignore             # Archivos ignorados por Git
├── .prettierrc.js         # Configuración de Prettier
├── nodemon.json           # Configuración de Nodemon (para desarrollo)
├── package.json           # Dependencias y scripts del proyecto
├── README.md              # Documentación del proyecto (este archivo)
└── tsconfig.json          # Configuración del compilador TypeScript
```

### 📘 Documentación de Swagger/OpenAPI

Hemos integrado Swagger UI para documentar automáticamente tu API.

### 📄 URL de la Documentación

Accede a la documentación interactiva aquí:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs) ⚠️ Ajusta el puerto según tu configuración.

### 🛠️ Cómo Utilizar la API

#### 1. Configuración Inicial

##### Variables de entorno

Copia el archivo `.env.example` a `.env` y configura los valores necesarios:

```env
PORT=tu-port
MONGODB_URI=tu-url-db
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=1d
```

#### Instalación de dependencias

Usa uno de los siguientes comandos:

```bash
npm install
# o
pnpm install
```

#### Ejecución en desarrollo

```bash
npm run dev
# o
pnpm dev
```

### 🚀 Endpoints Disponibles

#### 🔐 Autenticación

| Método | Endpoint               | Descripción               |
|--------|-------------------------|---------------------------|
| POST   | `/api/v1/auth/register` | Registrar nuevo usuario   |
| POST   | `/api/v1/auth/login`    | Iniciar sesión            |
<!-- | POST   | `/api/v1/auth/logout`   | Cerrar sesión             | -->
<!-- | GET    | `/api/v1/auth/me`       | Obtener información del usuario actual | -->

#### 👤 Usuarios (Ejemplo)

| Método | Endpoint               | Descripción               |
|--------|-------------------------|---------------------------|
| GET    | `/api/v1/user/profile`  | Obtener informacion del usuario actual |
<!-- | GET    | `/api/v1/users/:id`     | Obtener un usuario específico |
| PUT    | `/api/v1/users/:id`     | Actualizar un usuario      |
| DELETE | `/api/v1/users/:id`     | Eliminar un usuario        | -->

⚠️ Ajusta el puerto según tu configuración.

### 🌟 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar esta plantilla, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request en este repositorio.

### 🧩 Recursos Adicionales

- [Documentación oficial de Node.js](https://nodejs.org/es/docs/)
- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación oficial de Express.js](https://expressjs.com/es/)
- [Documentación oficial de Mongoose](https://mongoosejs.com/docs/)
- [Documentación oficial de Swagger](https://swagger.io/docs/)

### 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
