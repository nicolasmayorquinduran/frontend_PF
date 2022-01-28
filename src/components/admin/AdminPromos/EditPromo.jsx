import React from "react";
import { Container, Children } from "../../../globalStyles";

const EditPromo = ({ product, setProduct }) => {
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
      <button>Guardar</button>
    </>
  );
};

export default EditPromo;
