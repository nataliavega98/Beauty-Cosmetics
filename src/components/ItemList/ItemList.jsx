import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import ItemLoader from "../ItemLoader/ItemLoader"
import "./ItemList.css";

const ItemList = (props) => {
  const { categorySelected } = props;
  //Guardo los productos que traigo de la API
  const [productos, setProductos] = useState([]);
  const [isLoadingProducts, setProductLoader] = useState(true);
  const baseURL =
    "https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=1";

  //Funcion fetch
  const fetchAPI = async () => {
    let category = `&product_type=${categorySelected}`;

    if (categorySelected == "all") {
      category = "";
    }
    try {
      setProductLoader(true);
      const response = await fetch(baseURL + category);
      const data = await response.json();

      //Seteo los productos con un item para cada uno

      setProductos(
        data.map((productos) => (
          <Item key={productos.id} data={productos}></Item>
        ))
      );
      setProductLoader(false);

      //Guarda en una variable lo que viene por parámetros
    } catch (err) {
      console.log(err);
    }
  };

  //Que no entre en bucle
  useEffect(() => {
    //Llamo a la funcion fetch API a traves de useEffect para que se ejecute solo 1 vez
    fetchAPI();
  }, [categorySelected]);

  return (

    //Llamo a productos y se renderiza
    <div className="itemsCardContainer">
      {isLoadingProducts ? <ItemLoader/> : productos}
     
      </div>
  );
};

export default ItemList;
