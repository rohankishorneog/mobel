import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import './CartButton.css'
import { toast } from "react-toastify";

export const Cartbutton = ({ newProduct }) => {
  console.log(newProduct);
  const { cartContents, addItem, increment } = useContext(CartContext);

  const handleAddToCart = () => {
    const existingProduct = cartContents.find((item) => item._id === newProduct._id);

    if (existingProduct) {
     
      increment(newProduct._id);
      toast.success("Incrementing product")
    } else {
    
      addItem(newProduct);
    }
  };

  return (
    <div>
      <button className="cart-button" onClick={handleAddToCart}>ADD TO CART</button>
    </div>
  );
};
