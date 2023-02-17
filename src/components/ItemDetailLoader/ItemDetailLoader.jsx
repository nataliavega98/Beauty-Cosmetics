import React from "react";
// Estilado
import "./ItemDetailLoader.css";
const ItemDetailLoader = () => {
  return (
    <article className="cardItemProductContainerLoader">
      <div className="imageDetailLoader shinny"></div>
      <div className="frontDataProduct">
        <div className="dataProduct">
          <div className="titleDetailLoader">
            <h3 className="shinny"></h3>
            <p className="shinny"></p>
          </div>
          <div className="productsColorContainer productColorLoader shinny"></div>
        </div>
        <div className="descriptionLoader ">
          <h6 className="shinny"></h6>
          <p className="shinny"></p>
        </div>
      </div>
    </article>
  );
};

export default ItemDetailLoader;
