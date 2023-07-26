import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Cart = () => {
  const { cartContents } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);

  if (!cartContents || cartContents.length === 0) {
    return <div>Cart is empty</div>;
  }
  const handleRemove = (item) => {
    removeItem(item);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartContents.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>price: {item.price}</p>
          <button onClick={() => handleRemove(item)}>remove </button>
        </div>
      ))}
    </div>
  );
};
