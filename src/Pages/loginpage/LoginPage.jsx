import React from 'react';
import Login from '../../Components/login/Login';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <Login />
        <Link to="/signup">Don't have an account?</Link>
      </div>
    </div>
  );
};

export default LoginPage;
