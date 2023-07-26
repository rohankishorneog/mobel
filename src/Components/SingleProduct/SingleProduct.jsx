import React, { useContext, useEffect   } from "react";
import { useParams } from "react-router-dom"; // Import the useParams hook
import { ProductContext } from "../../contexts/ProductContext"; // Make sure to import the context from the correct file

const SingleProduct = () => {
  const { id} = useParams(); // Access the "productId" from the URL parameter
  console.log(id)
  const { selectedProduct, getProduct } = useContext(ProductContext);

  // Fetch the selected product when the component mounts or when the "productId" changes
  useEffect(() => {
    getProduct(id);
  }, [id,getProduct]);

  // Show loading message while fetching data
  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  // Display the product information once data is available
  return (
    <div>
      <h2>{selectedProduct.name}</h2>
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default SingleProduct;
