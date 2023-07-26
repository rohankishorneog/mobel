import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { ProductContextProvider } from "./contexts/ProductContext";
import { WishlistContextProvider } from "./contexts/WishlistContext";
import { CartContextProvider } from "./contexts/CartContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <Router>
            <App />
          </Router>
        </WishlistContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
