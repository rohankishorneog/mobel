import { useContext } from "react";
import { WishlistContext } from "../../../contexts/WishlistContext";
import { toast } from "react-toastify";
import "./WishListButton.css"

 const WishListButton = ({ newProduct }) => {
  const { wishlistContents,addItemToWishlist } = useContext(WishlistContext);

  const handleWishlist = () => {
    if(wishlistContents.find(content=>content._id===newProduct._id)){
      toast.error('item already added')
    }else{
      addItemToWishlist(newProduct);
    }
    
  };

  return <button className="wishlist-button"onClick={handleWishlist}>ADD TO WISHLIST</button>;
};


export default WishListButton
