import React, { useContext, useState,  } from "react";
import { AuthContext } from "../context/AuthContext";
import '../styles/LoginPopUp.css'

const LoginPopup = ({ close }) => {
    const { login } = useContext(AuthContext);
    const [form, setForm] = useState({ username: '', password: '' });
  
    const handleChange = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login(form.username, form.password);
        close();
      } catch (err) {
        alert('Login failed');
      }
    };
  
    return (
      <div className="login-popup">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginPopup;