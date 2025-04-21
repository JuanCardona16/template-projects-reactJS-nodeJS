# Sistema de Autenticación con ReactJS y NodeJS

¡Bienvenido al repositorio `authentication-system-react-nodejs-plantilla`! Este proyecto proporciona una plantilla completa para desarrollar un sistema de autenticación utilizando **ReactJS** en el frontend y **NodeJS** en el backend. Su objetivo es ofrecer una base sólida para proyectos que requieran autenticación de usuarios.

## Estructura del Proyecto

El repositorio está organizado en dos directorios principales:

- **`backend`**: Contiene el código fuente del servidor backend desarrollado con **NodeJS** y **Express**. Este módulo maneja la lógica del lado del servidor, incluyendo autenticación, gestión de usuarios y sesiones.
- **`frontend`**: Contiene el código fuente del cliente frontend desarrollado con **ReactJS**. Este módulo se encarga de la interfaz de usuario y la interacción con el servidor para procesos de autenticación.

## Características

- **Autenticación Segura**: Registro e inicio de sesión con manejo de contraseñas cifradas.
- **Gestión de Sesiones**: Uso de tokens JWT para autenticar y autorizar usuarios.
- **Estructura Modular**: Código organizado para facilitar el mantenimiento y la escalabilidad.
- **Integración Frontend-Backend**: Comunicación fluida entre el cliente ReactJS y el servidor NodeJS.
- **Variables de Entorno**: Configuración flexible para entornos de desarrollo y producción.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) - Entorno de ejecución para JavaScript en el servidor.
- [pnpm](https://pnpm.io/es/) - Gestor de paquetes de Node.js.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### 1. Clona este repositorio:

```bash
git clone https://github.com/JuanCardona16/authentication-system-react-nodejs-plantilla.git
```

### 2. Instala las dependencias del servidor:

```bash
cd authentication-system-react-nodejs-plantilla/backend
pnpm install
```

### 3. Configura las variables de entorno del servidor:

Crea un archivo `.env` en el directorio `backend` con las siguientes variables:

```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

### 4. Inicia el servidor:

```bash
pnpm dev
```

El servidor debería estar ejecutándose en `http://localhost:5000/api/v1`.

### 5. Instala las dependencias del cliente:

```bash
cd ../frontend
pnpm install
```

### 6. Configura las variables de entorno del cliente:

Crea un archivo `.env` en el directorio `frontend` con las siguientes variables:

```env
REACT_APP_API_URL=http://localhost:5000
```

### 7. Inicia la aplicación cliente:

```bash
pnpm dev
```

La aplicación debería estar ejecutándose en `http://localhost:5173`.

## Uso

Una vez que ambos servidores (cliente y backend) estén en funcionamiento, podrás:

- **Registrar nuevos usuarios**: Accediendo a la ruta `/register` en el frontend.
- **Iniciar sesión**: Accediendo a la ruta `/login` en el frontend.
- **Acceder a rutas protegidas**: Navegando por la aplicación después de autenticarse correctamente.

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

> **Nota**: Este README está diseñado para reflejar la estructura y funcionalidad del proyecto. Para más detalles, revisa el código fuente y la documentación interna.
