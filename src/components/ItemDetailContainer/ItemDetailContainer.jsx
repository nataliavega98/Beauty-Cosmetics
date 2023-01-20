import React from "react";
import './ItemDetailContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import ButtonText from "../Buttons/ButtonText";
import ItemDetailLoader from "../ItemDetailLoader/ItemDetailLoader";
const ItemDetailContainer = () => {
  //Consigo el ID mediante el parametro
  const { productId } = useParams();
  const [filterProduct, setProductos] = useState([]);

  const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json";

  const [isLoadingProducts, setProductLoader] = useState(true);

  //Funcion fetch
  const fetchAPI = async () => {
    try {
      setProductLoader(true);

      const response = await fetch(baseURL);
      const data = await response.json();

      // Filtro
      const filterProduct = data.find(product => product.id == `${productId}`)
      //Seteo los productos con un item para cada uno
      setProductos(
        <ItemDetail key={filterProduct.id} data={filterProduct}></ItemDetail>
      );
      setProductLoader(false);

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
      {isLoadingProducts ? <ItemDetailLoader/> : filterProduct}
      
    </section>
  );
};

export default ItemDetailContainer;
