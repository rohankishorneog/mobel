import { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";

export const Wishlist = () => {
  const { WishlistContents, removeItemsFromWishList } = useContext(
    WishlistContext
  );
  const handleRemove = (item) => {
    removeItemsFromWishList(item);
  };

  return (
    <div>
      <h1>Wishlist</h1>
      {WishlistContents.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <button onClick={() => handleRemove(item)}>
            Remove from wishlist
          </button>
        </div>
      ))}
    </div>
  );
};
