import React from "react";
import { Container, Children } from "../../../globalStyles";

const CreatePromo = () => {
  return (
    <div>
      <h2>Crear Promo</h2>
      <Container>
        <Children>
          <label>Sube una portada de categoría</label>
          <input type="file" />
        </Children>
        <Children>
          <label>Título destacado de la Promo</label>
          <input type="text" />
        </Children>
        <Children>
          <label>Descripción de la Promo</label>
          <textarea />
        </Children>
      </Container>
      <button>Guardar</button>
    </div>
  );
};

export default CreatePromo;
