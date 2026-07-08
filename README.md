# Habit Tracker

Aplicación web full stack para gestionar hábitos personales, realizar seguimiento diario y visualizar el progreso de cada usuario.

## Estado del proyecto

🚧 En desarrollo

Actualmente cuenta con autenticación completa, gestión de hábitos y seguimiento de rachas. Se continúan agregando nuevas funcionalidades y mejoras en la interfaz.

## Tecnologías

### Backend

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- express-validator

### Frontend

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- React Toastify
- Lucide React

## Funcionalidades

### Autenticación

- Registro de usuarios
- Inicio de sesión
- Contraseñas cifradas con bcrypt
- Autenticación mediante JWT
- Persistencia de sesión
- Protección de rutas privadas

### Gestión de hábitos

- Crear hábitos
- Editar hábitos
- Eliminar hábitos
- Marcar hábitos como completados
- Seguimiento automático de rachas
- Frecuencia diaria y semanal
- Validación de datos

### Interfaz

- Diseño responsive
- Notificaciones con React Toastify
- Formularios reutilizables mediante componentes
- Navegación protegida mediante React Router

## Estructura del proyecto

```text
habit_tracker/
├── backend/
│   ├── src/
│   └── package.json
│
└── frontend/
    ├── src/
    └── package.json
```

## Próximas mejoras

- Dashboard con estadísticas
- Calendario de progreso
- Filtros y búsqueda de hábitos
- Perfil de usuario
- Tests automatizados
- Deploy de la aplicación

## Instalación

### Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Autor

**Santiago Josué Fernández**
