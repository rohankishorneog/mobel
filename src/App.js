import "./App.css";
import RotatingLinks from "./Components/RotatingLink/RotatingLinks";
//  import Mockman from  'mockman-js'

import { Routes,Route } from "react-router-dom";
import  SingleProduct  from "./Components/SingleProduct/SingleProduct";
import Landing from './Pages/Landing/Landing'
import LoginPage from "./Pages/loginpage/LoginPage";
import SignupPage from "./Pages/signupPage/SignupPage";
import RequiresAuth from "./Components/RequiresAuth"
import {Cart} from "./Components/Cart/Cart"
import {Wishlist }from "./Components/Wishlist/Wishlist"
import SingleCategory from "./Components/SingleCategory/SingleCategory";
import Profile from "./Components/Profile/Profile";
import Address from "./Components/Address/Address";
import CheckOutPage from "./Pages/checkoutPage/CheckOutPage";
import AllProducts from "./Components/AllProducts/AllProducts";
import NavBar from "./Components/NavBar/NavBar";



function App() {
  return (
    <div className="App">
          <RotatingLinks/>
          <NavBar/>
          {/* <Mockman/> */}
          <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
            <Route path="/newCollection" element={<div>New element</div>}/>
            <Route path="/rugCollection" element={<div>Rug element</div>}/>
            <Route path="/products" element={<AllProducts/>}/>
            <Route path="/products/:id" element={<SingleProduct/>}/>
            <Route path="/categories/:categoryName" element={<SingleCategory/>}/>
             <Route path='/wishlist' element={
          <RequiresAuth><Wishlist/></RequiresAuth>}/>
           <Route path='/cart' element={
          <RequiresAuth><Cart/></RequiresAuth>}/>
           <Route path='/profile' element={
          <RequiresAuth><Profile/></RequiresAuth>}/>
          <Route path='/address' element={
          <RequiresAuth><Address/></RequiresAuth>}/>
        
          <Route path='/checkout' element={
          <RequiresAuth><CheckOutPage/></RequiresAuth>}/>
          </Routes>

    </div>
  );
}

export default App;
