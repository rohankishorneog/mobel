import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartContents, setCartContents] = useState([]);
  

  useEffect(() => {
    const getCartContents = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`/api/user/cart`, {
          headers: { authorization: token }
        });
        console.log(response)
        if (response.status === 200) {
          setCartContents(response.data.cart);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCartContents();
  }, []);

  const addItem = async (newProduct) => {
    const token = localStorage.getItem('token');
    console.log(newProduct);
    

    console.log(token);
  
    
    try {
      const response = await axios.post(`/api/user/cart`, {product:
      newProduct} , {
        headers: { authorization: token }
      });
      console.log(response);
      if (response.status === 201) {
        setCartContents(response.data.cart);
        toast.success("Product added to cart")
      }
    } catch (error) {
      console.log(error.message);
    }
  }; 
const increment=async(productId)=>{
  console.log(productId)
    const token = localStorage.getItem('token');
    try {
      const response=await axios.post(`/api/user/cart/${productId}`,{
        action:{
          type:"increment"
        }
      },{
        headers:{
          authorization:token,
        }
      })
      console.log(response)
      if(response.status===200){
        setCartContents(response.data.cart)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  const decrement=async(productId)=>{
    console.log(productId)
      const token = localStorage.getItem('token');
      try {
        const response=await axios.post(`/api/user/cart/${productId}`,{
          action:{
            type:"decrement"
          }
        },{
          headers:{
            authorization:token,
          }
        })
        console.log(response)
        if(response.status===200){
          setCartContents(response.data.cart)
        }
        
      } catch (error) {
        console.log(error)
      }
    }

  const removeItem = async(productId) => {
    const token=localStorage.getItem('token')
    try {
      const response=await axios.delete(`/api/user/cart/${productId}`,{
        headers:{
          authorization:token
        }
      })
      setCartContents(response.data.cart)
      toast.success("product deleted successfully")
      
    } catch (error) {
      
    }
  };

  return (
    <CartContext.Provider value={{ cartContents, addItem, removeItem, increment,decrement }}>
      {children}
    </CartContext.Provider>
  );
};
