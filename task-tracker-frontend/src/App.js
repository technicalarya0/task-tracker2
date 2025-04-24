import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Signup from "./components/Auth/Signup";
import dotenv from "dotenv";

dotenv.config();

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProjectList />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
