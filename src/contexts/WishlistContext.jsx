
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistContents, setWishlistContents] = useState([]);

  useEffect(() => {
    const getWishlistContents = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`/api/user/wishlist`, {
          headers: { authorization: token }
        });
        console.log(response);
        if (response.status === 200) {
          setWishlistContents(response.data.wishlist);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getWishlistContents();
  }, []);

  const addItemToWishlist = async (newProduct) => {
    const token = localStorage.getItem('token');
    console.log(newProduct);

    console.log(token);

    try {
      const response = await axios.post(`/api/user/wishlist`, { product: newProduct }, {
        headers: { authorization: token }
      });
      console.log(response);
      if (response.status === 201) {
        setWishlistContents(response.data.wishlist);
        toast.success("product added to wishlist")
      }
    } catch (error) {
      console.log(error.message);
    }
  }; 


  const removeItemFromWishlist = async (productId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: token
        }
      });
      setWishlistContents(response.data.wishlist);
      toast.success("product removed from wishlist")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlistContents, addItemToWishlist, removeItemFromWishlist,  }}>
      {children}
    </WishlistContext.Provider>
  );
};
