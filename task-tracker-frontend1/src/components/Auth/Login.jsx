import React, { useContext, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import API from "../../api.jsx";
import { AuthContext } from '../../context/AuthContext.jsx';

const Login = () => {
    const [form, setForm] = useState({email:"", password: ""});
    const [error, setError] = useState("");
    const {user, login} = useContext(AuthContext);
    const navigate = useNavigate();

    if(user){
      return <Navigate to="/dashboard" replace/>
    }

    const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
          const res = await API.post("/api/users/login", form);
          login(res.data.token);
          navigate("/dashboard");
      } catch (err) {
          setError(err.response?.data?.message || "Login failed");
      }
    }

    return (
      <div className='flex justify-center items-center min-h-screen bg-gray-900'>
        <div className='w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center'>
          <h2 className='text-3xl font-bold text-white mb-8'>Login</h2>
          {error && <div className="text-red-400 mb-4 w-full text-center">{error}</div>}
          <form
            className='flex flex-col w-full gap-5'
            onSubmit={handleSubmit}>
              <input
                className="px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                className="px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                className='w-full py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition'
                type='submit'
              >
                Login
              </button>
          </form>
        </div>
      </div>
    )
}

export default Login