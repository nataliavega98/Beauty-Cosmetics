import React from "react";
import { Link } from "react-router-dom";

import './Buttons.css'
const ButtonText = (props) => {
  const { textButton, pathLink, icon } = props;

  return (
    <button className="buttonText">
      <Link to={pathLink}><i class={icon}/>{textButton}</Link>
    </button>
  );
};

export default ButtonText;
