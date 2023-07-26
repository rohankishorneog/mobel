import { useContext } from "react";
import { WishlistContext } from "../../../contexts/WishlistContext";

 const WishListButton = ({ product }) => {
  const { addItemsToWishlist } = useContext(WishlistContext);

  const handleWishlist = () => {
    addItemsToWishlist(product);
  };

  return <button onClick={handleWishlist}>Add to wishlist</button>;
};


export default WishListButton
