import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import ProjectList from "./components/Dashboard/ProjectList";
import AuthProvider from "./context/AuthContext";
import TaskListPage from "./components/Dashboard/TaskListPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProjectList />} />
            <Route path="/dashboard/taskList/:title" element={<TaskListPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;