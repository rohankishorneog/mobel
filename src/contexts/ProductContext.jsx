import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext()

export const ProductContextProvider=({children})=>{
    const [product,setProduct] = useState([])
    const [categories,setCategories] = useState([])
    const [selectedProduct,setSelectedProduct] = useState([])
    const[productsByCategory,setProductsByCategory] = useState([])
    const [selectedCategory,setSelectedCategory] = useState(null)
    const[isLoading, setIsloading]=useState(true)
    const [error,setError]=useState(null)


    //to get product
    
    useEffect(()=>{
        const getProducts=async()=>{

            try {
               const response= await axios.get(`/api/products`) 
               console.log(response.data.products)
               if(response.status===200){
                setProduct(response.data.products)
                console.log(product)
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
        getProducts()
    },[])
    console.log(product)
    
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

  //to get the categories
  useEffect(()=>{
    const getCategories= async()=>{
      try {
        const response= await axios.get(`/api/categories`)
        console.log(response)
        if(response.status===200){
            setCategories(response.data.categories)

        }
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getCategories()

  },[])

  const getCategoryByID=async(id)=>{
    try {
      const response = await axios.get(`/api/categories/${id}`)
      console.log(response)
      setSelectedCategory(response.data.category)
      
    } catch (error) {
      
    }
  }


  



    return(
        <ProductContext.Provider value={{product, isLoading, error, getProduct, selectedProduct,categories,getCategoryByID, selectedCategory, productsByCategory, setProductsByCategory}}>
            {children}
        </ProductContext.Provider>
    )


}
