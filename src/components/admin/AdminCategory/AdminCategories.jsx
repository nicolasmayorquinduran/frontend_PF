import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  addCategories,
  deleteCategories,
  getCategories,
} from "../../../redux/actions/categories";

import "./adminCategories.css";
import axios from "axios";
/* import { Image } from 'cloudinary-react'; */

function AdminCat() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  console.log(categories);

  //INSERTAR IMAGEN
  const [imageSelected, setImageSelected] = useState("");

  //Formulario para cargar imagen hacia el server de cloudinary
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "qoc3ud7y");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/jonascript/image/upload/",
        formData
      )
      .then((response) => {
        return setImageSelected(response.data.url);
      });
  };

  //Envio la imagen hacia mi estado actual
  const postCategories = () => {
    axios.post("http://localhost:3001/categories", newCategory);
    navigate("/admin");
    navigate("/admin/categorias");
  };

  const [newCategory, setNewCategory] = useState({
    name: "",
    active: true,
    img: [],
  });

  console.log(newCategory);

  useEffect(() => {
    if (typeof imageSelected === "string") {
      setNewCategory({
        ...newCategory,
        img: imageSelected,
      });
    }
    dispatch(getCategories());
  }, [dispatch, imageSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.id) {
      alert("Debes crear categoria");
    } else if (categories.includes(e.target.id)) {
      alert("esta categoría ya existe");
    } else {
      dispatch(addCategories(newCategory));
    }

    setNewCategory("");
    document.getElementById("inputCategory").value = "";
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
                onChange={(e) =>
                  setNewCategory({ ...newCategory, name: e.target.value })
                }
                id="inputCategory"
              ></input>
              <div>
                <button onClick={() => postCategories(newCategory)}>
                  Crear
                </button>
              </div>
            </div>
          </form>
          <div>
            <input
              type="file"
              onChange={(event) => setImageSelected(event.target.files[0])}
            />
            <button onClick={uploadImage}>Upload Image</button>
            {/* <img src={imageSelected} alt="Imagen" height="300px" width="300" /> */}
          </div>
        </div>
        <div className="categoriesContainer">
          <h5>Categorías creadas: </h5>
          <div className="categoriesCards">
            {categories?.map((c) => {
              return (
                <div className="catCard">
                  <label className="catLabel">{c.name}</label>

                  <img src={c.img} alt="" width="300px" height="300px" />
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
