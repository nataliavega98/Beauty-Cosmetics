import "./NavBar.css";
import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar-top">
      <img src="/assets/logowhite.svg" alt="Logo de BeautyItems" />
      <ul className="OptionsNavBar">
        <li>Productos</li>
        <li>Cómo comprar</li>
        <li>Contacto</li>
      </ul>
      <CartWidget/>
    </nav>
  );
};

export default NavBar;
