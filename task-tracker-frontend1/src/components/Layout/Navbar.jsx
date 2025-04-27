import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 px-4 py-3 flex items-center justify-between shadow-md">
      <span className="text-white font-bold text-xl">
        <Link to="/">TaskTracker</Link>
      </span>
      <div className="flex space-x-4">
        {user ? (
          <>
            <span className="text-white">Hello, {user.name || user.email}</span>
            <button onClick={logOut} className="text-white hover:text-gray-300">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="text-white hover:text-gray-300">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
