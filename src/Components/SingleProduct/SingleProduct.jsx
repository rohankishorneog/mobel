import React, { useContext, useEffect   } from "react";
import { useParams } from "react-router-dom"; 
import './SingleProduct.css'
import { ProductContext } from "../../contexts/ProductContext";
import { Cartbutton } from "../Buttons/CartButton/CartButton";
import WishListButton from "../Buttons/WishlistButton/WishListButton";

const SingleProduct = () => {
  const { id} = useParams();
  const { selectedProduct, getProduct } = useContext(ProductContext);


  useEffect(() => {
    getProduct(id);
    //eslint-disable-next-line
  }, [id]);

 
  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div className="single-product-main-div">
       <div className="single-product-card">
       <img src={selectedProduct.imageUrl} alt={selectedProduct.title} />
       <div className="single-rpoduct-details">
       <h3>{selectedProduct.title}</h3>
      
      <p>Rs{selectedProduct.price}</p>
      <div className="add-buttons"> 
      <Cartbutton newProduct={selectedProduct}/>
      <WishListButton newProduct={selectedProduct}/>
      <hr/>
      
      <h4>Description</h4>
    
      <p>{selectedProduct.description}</p>

      </div>
      
       </div>
    </div>

    </div>

   </div>
  );
};

export default SingleProduct;
