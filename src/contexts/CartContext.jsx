import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartContents, setCartContents] = useState([]);

  const addItem = (product) => {
    setCartContents((cartContents) => [...cartContents, product]);
  };
  const removeItem = (product) => {
    setCartContents((cartContents) =>
      cartContents.filter((cartItem) => cartItem.id !== product.id)
    );
  };

  return (
    <CartContext.Provider value={{ cartContents, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
