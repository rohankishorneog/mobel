import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);
    await login(formData);
    navigate('/cart');
  };

  const handleLoginAsAdarshBalika = async () => {
    await login({ email: 'adarshbalika@gmail.com', password: 'adarshbalika' });
    navigate('/cart');
  };


  return (
    <div className='login-main-div'>
      
      <form className="login-form" id="loginForm" onSubmit={handleLogin}>
        <div className='login-form-contents'> 
        
        <label className='login-labels'>
          <span className='login-label-text'>Email address</span>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className='login-labels'>
          <span className='login-label-text'>Password</span>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        </div>

       
        <button type="submit">LOGIN</button>
        
      </form>
      <button className="login-default"onClick={handleLoginAsAdarshBalika}>LOGIN AS ADARSHBALIKA</button>
     
    </div>
  );
};

export default Login;
