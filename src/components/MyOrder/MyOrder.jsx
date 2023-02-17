import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import "./MyOrder.css";
import db from "../../services/firebase";

import ItemCart from "../NavBar/cartMenu/ItemCart/itemCart";
const MyOrder = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const getData = async () => {
    try {
      const queryRef = doc(db, "orders", orderId);
      const responseFirebase = await getDoc(queryRef);
      if (responseFirebase.data()) {
        setOrder(responseFirebase.data());
      } else {
        const orderError = {
          purchaseDate: "--/--/----",
          price: "--",
          state: true,
        };
        setOrder(orderError);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // fx renderizado de items
  const renderItems =
    order.orderItems &&
    order.orderItems.map((producto) => (
      <ItemCart
        key={producto.id}
        dataProducto={producto}
        displayMode="none"
      ></ItemCart>
    ));
  useEffect(() => {
    //Llamo a la funcion fetch API a traves de useEffect para que se ejecute solo 1 vez x productId
    getData();
  }, [orderId]);

  return (
    <div className="sumarryPurchase-container">
      <h3>My Order</h3>
      {order.state ? (
        <h4 className="orderErrortitle">
          This order doesn't exist. Please introduce the number again or contact
          us.
        </h4>
      ) : (
        <h4>Summary of your purchase</h4>
      )}

      <p className="orderNumber">
        Your order number is <span>{orderId}</span>.{" "}
      </p>
      <p>
        <b>Date of purchase: </b>
        {order.purchaseDate}
      </p>
      <div className="renderItems">
        {order.state ? (
          <img
            src="/assets/orderError.svg"
            alt="" className="orderErrorImg"
          />
        ) : (
          renderItems
        )}
      </div>
      <div className="priceTotal">
        <p>
          <b>Total price:</b> {order.price}{" "}
        </p>
      </div>
    </div>
  );
};

export default MyOrder;
