import React from "react";
import "./cartMenu.css";
import { useContext } from "react";
import { Contexto } from "../../Context/Context";

import ButtonPrimary from "../../Buttons/ButtonPrimary";
import ButtonSecondary from "../../Buttons/ButtonSecondary";
import ItemCart from "./ItemCart/itemCart";
import ButtonDisabledPrimary from "../../Buttons/ButtonDisabledPrimary";
import ButtonDisabledSecondary from "../../Buttons/ButtonDisabledSecondary";

const CartMenu = (props) => {
  const { setterClosed } = props;

  const { carrito, setterCarrito } = useContext(Contexto);

  const renderItems = carrito.map((producto) => (
    <ItemCart dataProducto={producto}></ItemCart>
  ));

  // fx para sumar precios
  const addUpPrices = () => {
    const extractPrices = carrito.map((item) => item.price * item.quantity);
    const addUp = extractPrices.reduce(function(a, b) {
      return a + b;
    });
    return addUp.toFixed(2);
  };

  return (
    <div className="cartMenu-container">
      <div className="cartMenu">
        <button className="closeCart" onClick={() => setterClosed(true)}>
          <i className="fa-solid fa-xmark close-cart"></i>Cerrar
        </button>

        {/* <!-- contenedor carrito --> */}
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          {/* <!-- card producto --> */}
          <div className="cart-products-container">
            {!carrito.length ? (
              <p className="cartEmpty">The cart is empty </p>
            ) : (
              renderItems
            )}
          </div>
          {/* <!-- total price --> */}
          <div className="total-product-container">
            <p>
              <b>Total: </b>$
              <span className="total">
                {!carrito.length ? 0 : addUpPrices()}
              </span>
            </p>
            {!carrito.length ? (
              <ButtonDisabledPrimary
                textButton="buy"
                icon="fa-solid fa-cart-shopping"
              ></ButtonDisabledPrimary>
            ) : (
              <ButtonPrimary
                textButton="buy"
                icon="fa-solid fa-cart-shopping"
                pathLink="/payment"
              ></ButtonPrimary>
            )}
            {!carrito.length ? (
              <ButtonDisabledSecondary
                textButton="empty cart"
                icon="fa-regular fa-trash-can"
              ></ButtonDisabledSecondary>
            ) : (
              <ButtonSecondary
                textButton="empty cart"
                icon="fa-regular fa-trash-can"
                onClick={() => setterCarrito([])}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
