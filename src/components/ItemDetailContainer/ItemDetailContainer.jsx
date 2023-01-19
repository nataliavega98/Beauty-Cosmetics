import React from "react";
import './ItemDetailContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import ButtonText from "../Buttons/ButtonText";
const ItemDetailContainer = () => {
  //Consigo el ID mediante el parametro
  const { productId } = useParams();
  const [filterProduct, setProductos] = useState([]);

  const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json";
  //Funcion fetch
  const fetchAPI = async () => {
    try {
      const response = await fetch(baseURL);
      console.log(response)
      const data = await response.json();

      // Filtro
      console.log(data)
      const filterProduct = data.find(product => product.id == `${productId}`)
      console.log({filterProduct})
      //Seteo los productos con un item para cada uno
      setProductos(
        <ItemDetail key={filterProduct.id} data={filterProduct}></ItemDetail>
      );
    } catch (err) {
      console.log(err);
    }
  };

  //Que no entre en bucle
  useEffect(() => {
    //Llamo a la funcion fetch API a traves de useEffect para que se ejecute solo 1 vez x productId
    fetchAPI();
  }, [productId]);

  return (
    <section className="itemDetailContainer">
      <ButtonText textButton="go back to the store" pathLink="/store" icon="fa-solid fa-arrow-left"></ButtonText>
      {filterProduct}
    </section>
  );
};

export default ItemDetailContainer;
