import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Container, Children} from "../../../globalStyles"
//import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./adminCategories.css";
/* import { Image } from 'cloudinary-react'; */


function NewCategory() {
  const navigate = useNavigate();

  //INSERTAR IMAGEN
  const [imageSelected, setImageSelected] = useState("");
  const [newCategory, setNewCategory] = useState({
    name: "",
    active: true,
    img: [],
  });

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
    axios.post(
      "https://pfbackendecommerce.herokuapp.com/categories",
      newCategory || "http://localhost:3001/categories",
      newCategory
    );
    navigate("/admin");
    navigate("/admin/categorias");
  };

  useEffect(() => {
    if (typeof imageSelected === "string") {
      setNewCategory({
        ...newCategory,
        img: imageSelected,
      });
    }
  }, [imageSelected]);

  return (
    <>
      <div className="categoryContainer">
        <div>
          <h5>Nueva categoría: </h5>
        </div>
        <div className="newCategory">
          <form id={newCategory}>
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

          <div className="uploadImage">
           <div><img src={imageSelected} alt="Imagen" height="300px" width="300" /></div> 
            <input
              type="file"
              onChange={(event) => setImageSelected(event.target.files[0])}
            />
           
           <div> <button onClick={uploadImage}>Upload Image</button></div>
          </div>
        </div>
        <div className="categoriesContainer">
          <h5>Categorías creadas: </h5>
          <div className="categoriesCards">
            {/* {categories?.map((c) => {
              return (
                <div className="catCard">
                  <label className="catLabel">{c.name}</label>
                  <img src={c.img} alt="" width="300px" height="300px" />
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCategory;