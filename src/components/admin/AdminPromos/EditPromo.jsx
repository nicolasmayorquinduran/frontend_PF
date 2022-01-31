import { useEffect } from "react";
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

  const handleProduct = (e) =>
    setProduct({ ...product, [e.target.id]: e.target.value });
  console.log(product);
  return (
    <>
      <h2>Editar Promo</h2>
      <Container>
        <Children>
          <label>Portada de categoría</label>
          <img src={product.img} alt={product.title} />
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
