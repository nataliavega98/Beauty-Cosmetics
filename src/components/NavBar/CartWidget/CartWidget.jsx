import "./CartWidget.css";
import React from "react";

const CartWidget = () => {
  return (
    <div className="Cart">
      <div className="IconCart">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>1</span>
      </div>
      Carrito
    </div>
  );
};

export default CartWidget;
