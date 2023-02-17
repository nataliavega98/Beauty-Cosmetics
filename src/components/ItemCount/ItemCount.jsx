//Modulos
import React from "react";
//Estilos
import "./ItemCount.css";

const ItemCount = (props) => {
  const { stock, numberCounter, setterCounter } = props;

  

  //Funciones de sumar uno con un maximo de sock
  const addOne = () => {
    if (numberCounter < stock) {
      setterCounter(numberCounter + 1);
    }
  };

  //Funcion de restar uno al contador seteando un minimo
  const disOne = () => {
    if (numberCounter > 0) {
      setterCounter(numberCounter - 1);
    }
  };

  return (
    <div className="counterContainer">
      <div className="countContainer">
        <button onClick={disOne}>-</button>
        <p>{numberCounter}</p>
        <button onClick={addOne}>+</button>
      </div>
      <small>({stock} available)</small>
    </div>
  );
};

export default ItemCount;
