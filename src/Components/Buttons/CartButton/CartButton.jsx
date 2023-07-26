import { useContext } from "react";

import { CartContext } from "../../../contexts/CartContext";

export const Cartbutton = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(product);
  };
  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
