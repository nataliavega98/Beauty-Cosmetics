import React from "react";
import "./ItemCart.css";

import { useContext } from "react";
import { Contexto } from "../../../Context/Context";
const ItemCart = ({ dataProducto, displayMode }) => {
  const {
    id,
    image_link,
    name,
    price,
    quantity,
  } = dataProducto;

  const { carrito, setterCarrito } = useContext(Contexto);
  // fx para remover un item del carrito
  const removeItem = () => {
    
    // Extraigo todo el carrito menos el item que tenga el mismo id
    const carritoFilter = carrito.filter((item) => item.id !== id);

    // Seteo el carrito de vuelta
    setterCarrito(carritoFilter);
  }
  
  return (
    <div className="itemCart-container">
      <img src={image_link} alt={name} />
      <div className="itemInfo-container">
        <div className="namePrice">
          <h5>{name}</h5>
          <p>
            <b>Price:</b> ${price}
          </p>
        </div>
        <div className="quantityDelete">
          <p>Quantity: {quantity}</p>
          <p style={{display: displayMode}}>
            <i className="fa-regular fa-trash-can" onClick={() => removeItem()}></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
