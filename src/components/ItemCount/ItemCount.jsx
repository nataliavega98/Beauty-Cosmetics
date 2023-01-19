import React from "react";
//Modulos
import { useState } from "react";
//Estilos
import "./ItemCount.css";

const ItemCount = () => {
  //Funcion numero random para el stock
  function getRandomStockNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1) + 1);
  }

  //Guardo mi numero random para la card, como no lo seteo queda igual
  const [number, setNumberStock] = useState(getRandomStockNumber());

  //
  const [count, setCount] = useState(0);

  //Funciones de sumar uno con un maximo de sock
  const addOne = () => {
    if (count < number) {
      setCount(count + 1);
    }
  };

  //Funcion de restar uno al contador seteando un minimo
  const disOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counterContainer">
      <div className="countContainer">
        <button onClick={disOne}>-</button>
        <p>{count}</p>
        <button onClick={addOne}>+</button>
      </div>
      <small>({number} available)</small>
    </div>
  );
};

export default ItemCount;
