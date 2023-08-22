import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Cart.css"
import {GrAdd, GrCart, GrTrash  } from "react-icons/gr";

export const Cart = () => {
  const { cartContents, increment } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);

  const handleRemove = (item) => {
    removeItem(item);
  };
  
  if (!cartContents || cartContents.length === 0) {
    return <div className="cart-main-div">Cart is empty</div>;
  }else{
    return ( 
      <div className="cart-main-div">
        <h4>Your Cart <span><GrCart/></span></h4>
        <div className="tally tally-div">
          <h6 className="tally-item">Item</h6>
          <h6 className="tally-qty">qty</h6>
          <h6 className="tally-price">price</h6>
        </div>
        {cartContents.map((item) => (
          <div className="tally tally-product-div" key={item._id}>
            <p className="tally-item item-item">{item.title}</p>
           
            <p className="tally-qty item-qty">
              <p>{item.qty}</p>
            <button onClick={()=>increment(item._id)} ><span><GrAdd/></span></button>
            </p>

            <div className="tally-price item-price">
            <p>Rs{item.price}</p>
             < button onClick={() => handleRemove(item._id)}><GrTrash/> </button>
            </div>
          </div>
        ))}
        <div className="checkout-button-div">
        <Link className="checkout-link" to="/checkout">
        <button className="cart-checkout-button">CHECKOUT NOW</button>
        </Link>
        </div>
      </div>
    );

  }

};
