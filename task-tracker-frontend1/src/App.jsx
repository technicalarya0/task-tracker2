import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import ProjectList from "./components/Dashboard/ProjectList";
import AuthProvider from "./context/AuthContext";
import TaskListPage from "./components/Dashboard/TaskListPage";
import Footer from "./components/Layout/Footer";
import ThemeProvider from "./context/ThemeContext";
import Home from "./components/Layout/Home";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="App min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<ProjectList />} />
                <Route path="/dashboard/taskList/:title" element={<TaskListPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;