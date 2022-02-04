import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/categories";
import "./adminCategories.css";

//COMPONENTS
import NewCategory from "./NewCategory";
import EditCategories from "./EditCategories";

function AdminCat() {
  const categories = useSelector((state) => state.categories);

  //INSERTAR IMAGEN
  /* const [imageSelected, setImageSelected] = useState(""); */
  // console.log(imageSelected)
  const [showEditCategories, setShowEditCategories] = useState(false);

  const [category, setCategory] = useState({
    CategoriesId:"",
    name: "",
    img:""   
  });

  
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCategories()), [dispatch]);

  const handleImageClick = (c) => {
    setCategory(c)
    setShowEditCategories(true);
    console.log(c)
  };

  return (
    <>
      {showEditCategories ? <EditCategories category={category} setCategory={setCategory} /> : null}

      {!showEditCategories ? <NewCategory /> : null}+
      <div>
        <div className="categoriesCards">
          {categories?.map((c, i) => {
            return (
              <div className="catCard" key={i}>
                <div className="labelAndDelete">
                  <label className="catLabel">{c.name}</label>

                  <button className="deleteBtn" id={c}>
                    X
                  </button>
                </div>
                <div
                  className="imagenCard"
                  onClick={()=> handleImageClick(c)}
                  style={{ backgroundImage: `url(${c.img})` }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdminCat;