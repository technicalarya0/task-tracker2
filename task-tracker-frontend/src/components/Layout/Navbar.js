import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/dashboard">Home</Link>
      {user ? (
        <>
          <span>Welcome {user.name}</span>
          <button onClick={logOut}>LogOut</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
