import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext()

export const ProductContextProvider=({children})=>{
    const [product,setProduct] = useState([])
    const [selectedProduct,setSelectedProduct] = useState([])
    const[isLoading, setIsloading]=useState(true)
    const [error,setError]=useState(null)


    //to get product
    
    useEffect(()=>{
        const getProduct=async()=>{

            try {
               const response= await axios.get(`/api/products`) 
               if(response.status===200){
                setProduct(response.data.products)
               }else{
                setError(response.message)
               }
    
            } catch (error) {
                setError(error)
            }
            finally{
                setIsloading(false)
            }
        }
        getProduct()
    },[])
    
  const getProduct=async(id)=>{
    console.log(id)

    try {
        const response = await axios.get(`/api/products/${id}`);
        console.log(response);
        if (response.status === 200) {

          setSelectedProduct(response.data.product);
          console.log(selectedProduct)
          
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.log(error);
      }
  }


    return(
        <ProductContext.Provider value={{product, isLoading, error, getProduct, selectedProduct}}>
            {children}
        </ProductContext.Provider>
    )


}
