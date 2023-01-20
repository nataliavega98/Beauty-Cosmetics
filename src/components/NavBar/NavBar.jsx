// Modulos
import React from "react";
import {Link} from 'react-router-dom'
import { useState } from "react";
// Estilos
import "./NavBar.css";
// Componentes
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {


  return (
    <nav className="NavBar-top">
      <img src="/assets/logowhite.svg" alt="Logo de BeautyItems" />
      <ul className="OptionsNavBar">
        <li><Link to='/' className="navOption">home</Link></li>
        <li><Link to='/store' className="navOption">store</Link></li>
        <li><Link to='/aboutus' className="navOption">about us</Link></li>
        <li><Link to='/contact' className="navOption">contact</Link></li>
      </ul>
      <CartWidget/>
    </nav>
  );
};

export default NavBar;
