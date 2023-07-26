import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [WishlistContents, setWishlistContents] = useState([]);

  const addItemsToWishlist = (product) => {
    setWishlistContents((WishlistContents) => [...WishlistContents, product]);
  };
  const removeItemsFromWishList = (product) => {
    setWishlistContents((WishlistContents) =>
      WishlistContents.filter((item) => item.id !== product.id)
    );
  };

  return (
    <WishlistContext.Provider
    
      value={{ WishlistContents, addItemsToWishlist, removeItemsFromWishList }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
