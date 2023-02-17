// Modulos
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// Estilos
import "./NavBar.css";
// Componentes
import CartWidget from "./CartWidget/CartWidget";
import CartMenu from "./cartMenu/cartMenu";

const NavBar = () => {
  const [closed, setClosed] = useState(true);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <nav className="NavBar-top">
      <i className="hamburgerIcon fa-solid fa-bars" onClick={()=>setToggleNavbar(!toggleNavbar)}></i>
      <img src="/assets/logowhite.svg" alt="Logo de BeautyItems" />
      {/* Menu hamburguesa para mobile o desktop */}
      <ul className="OptionsNavBar" style={{left: toggleNavbar ? '0px' : '-200px'}}>
        <li>
          <Link to="/" className="navOption">
            home
          </Link>
        </li>
        <li>
          <Link to="/store" className="navOption">
            store
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="navOption">
            about us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navOption">
            contact
          </Link>
        </li>
      </ul>

      {/* Menu carrito */}
      {closed ? (
        <CartWidget setterClosed={setClosed} />
      ) : (
        <CartMenu setterClosed={setClosed} />
      )}
    </nav>
  );
};

export default NavBar;
