import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { ProductContextProvider } from "./contexts/ProductContext";
import { WishlistContextProvider } from "./contexts/WishlistContext";
import { CartContextProvider } from "./contexts/CartContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AddressContextProvider } from "./contexts/AddressContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <AddressContextProvider>
    <ProductContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <Router>
            <App />
          </Router>
        </WishlistContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
    </AddressContextProvider>

    </AuthContextProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
