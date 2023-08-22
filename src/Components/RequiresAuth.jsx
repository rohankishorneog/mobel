import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import LoginPage from '../Pages/loginpage/LoginPage';


const RequiresAuth = ({ children }) => {
  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser)


  return loggedInUser!==null?children: <LoginPage/>
};


export default RequiresAuth