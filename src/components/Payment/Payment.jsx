import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Contexto } from "../Context/Context";

import "./Payment.css";
import ItemCart from "../NavBar/cartMenu/ItemCart/itemCart";
import ButtonText from "../Buttons/ButtonText";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonDisabledPrimary from "../Buttons/ButtonDisabledPrimary";
// Firestore
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { carrito, setterCarrito } = useContext(Contexto);
  const navigate = useNavigate();

  // fx renderizado de items
  const renderItems = carrito.map((producto) => (
    <ItemCart dataProducto={producto} displayMode="none"></ItemCart>
  ));

  // fx para sumar precios
  const addUpPrices = () => {
    const extractPrices = carrito.map((item) => item.price * item.quantity);
    const addUp = extractPrices.reduce(function(a, b) {
      return a + b;
    });
    return addUp.toFixed(2);
  };
  const purchaseDate = new Date();
  const ddmmyyyyDate =
    `${purchaseDate.getDate()}` +
    "/" +
    `${purchaseDate.getMonth()}` +
    "/" +
    `${purchaseDate.getFullYear()}`;

  // LOGICA INPUTS

  // Guardo los datos del form

  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    email: "",
    repeatemail: "",
    adress: "",
    payment: "",
  });

  function finishPurchase() {
    const order = {
      buyerData: formValue,
      price: addUpPrices(),
      purchaseDate: ddmmyyyyDate,
      orderItems: carrito,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => navigate(`/order/${id}`));
    // Vacio de vuelta el carrito y los datos de comprador
    setFormValue({
      name: "",
      email: "",
      adress: "",
      payment: "",
    });
    setterCarrito([]);
  }

  const [isValidForm, setIsValidForm] = useState();

  // Validacion de data para no enviar arrays vacios
  const isValidData = (value) => {
    let valid = false;

    if (!value.length) {
      return valid;
    } else {
      valid = true;
      return valid;
    }
  };
  // Validacion de email
  const isValidEmail = () => {
    let valid = false;
    const email = formValue.email;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexEmail = () => re.test(email);
    if (!email.length) {
      return valid;
    } else if (!regexEmail()) {
      console.log("is not an email");
    } else {
      valid = true;
      return valid;
    }
  };
  // Validacion de campos de texto iguales
  const isTextFieldEqual = (valueInput1, valueinput2) => {
    let valid = false;
    if (valueInput1 === valueinput2) {
      valid = true;
      return valid;
    }
  };
  // Validacion de que  se selecciono 1 metodo de pago
  const isPaymentSelected = () => {
    let valid = false;
    const payment = formValue.payment;
    if (payment.length) {
      valid = true;
      return valid;
    }
    return valid;
  };
  // Repetir cada vez que cambien los valores de formvalue
  useEffect(() => {
    //  validacion de form
    setIsValidForm(() => {
      let valid = false;
      const isValidForm =
        isValidData(formValue.name) &&
        isValidData(formValue.surname) &&
        isValidEmail() &&
        isValidData(formValue.adress) &&
        isTextFieldEqual(formValue.email, formValue.repeatemail) &&
        isPaymentSelected();
      if (!isValidForm) {
        return valid;
      } else {
        valid = true;
        return valid;
      }
    });
  }, [formValue]);

  return (
    <div className="payment-container">
      <ButtonText
        textButton="go back to the store"
        pathLink="/store"
        icon="fa-solid fa-arrow-left"
      ></ButtonText>
      <div className="payment-resume-container">
        <h3>Finish my purchase</h3>
        <div className="buyerData-form-container">
          <h4>
            <span>1</span>Personal information
          </h4>
          <div className="form-container">
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={formValue.name}
              onChange={(e) =>
                setFormValue({ ...formValue, name: e.target.value })
              }
            />
            <input
              type="text"
              id="surname"
              placeholder="Surname"
              name="name"
              value={formValue.surname}
              onChange={(e) =>
                setFormValue({ ...formValue, surname: e.target.value })
              }
            />
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              name="email"
              value={formValue.email}
              onChange={(e) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
            />
            <input
              type="email"
              id="repeatemail"
              placeholder="Repeat your e-mail"
              name="repeatemail"
              value={formValue.repeatemail}
              onChange={(e) =>
                setFormValue({ ...formValue, repeatemail: e.target.value })
              }
            />
            <input
              type="text"
              id="adress"
              placeholder="Adress"
              name="adress"
              value={formValue.adress}
              onChange={(e) =>
                setFormValue({ ...formValue, adress: e.target.value })
              }
            />
          </div>
        </div>
        <div className="paymentData-form-container">
          <h4>
            <span>2</span>Payment Method
          </h4>
          <select
            required
            name="payment"
            id="payment"
            value={formValue.payment}
            onChange={(e) =>
              setFormValue({ ...formValue, payment: e.target.value })
            }
          >
            <option value="" disabled>
              Select your payment method
            </option>
            <option value="cash">Cash</option>
            <option value="credit">Credit card</option>
            <option value="debit">Debit Card</option>
          </select>
        </div>
        <div className="cartData-container">
          <h4>
            <span>3</span>Summary of purchase
          </h4>
          <div className="itemsCart-container">{renderItems}</div>
          <p>
            <b>Total: </b>$
            <span className="total">{!carrito.length ? 0 : addUpPrices()}</span>
          </p>
        </div>
      </div>
      {!isValidForm ? (
        <ButtonDisabledPrimary
          textButton="Finish purchase"
          icon="fa-solid fa-cart-shopping"
        ></ButtonDisabledPrimary>
      ) : (
        <ButtonPrimary
          textButton="Finish purchase"
          icon="fa-solid fa-cart-shopping"
          onClick={finishPurchase}
        ></ButtonPrimary>
      )}
    </div>
  );
};
export default Payment;
