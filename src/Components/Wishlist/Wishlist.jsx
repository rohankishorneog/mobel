import React, { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import "./Wishlist.css"; 
import { Cartbutton } from "../Buttons/CartButton/CartButton";

export const Wishlist = () => {
  const { wishlistContents, removeItemFromWishlist } = useContext(WishlistContext);

  const handleRemove = (item) => {
    removeItemFromWishlist(item);
  };

  if (!wishlistContents || wishlistContents.length === 0) {
    return (
      <div className="wishlist-main-div">
        <p className="empty-wishlist">Add items to your wishlist</p>
      </div>
    );
  } else {
    return (
      <div className="wishlist-main-div">
        {wishlistContents.map((item) => (
          <div className="wishlist-item" key={item._id}>
            <img src={item.imageUrl} alt={item.title} />
            <div>
            <p>{item.title}</p>
            <p className="wishlist-price">price: RS{item.price}</p>
            </div>
            
            <button className="wishlist-remove-button" onClick={() => handleRemove(item._id)}>remove</button>
            <Cartbutton newProduct={item}/>
          </div>
        ))}
      </div>
    );
  }
};
