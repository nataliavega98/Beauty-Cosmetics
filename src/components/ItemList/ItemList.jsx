import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import ItemLoader from "../ItemLoader/ItemLoader";
import "./ItemList.css";

// con collection accedo a la carpeta de la base de datos, y con getDocs consigo los datos
// query: para crear una consulta
// where:: para hacer el filtro
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../services/firebase";

const ItemList = (props) => {
  const { categorySelected } = props;

  // UseState
  const [productos, setProductos] = useState([]);
  const [isLoadingProducts, setProductLoader] = useState(true);

  //Funcion fetch
  const getData = async () => {
    let category = `${categorySelected}`;

    if (categorySelected === "all") {
      category = "";
    }
    try {
      // Coloco el loader
      setProductLoader(true);

      // Peticion a firebase
      const queryRef = category
        ? query(
            collection(db, "listProducts"),
            where("category", "==", category)
          )
        : collection(db, "listProducts");
      const responseFirebase = await getDocs(queryRef);

      //Seteo los productos con un item para cada uno
      setProductos(
        responseFirebase.docs.map((productos) => (
          <Item
            key={productos.id}
            id={productos.id}
            data={productos.data()}
          ></Item>
        ))
      );
      // Saco el loader
      setProductLoader(false);

      //Guarda en una variable lo que viene por parámetros
    } catch (err) {
      console.log(err);
    }
  };

  //Que no entre en bucle
  useEffect(() => {
    //Llamo a la funcion fetch API a traves de useEffect para que se ejecute solo 1 vez
    getData();
  }, [categorySelected]);

  return (
    //Llamo a productos y se renderiza
    <div className="itemsCardContainer">
      {/* Si isLoading es true, renderizar itemloader. Sino renderizar productos */}
      {isLoadingProducts ? <ItemLoader /> : productos}
    </div>
  );
};

export default ItemList;
