import "./CartWidget.css";
import React from "react";
import { useContext } from "react";
import { Contexto } from "../../Context/Context";

const CartWidget = (props) => {
  const { setterClosed } = props;
  const { carrito } = useContext(Contexto);

  // fx para sumar quantitys
  const addUpQuantities = () => {
    const extractQuantitys = carrito.map((item) => item.quantity);

    const addUp = extractQuantitys.reduce(function(a, b) {
      return a + b;
    });
    return addUp;
  };
  const htmlSpan = ``
  return (
    <div className="Cart" onClick={() => setterClosed(false)}>
      <div className="IconCart">
        <i className="fa-solid fa-cart-shopping"></i>
        {carrito.length ? <span>{addUpQuantities()}</span> : htmlSpan }
      </div>
      Carrito
    </div>
  );
};

export default CartWidget;
