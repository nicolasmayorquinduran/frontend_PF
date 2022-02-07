import { useEffect, useState } from "react";
import { Container, Children } from "../../../globalStyles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePromo = () => {
  const navigate = useNavigate();
  const [imageSelected, setImageSelected] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    img:[],
    resume: "",
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

  useEffect(() => {
    if (typeof imageSelected === "string") {
      setInputs({
        ...inputs,
        img: imageSelected,
      });
    }
  }, [imageSelected]);

  const postProduct = async (product) => {
    await axios.post("http://localhost:3001/promos", inputs);
    navigate("/admin");
    navigate("/admin/promos");
  };
  useEffect(() => {}, [postProduct]);
  const handleProduct = (e) =>
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  return (
    <div>
      <h2>Crear Promo</h2>
      <Container>
        <Children>
          <label>Sube una portada de categoría</label>
          <input type="file" onChange={(event) => setImageSelected(event.target.files[0])} />
          <button onClick={uploadImage}>Upload Image</button>
        </Children>
        <Children>
          <label>Título destacado de la Promo</label>
          <input id="title" type="text" onChange={handleProduct} />
        </Children>
        <Children>
          <label>Descripción de la Promo</label>
          <textarea id="resume" onChange={handleProduct} />
        </Children>
      </Container>
      <button onClick={() => postProduct(inputs)}>Crear nueva Promo!</button>
    </div>
  );
};

export default CreatePromo;