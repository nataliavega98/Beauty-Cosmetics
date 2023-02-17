import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Estilos
import "./ItemDetailContainer.css";
//componentes
import ItemDetail from "../ItemDetail/ItemDetail";
import ButtonText from "../Buttons/ButtonText";
import ItemError from "../ItemError/ItemError";
import ItemDetailLoader from "../ItemDetailLoader/ItemDetailLoader";

// Firestore
import { getDoc, doc } from "firebase/firestore";
import db from "../../services/firebase";

const ItemDetailContainer = () => {
  //Consigo el ID mediante el parametro
  const { productId } = useParams();
  const [filterProduct, setItemFiltered] = useState([]);

  // const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json";

  const [isLoadingProducts, setProductLoader] = useState(true);

  //Funcion fetch
  const getData = async () => {
    try {
      setProductLoader(true);

      const queryRef = doc(db, "listProducts", productId);
      const responseFirebase = await getDoc(queryRef);

      if (responseFirebase.data()) {
        //Seteo los productos con un item para cada uno
        setItemFiltered(
          <ItemDetail
            key={responseFirebase.id}
            id={responseFirebase.id}
            data={responseFirebase.data()}
          ></ItemDetail>
        );
      } else {
        setItemFiltered(<ItemError />);
      }

      setProductLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  //Que no entre en bucle
  useEffect(() => {
    //Llamo a la funcion fetch API a traves de useEffect para que se ejecute solo 1 vez x productId
    getData();
  }, [productId]);

  return (
    <section className="itemDetailContainer">
      <ButtonText
        textButton="go back to the store"
        pathLink="/store"
        icon="fa-solid fa-arrow-left"
      ></ButtonText>
      {isLoadingProducts ? <ItemDetailLoader /> : filterProduct}
    </section>
  );
};

export default ItemDetailContainer;
