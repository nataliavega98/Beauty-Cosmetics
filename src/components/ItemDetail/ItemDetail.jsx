import React from "react";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  const {
    name,
    image_link,
    brand,
    price,
    id,
    description,
    product_type,
    product_colors,
  } = props.data;
  console.log(props.data);
  console.log(product_colors);
  const productColors = product_colors.map((product) => (
    <div className="productColor">
      <div
        className="productColorCircle"
        style={{ backgroundColor: `${product.hex_value}` }}
      ></div>
      <p className="productColorName">{product.colour_name || "breeze"}</p>
    </div>
  ));
  console.log(productColors);

  return (
    <article className="cardItemProductContainer">
      <img src={image_link || "assets/noimage.png"} alt="" />
      <div className="frontDataProduct">
        <div className="dataProduct">
          <div className="titleProduct">
            <h3>{name}</h3>
            <p>by {brand || "NV mkp"}</p>
          </div>
          <div className="productsColorContainer">{productColors}</div>
        </div>
        <div className="descriptionContainer">
          <h6>Description</h6>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
