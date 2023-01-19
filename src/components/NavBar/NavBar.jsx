import "./NavBar.css";
import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar-top">
      <img src="/assets/logowhite.svg" alt="Logo de BeautyItems" />
      <ul className="OptionsNavBar">
        <li>Home</li>
        <li>Store</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <CartWidget/>
    </nav>
  );
};

export default NavBar;
