import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/MFS_Sep/AF/Affordability/ILM/640-45._CB404312186_.jpg"
          alt="Amazon ad"
        />
        <div className="checkout_title">
          <h2>Your Shopping Cart</h2>
          {/*Basket-Item*/}
          {/*Basket-Item*/}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
