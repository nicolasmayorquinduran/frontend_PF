import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/categories";
import "./adminCategories.css";
import NewCategory from "./NewCategory";
/* import { Image } from 'cloudinary-react'; */

function AdminCat() {
  const categories = useSelector(
    (state) =>
      (state.filterCategories.length && state.filterCategories) ||
      state.categories
  );
  // const [categories, setCategories] = useState(DBcategories);
  // console.log(categories);

  //INSERTAR IMAGEN
  const [imageSelected, setImageSelected] = useState("");
  // console.log(imageSelected)

  const [newCategory, setNewCategory] = useState({
    name: "",
    active: true,
    img: imageSelected,
  });

  const dispatch = useDispatch();
  useEffect(() => dispatch(getCategories()), [dispatch, imageSelected]);

  return (
    <>
      <NewCategory />
      <div className="categoriesCards">
        {categories?.map((c) => {
          return (
            <div key={c.CategoriesId} className="catCard">
              <div className="labelAndDelete">
                <label className="catLabel">{c.name}</label>

                <button className="deleteBtn" id={c}>
                  X
                </button>
              </div>
              <div
                className="imagenCard"
                style={{ backgroundImage: `url(${c.img})` }}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AdminCat;
