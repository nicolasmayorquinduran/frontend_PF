import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Children } from "../../../globalStyles";
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
    axios.post("http://localhost:3001/categories", newCategory);
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
      <Container className="categoryContainer">
        <Children pc="2">
          <img id="imageCategory" src={imageSelected} alt="Imagen" />
        </Children>
        <Children pc="2">
          <h5>Nombre categoría: </h5>
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
          <div></div>
          <div className="newCategory">
            <div className="uploadImage">
              <input
                className="inputFile"
                type="file"
                onChange={(event) => setImageSelected(event.target.files[0])}
              />
              <div>
                <button onClick={uploadImage}>Upload Image</button>
              </div>
            </div>
          </div>
        </Children>
      </Container>
    </>
  );
}

export default NewCategory;
