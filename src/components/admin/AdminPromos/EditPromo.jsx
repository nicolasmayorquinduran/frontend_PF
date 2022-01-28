import { useEffect } from "react";
import axios from "axios";
import { Container, Children } from "../../../globalStyles";
import { getPromos } from "../../../redux/actions/promos";
import { useDispatch } from "react-redux";

const EditPromo = ({ product, setProduct }) => {
  const putProduct = async (product) => {
    await axios.put("http://localhost:3001/promos", product);
  };
  useEffect(() => {}, [putProduct]);
  const handleProduct = (e) =>
    setProduct({ ...product, [e.target.id]: e.target.value });

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
      <button onClick={() => putProduct(product)}>Guardar</button>
    </>
  );
};

export default EditPromo;
