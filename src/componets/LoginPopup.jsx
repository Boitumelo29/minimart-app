import React, { useContext, useState,  } from "react";
import { AuthContext } from "../context/AuthContext";
import '../styles/LoginPopUp.css'

const LoginPopup = ({ close }) => {
    const { login, signUpUser } = useContext(AuthContext);
    const [isLoginView, setLoginView] = useState(true);
    const [form, setForm] = useState({ username: '', password: '' });
 
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        isLoginView ? await login(form.email, form.password) : await signUpUser(form.username,form.email, form.password);
        close();
      } catch (err) {
        alert('Login failed');
      }
    };
  
    return (
      <div className="login-popup">
         <button className="close-btn" onClick={close}>X</button>
        <h1>{isLoginView ? 'Login' :'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>

        { !isLoginView &&(  <input name="username" placeholder="Username" onChange={handleChange} value={form.username}/>)}
          <input name="email" placeholder="Email" onChange={handleChange} value={form.email}/>
          <input name="password"  value={form.password} type="password" placeholder="Password" onChange={handleChange} />
          <button className="auth-btn" type="submit">{isLoginView ? 'Login' :'Sign Up'}</button>
        </form>
        <div className="auth-toggle">
          {
            isLoginView? (<p>Don't have an account? <span onClick={() => setLoginView(false)}>Sign Up</span></p>):
            ( <p>Already have an account? <span onClick={() => setLoginView(true)}>Login</span></p>)
          }
        </div>
      </div>
    );
  };
  
  export default LoginPopup;