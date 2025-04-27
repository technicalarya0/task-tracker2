# Task Tracker Application

A full-stack task management application built with Node.js, Express, MongoDB (backend), and React (frontend, Vite-based).  
Users can sign up, log in, create projects, and manage tasks.

---

## Features

- User authentication (JWT)
- Create, view, and manage projects (max 8 per user)
- Create, view, and manage tasks within projects
- Responsive UI with Tailwind CSS
- Secure password hashing

---

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)

---

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/task-tracker.git
cd task-tracker
```

---

## Backend Setup (`task-tracker-backend`)

1. **Install dependencies:**
    ```sh
    cd task-tracker-backend
    npm install
    ```

2. **Configure environment variables:**  
   Create a `.env` file in `task-tracker-backend` with:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

3. **Start the backend server:**
    ```sh
    npm start
    ```
    The backend will run at [http://localhost:5000](http://localhost:5000).

---

## Frontend Setup (`task-tracker-frontend1` with Vite)

1. **Install dependencies:**
    ```sh
    cd ../task-tracker-frontend1
    npm install
    ```

2. **Configure environment variables:**  
   Create a `.env` file in `task-tracker-frontend1` with:
    ```
    VITE_BACKEND_URI=http://localhost:5000/api
    ```

3. **Start the frontend (Vite) dev server:**
    ```sh
    npm run dev
    ```
    The frontend will run at [http://localhost:5173](http://localhost:5173) by default.

---

## Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Sign up for a new account.
- Log in and start creating projects and tasks.

---

## Project Structure

```
task-tracker/
│
├── task-tracker-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── db/
│   └── server.js
│
├── task-tracker-frontend1/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── api.jsx
│   │   └── main.jsx
│   └── index.html
│
└── README.md
```

---

## API Endpoints

### Auth
- `POST /api/users/signup` — Register a new user
- `POST /api/users/login` — Log in

### Projects
- `GET /api/projects` — Get all projects for the user
- `POST /api/projects` — Create a new project

### Tasks
- `GET /api/tasks?projectId=...` — Get tasks for a project
- `POST /api/tasks` — Create a new task
- `DELETE /api/tasks/:id` — Delete a task

---

## Frontend (Vite) Notes

- All environment variables must be prefixed with `VITE_` (e.g., `VITE_BACKEND_URI`).
- To build for production:
    ```sh
    npm run build
    ```
- To preview the production build:
    ```sh
    npm run preview
    ```

---

## .gitignore

Make sure your `.gitignore` includes:
```
node_modules/
.env
dist/
build/
.vscode/
```

---