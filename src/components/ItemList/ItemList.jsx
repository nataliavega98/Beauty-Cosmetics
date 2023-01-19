import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const baseURL =
    "https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=1";
  const fetchAPI = async () => {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      setProductos(
        data.map((productos) => (
          <Item key={productos.id} data={productos}></Item>
        ))
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {fetchAPI();
  }, []);

  return (
    // //Llamado a la api
    <div className="itemsCardContainer">{productos}</div>
  );
};

export default ItemList;
