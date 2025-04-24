import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api.js";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    Country: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/users/signup".form);
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="country"
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          required
        />
        <button type="submit"> SignUp </button>
      </form>
    </div>
  );
};

export default Signup;
