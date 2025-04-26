import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from "../../api.jsx";
import { AuthContext } from '../../context/AuthContext.jsx';


const Login = () => {
    const [form, setForm] = useState({email:"", password: ""});
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await API.post("/users/login", form);
        login(res.data.token);
        navigate("/dashboard");
    }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-900'>
      <div className='flex flex-col items-center border-2 border-gray-800 rounded-lg p-6 bg-gray-800'>
      <h2 className='text-2xl font-bold text-white mb-6'>Login</h2>
        <form
        className='flex flex-col gap-4 bg-gey-700'
        onSubmit={handleSubmit}>
            <input
            className="flex-1 px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
            <input
            className="flex-1 px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
            <button
            className='px-4 py-2 flex-1 rounded bg-gray-800 text-white border border-gray-800'
            type='submit'> Login </button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
