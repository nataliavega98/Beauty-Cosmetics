import React from "react";
import { Link } from "react-router-dom";

import './Buttons.css'
const ButtonFilter = (props) => {
  const { icon, nameCategory, setterCategorySelected, categorySelected } = props;

  return (
    <li onClick={() => setterCategorySelected(`${nameCategory}`)} className={categorySelected === `${nameCategory}` && 'filterSelected'}>{nameCategory}</li>
  );
};

export default ButtonFilter;
