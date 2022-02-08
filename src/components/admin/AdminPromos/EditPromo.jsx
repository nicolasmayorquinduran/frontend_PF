// import { useEffect } from "react";
import axios from "axios";
import { Container, Children } from "../../../globalStyles";
import { useNavigate } from "react-router-dom";

const EditPromo = ({ product, setProduct }) => {
  const navigate = useNavigate();
  const putProduct = async () => {
    await axios.put("http://localhost:3001/promos", product);
    navigate("/admin");
    navigate("/admin/promos");
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", product.img);
    formData.append("upload_preset", "qoc3ud7y");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/jonascript/image/upload/",
        formData
      )
      .then((response) => {
        return setProduct((product) => ({
          ...product,
          img: response.data.url,
        }));
      });
  };

  const handleProduct = (e) =>
    setProduct({ ...product, [e.target.id]: e.target.value });
  //console.log(product);
  return (
    <>
      <h2>Editar Promo</h2>
      <Container>
        <Children>
          <label>Portada de categoría</label>
          <img src={product.img} alt={product.title} />
          <input
            type="file"
            onChange={(event) =>
              setProduct((product) => ({
                ...product,
                img: event.target.files[0],
              }))
            }
          />
          <button onClick={uploadImage}>Cargar Imagen</button>
        </Children>
        <Children>
          <label>Título destacado</label>
          <input
            id="title"
            type="text"
            value={product.title}
            onChange={handleProduct}
          />
        </Children>
        <Children>
          <label>Descripción</label>
          <textarea
            id="resume"
            value={product.resume}
            onChange={handleProduct}
          />
        </Children>
      </Container>
      <button onClick={putProduct}>Guardar</button>
    </>
  );
};

export default EditPromo;
