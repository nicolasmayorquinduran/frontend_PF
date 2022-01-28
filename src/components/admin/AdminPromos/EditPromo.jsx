import React from "react";
import { Container, Children } from "../../../globalStyles";

const EditPromo = ({ img, title, resume }) => {
  return (
    <>
      <h2>Editar Promo</h2>
      <Container>
        <Children>
          <label>Portada de categoría</label>
          <img src={img} alt={title} />
        </Children>
        <Children>
          <label>Título destacado</label>
          <input type="text" value={title} />
        </Children>
        <Children>
          <label>Descripción</label>
          <textarea value={resume} />
        </Children>
      </Container>
      <button>Guardar</button>
    </>
  );
};

export default EditPromo;
