# Habit Tracker

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?logo=jsonwebtokens)

Aplicación web **Full Stack** para la gestión de hábitos personales. Permite a los usuarios crear, organizar y realizar seguimiento de sus hábitos diarios mediante un sistema de autenticación seguro, persistencia de datos y cálculo automático de rachas de progreso.

---

# Demo

**Aplicación**

> Próximamente

**API**

> Próximamente

---

# Capturas

> Próximamente

<!--
![Login](docs/login.png)

![Dashboard](docs/dashboard.png)

![Hábitos](docs/habits.png)

![Perfil](docs/profile.png)
-->

---

# Estado del proyecto

🚧 En desarrollo

Actualmente cuenta con autenticación completa, gestión de hábitos y seguimiento automático de rachas.

Próximas mejoras:

- Dashboard con estadísticas.
- Calendario de progreso.
- Filtros y búsqueda de hábitos.
- Perfil de usuario.
- Tests automatizados.
- Deploy completo de la aplicación.

---

# Características

## Autenticación

- Registro de usuarios.
- Inicio de sesión.
- Contraseñas protegidas mediante bcrypt.
- Autenticación mediante JWT.
- Persistencia de sesión.
- Protección de rutas privadas.

## Gestión de hábitos

- Crear hábitos personales.
- Editar hábitos existentes.
- Eliminar hábitos.
- Marcar hábitos como completados.
- Seguimiento automático de rachas.
- Configuración de frecuencia diaria o semanal.
- Validación de datos.

## Interfaz

- Diseño responsive.
- Componentes reutilizables.
- Formularios dinámicos.
- Notificaciones mediante React Toastify.
- Navegación protegida.
- Actualizaciones optimistas de interfaz.

---

# Tecnologías

## Frontend

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- React Toastify
- Lucide React

## Backend

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- Express Validator
- Morgan

---

# Arquitectura

```text
                 Usuario
                    │
                    ▼
          React + Vite + Tailwind
                    │
                  Axios
                    │
                    ▼
          Express REST API
                    │
            JWT + Middleware
                    │
                    ▼
             MongoDB Atlas
```

---

# Estructura del proyecto

```text
habit_tracker
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   └── utils
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── hooks
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Instalación

## Clonar el repositorio

```bash
git clone https://github.com/SantiJosue/habit_tracker.git
```

Entrar al proyecto:

```bash
cd habit_tracker
```

---

# Backend

Instalar dependencias:

```bash
cd backend
npm install
```

Crear archivo `.env`:

```env
PORT=
MONGODB_URI=
JWT_SECRET=
```

Ejecutar en desarrollo:

```bash
npm run dev
```

---

# Frontend

Instalar dependencias:

```bash
cd frontend
npm install
```

Crear archivo `.env`:

```env
VITE_API_URL=http://localhost:4000/api
```

Ejecutar:

```bash
npm run dev
```

---

# Scripts disponibles

## Backend

```bash
npm run dev
```

Ejecuta el servidor en modo desarrollo.

```bash
npm run build
```

Compila el proyecto.

---

## Frontend

```bash
npm run dev
```

Inicia Vite.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run preview
```

Previsualiza la aplicación compilada.

---

# Autor

**Santiago Fernández**

Desarrollador Frontend con conocimientos en desarrollo Full Stack utilizando React, TypeScript, Node.js, Express y MongoDB.

GitHub:
https://github.com/SantiJosue

---

# Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje.
