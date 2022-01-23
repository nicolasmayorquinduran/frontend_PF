import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/categories";
import "./adminCategories.css";

function AdminCat() {
  // const categories = useSelector(state => state.categoryReducer.categories);
  const categories = [
    "Calzado",
    "Jeans",
    "Dresses",
    "Women Clothing",
    "Men Clothing",
    "Lingerie",
  ];
  const dispatch = useDispatch();
  console.log("CATEGORIES STATE ===", categories);
  // useEffect(() => dispatch(getCategories()));
  const handleDeteleCategory = () => {
    alert("CATEGORY DELETED SUCCESFULLY");
  };

  return (
    <>
      <div className="categoryContainer">
        <div className="newCategory">
          <div>
            <h5>Nueva categoría: </h5>
          </div>
          <div>
            <input type="text" placeholder="Nombre..."></input>
          </div>
          <div>
            <button id="createButton">Crear</button>
          </div>
        </div>
        <div className="categoriesContainer">
          <h5>Categorías creadas: </h5>
          <div className="categoriesCards">
            {categories?.map((c) => {
              return (
                <div className="catCard">
                  <label className="catLabel">{c}</label>
                  <label className="deleteBtn" onClick={handleDeteleCategory}>
                    X
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCat;
