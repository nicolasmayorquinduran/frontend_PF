import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategories,
  deleteCategories,
  getCategories,
} from "../../../redux/actions/categories";
import "./adminCategories.css";

function AdminCat() {
  const categories = useSelector(
    (state) =>
      (state.categoryReducer.filterCategories.length &&
        state.categoryReducer.filterCategories) ||
      state.categoryReducer.categories
  );
  // const [categories, setCategories] = useState(DBcategories);
  // console.log(categories);
  const [newCategory, setNewCategory] = useState("");

  const dispatch = useDispatch();
  useEffect(() => dispatch(getCategories()), [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setNewCategory(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     if(!e.target.id){
      alert('Debes crear categoria')
      } else if(categories.includes(e.target.id)){
      alert('esta categoría ya existe')
      } else {
        dispatch(addCategories(e.target.id))
      }   

    setNewCategory("");
    document.getElementById("inputCategory").value = "";
  };

  const handleDeteleCategory = (e) => {
    e.preventDefault();    
    dispatch(deleteCategories(e.target.id));
  };

  return (
    <>
      <div className="categoryContainer">
        <div className="newCategory">
          <div>
            <h5>Nueva categoría: </h5>
          </div>
          <form id={newCategory} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Nombre..."
                onChange={handleChange}
                id="inputCategory"
              ></input>
            </div>
            <div>
              <button>Crear</button>
            </div>
          </form>
        </div>
        <div className="categoriesContainer">
          <h5>Categorías creadas: </h5>
          <div className="categoriesCards">
            {categories?.map((c) => {
              return (
                <div className="catCard">
                  <label className="catLabel">{c}</label>
                  <button
                    className="deleteBtn"
                    id={c}
                    onClick={handleDeteleCategory}
                  >
                    X
                  </button>
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
