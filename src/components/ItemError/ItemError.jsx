import React from "react";
import "./ItemError.css";

const ItemError = () => {
  return (
  <div className="itemError-container">
    <h4>This product doesn't exist... Please go back to the store and keep looking for our products</h4>
    <img src="/assets/itemdontexist.svg" alt="Logo de BeautyItems" />
  </div>
  )
};

export default ItemError;
