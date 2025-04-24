# Task Tracker Application

A full-stack task management application built with React.js and Node.js that allows users to create projects and track tasks.

## Features

- User authentication (signup/login)
- Create and manage projects
- Create and manage tasks within projects
- Task status tracking
- Maximum 8 projects per user
- JWT-based authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```sh
cd task-tracker-backend
```

2. Install dependencies:
```sh
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```
MONGO_URI = "your_mongodb_connection_string"
JWT_SECRET = "your_jwt_secret_key"
```

4. Start the backend server:
```sh
node server.js
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```sh
cd task-tracker-frontend
```

2. Install dependencies:
```sh
npm install
```

3. Create a `.env` file in the frontend directory with:
```
BACKEND_URI = "http://localhost:5000"
```

4. Start the frontend development server:
```sh
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Project Structure

### Backend
- `/controllers` - Request handlers
- `/models` - Database schemas
- `/routes` - API routes
- `/middlewares` - Custom middleware (auth)

### Frontend
- `/src/components` - React components
- `/src/context` - React context (auth)
- `/src/api.js` - API integration

## API Endpoints

### Users
- `POST /api/users/signup` - Register new user
- `POST /api/users/login` - User login

### Projects
- `POST /api/projects` - Create new project
- `GET /api/projects` - Get user's projects

### Tasks
- `POST /api/tasks` - Create new task
- `GET /api/tasks` - Get project tasks
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Tech Stack

- Frontend: React.js, React Router, Axios
- Backend: Node.js, Express.js, MongoDB
- Authentication: JWT, bcrypt
- Other: dotenv, cors