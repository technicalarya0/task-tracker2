import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from "../../api.js";
import { AuthContext } from '../../context/AuthContext.js';


const Login = () => {
    const [form, setForm] = useState({email:"", password: ""});
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    handleChange = e => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await API.post("/users/login", form);
        login(res.data.token);
        navigate("/dashboard");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required/>
            <button type='submit'> SignUp </button>
        </form>
    </div>
  )
}

export default Login
