import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-gray-900 dark:bg-gray-950 px-6 py-4 flex items-center justify-between shadow-lg border-b border-gray-800 transition-colors duration-500">
      <span className="flex items-center gap-2 text-white font-bold text-2xl tracking-wide">
        <Link to="/" className="hover:text-blue-400 transition">TaskTracker</Link>
      </span>
      <div className="flex space-x-4 items-center">
        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded bg-gray-800 dark:bg-gray-900 text-white hover:bg-blue-600 border border-gray-700 transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        {user ? (
          <>
            <span className="text-gray-200 font-medium">Hello {user.name || user.email}</span>
            <Link to="/dashboard" className="text-gray-200 hover:text-blue-400 font-medium transition">
              Dashboard
            </Link>
            <button onClick={logOut} className="text-gray-200 hover:text-red-400 font-medium transition">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-200 hover:text-blue-400 font-medium transition">
              Login
            </Link>
            <Link to="/signup" className="text-gray-200 hover:text-blue-400 font-medium transition">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
