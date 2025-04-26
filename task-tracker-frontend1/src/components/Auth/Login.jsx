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
      <h2 className='text-2xl font-bold text-white mb-6'>Login</h2>
        <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
            <button type='submit'> Login </button>
        </form>
    </div>
  )
}

export default Login
