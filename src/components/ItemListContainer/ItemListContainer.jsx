import "./ItemListContainer.css";
import React from "react";

//Componentes
import CategoryNav from "../CategoryNav/CategoryNav";
import ItemList from "../ItemList/ItemList";
import { useState } from "react";
const ItemListContainer = () => {


  //Necesito la informacion de la categoria para categoryNav e ItemList, lo guardo en un useState y lo redefino cada vez q cambie
  //Cambia en onclik dentro de la categoria
  const [category, setCategory] = useState("all");
  
  return (
    <section className="storeContainer">
      <h2>Store</h2>
      <CategoryNav categorySelected={category} setterCategorySelected={setCategory}/>
      <ItemList categorySelected={category}/>
    </section>
  );
};

export default ItemListContainer;
