import React from 'react';
import Login from '../../Components/login/Login';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>HELLO AGAIN</h2>
      <p>Not an insider yet? <Link className="signup-link"to="/signup">Sign up for an account</Link></p>
      <div className="login-card">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
