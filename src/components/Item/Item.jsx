import React from "react";

// Estilado
import "./Item.css";

// Importacion componentes
import ItemCount from "../ItemCount/ItemCount";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";

const Item = (props) => {

  const { name, image_link, brand, price } = props.data;

  return (
    <div className="itemCardContainer">
      <img src={image_link || "assets/noimage.png"} alt="" />
      <div className="titleContainer">
        <h3>{name}</h3>
        <p>by {brand || "NV mkp"}</p>
      </div>
      <div className="itemManageContainer">
        <p>Price: ${price || "12.5"}</p>
        <ItemCount />
      </div>
      <ButtonPrimary textButton="add to cart"></ButtonPrimary>
      <ButtonSecondary textButton="view details"></ButtonSecondary>
    </div>
  );
};

export default Item;
