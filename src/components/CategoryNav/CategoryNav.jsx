import React from "react";
// Estilos
import "./CategoryNav.css";
import ButtonFilter from "../Buttons/ButtonFilter";
const CategoryNav = (props) => {
  //
  const { categorySelected, setterCategorySelected } = props;

  //Defino mis categorias
  const categories = [
    "all",
    "mascara",
    "lipstick",
    "foundation",
    "blush",
    "eyeliner"
  ];

  return (
    <nav className="categoryNavContainer">
      <p>Categories</p>
      <ul className="categoryNavContainerList">
        {/* //Mapeo un buttonFilter por cada categoria */}
        {categories.map((category) => (
          <ButtonFilter
            nameCategory={category}
            setterCategorySelected={setterCategorySelected}
            categorySelected={categorySelected}
          />
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;
