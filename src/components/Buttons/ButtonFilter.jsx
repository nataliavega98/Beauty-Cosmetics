import React from "react";

import './Buttons.css'
const ButtonFilter = (props) => {
  const { nameCategory, setterCategorySelected, categorySelected } = props;

  return (
    <li onClick={() => setterCategorySelected(`${nameCategory}`)} className={categorySelected === `${nameCategory}` ? 'filterSelected' : ""}>{nameCategory}</li>
  );
};

export default ButtonFilter;
