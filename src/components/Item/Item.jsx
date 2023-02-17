import React, { useContext, useEffect } from "react";
import { useState } from "react";
// Estilado
import "./Item.css";

// Importacion componentes
import ItemCount from "../ItemCount/ItemCount";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";

import { Contexto } from "../Context/Context";

const Item = (props) => {
  const { name, image_link, brand, price, stock } = props.data;
  const id = props.id;

  // ********CARRITO********

  // cantidad del item
  const [count, setCount] = useState(0);

  //Carrito
  const { carrito, setterCarrito } = useContext(Contexto);

  //Fx que busca un item con el mismo id dentro del carrito
  function isItemExisting(id) {
    return carrito.find((item) => item.id === id);
  }

  // Fx que administra el quantity del item y lo refleja en el itemCount
  function addToCart() {
    // Variable que guarda el item encontrado
    const itemExisting = isItemExisting(id);

    // Estructura del item en el carrito
    const itemCart = {
      ...props.data,
      id,
      quantity: count,
    };

    // LOGICA CARRITO
    // Si el item no existe y el counter es mayor a 0...
    if (!itemExisting && count > 0) {
      setterCarrito([...carrito, itemCart]);
      return;

      // Si el item no existe pero el counter es 0...
    } else if (!itemExisting && count === 0) {
      return;

    // Cualquier otro caso (el item existe)
    } else {
      // Modifico el quantity del item del carrito 
      itemExisting.quantity = count;

      // Extraigo todo el carrito menos el item que tenga el mismo id
      const carritoFilter = carrito.filter((item) => item.id !== id);

      // Agrego el item modificado si este tiene un quantity mayor a 0
      if (itemExisting.quantity > 0) {
        carritoFilter.push(itemExisting);
      }

      // Seteo el carrito de vuelta
      setterCarrito(carritoFilter);
    }
  }

  // Chequear al renderizar el item si ya esta en el carrito para colocar su cantidad en el contador
  // Evito que se ponga el valor por defecto 0
  useEffect(() => {
    const isItemInCarrito = isItemExisting(id);
    if (isItemInCarrito) setCount(isItemInCarrito.quantity);
  }, []);

  return (
    <div className="itemCardContainer">
      <img src={image_link || "assets/noimage.png"} alt="" />
      <div className="titleContainer">
        <h3>{name}</h3>
        <p>by {brand || "NV mkp"}</p>
      </div>
      <div className="itemManageContainer">
        <p>Price: ${price || "12.5"}</p>
        <ItemCount
          stock={stock}
          numberCounter={count}
          setterCounter={setCount}
        />
      </div>
      <ButtonPrimary
        textButton="add to cart"
        onClick={addToCart}
      ></ButtonPrimary>
      <ButtonSecondary
        textButton="view details"
        pathLink={`/store/product/${id}`}
      ></ButtonSecondary>
    </div>
  );
};

export default Item;
