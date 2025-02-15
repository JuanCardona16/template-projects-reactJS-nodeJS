# Proyecto de Plantillas ReactJS y NodeJS

¡Bienvenido al repositorio `template-projects-reactJS-nodeJS`! Este proyecto ofrece una colección de plantillas para desarrollar aplicaciones web utilizando **ReactJS** en el frontend y **NodeJS** en el backend. Su objetivo es proporcionar una base sólida para iniciar proyectos de manera eficiente y estructurada.

## Estructura del Proyecto

El repositorio está organizado en dos directorios principales:

- **`authentication-system-server`**: Contiene el código fuente del servidor backend desarrollado con **NodeJS** y **Express**. Este módulo maneja la lógica del lado del servidor, incluyendo la autenticación y la gestión de usuarios.
- **`authentication-system-client`**: Contiene el código fuente del cliente frontend desarrollado con **ReactJS**. Este módulo se encarga de la interfaz de usuario y la interacción con el servidor para procesos de autenticación y otras funcionalidades.

## Características

- **Autenticación de Usuarios**: Implementación de sistemas de registro e inicio de sesión seguros.
- **Gestión de Sesiones**: Manejo eficiente de sesiones de usuario.
- **Estructura Modular**: Código organizado para facilitar el mantenimiento y la escalabilidad.
- **Integración Frontend-Backend**: Comunicación fluida entre el cliente ReactJS y el servidor NodeJS.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) - Entorno de ejecución para JavaScript en el servidor.
- [pnpm](https://pnpm.io/es/) - Gestor de paquetes de Node.js.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### 1. Clona este repositorio:

```bash
git clone https://github.com/JuanCardona16/template-projects-reactJS-nodeJS.git
```

### 2. Instala las dependencias del servidor:

```bash
cd template-projects-reactJS-nodeJS/authentication-system-server
pnpm install
```

### 3. Configura las variables de entorno del servidor:

Crea un archivo `.env` en el directorio `authentication-system-server` con las siguientes variables:

```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

### 4. Inicia el servidor:

```bash
pnpm dev:node
```

El servidor debería estar ejecutándose en `http://localhost:3001`.

### 5. Instala las dependencias del cliente:

```bash
cd ../authentication-system-client
pnpm install
```

### 6. Configura las variables de entorno del cliente:

Crea un archivo `.env` en el directorio `authentication-system-client` con las siguientes variables:

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
<!-- 
## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agregar nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request**. -->

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

> **Nota**: Este README está basado en la estructura y características generales de proyectos que combinan **ReactJS** y **NodeJS**. Para información más específica, se recomienda revisar el código fuente y la documentación interna del proyecto.
