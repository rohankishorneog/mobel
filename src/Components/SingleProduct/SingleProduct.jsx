import React, { useContext, useEffect   } from "react";
import { Link, useParams } from "react-router-dom"; // Import the useParams hook
import './SingleProduct.css'
import { ProductContext } from "../../contexts/ProductContext"; // Make sure to import the context from the correct file
import { Cartbutton } from "../Buttons/CartButton/CartButton";
import WishListButton from "../Buttons/WishlistButton/WishListButton";
import NavBar from "../NavBar/NavBar";

const SingleProduct = () => {
  const { id} = useParams(); // Access the "productId" from the URL parameter
  const { selectedProduct, getProduct } = useContext(ProductContext);

  // Fetch the selected product when the component mounts or when the "productId" changes
  useEffect(() => {
    getProduct(id);
  }, [id]);

  // Show loading message while fetching data
  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  // Display the product information once data is available
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
