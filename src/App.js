import "./App.css";
import RotatingLinks from "./Components/RotatingLink/RotatingLinks";


import { Routes,Route } from "react-router-dom";
import  SingleProduct  from "./Components/SingleProduct/SingleProduct";
import Landing from './Pages/Landing/Landing'
import LoginPage from "./Pages/loginpage/LoginPage";
import SignupPage from "./Pages/signupPage/SignupPage";
import RequiresAuth from "./Components/RequiresAuth"
import {Cart} from "./Components/Cart/Cart"
import {Wishlist }from "./Components/Wishlist/Wishlist"



function App() {
  return (
    <div className="App">
          <RotatingLinks/>
          <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
            <Route path="/newCollection" element={<div>New element</div>}/>
            <Route path="/rugCollection" element={<div>Rug element</div>}/>
            <Route path="/products/:id" element={<SingleProduct/>}/>
             <Route path='/wishlist' element={
          <RequiresAuth><Wishlist/></RequiresAuth>}/>
           <Route path='/cart' element={
          <RequiresAuth><Cart/></RequiresAuth>}/>
           {/* <Route path='/profile' element={
          <RequiresAuth><Profile/></RequiresAuth>}/> */}
          </Routes>

    </div>
  );
}

export default App;
