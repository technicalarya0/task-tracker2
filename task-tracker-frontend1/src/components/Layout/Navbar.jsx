import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 px-4 py-3 flex items-center justify-between shadow-md">
    <div className="flex items-center space-x-2">
      <span className="text-white font-bold text-xl tracking-wide">TaskTracker</span>
    </div>
    <div className="flex space-x-4">
      <Link to="/dashboard" className="text-white hover:text-blue-200 transition">Dashboard</Link>
      <Link to="/login" className="text-white hover:text-blue-200 transition">Login</Link>
      <Link to="/signup" className="text-white hover:text-blue-200 transition">Sign Up</Link>
    </div>
  </nav>
  );
};

export default Navbar;
