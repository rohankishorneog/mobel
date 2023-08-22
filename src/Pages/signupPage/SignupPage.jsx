import React from 'react';
import SignUp from '../../Components/signup/SignUp';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>BECOME AND INSIDER</h1>
        <Link to="/login">Already have an account?</Link>
        <SignUp />
        
      </div>
    </div>
  );
};

export default SignupPage;
