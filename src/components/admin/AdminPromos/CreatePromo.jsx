import { useEffect, useState } from "react";
import { Container, Children } from "../../../globalStyles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePromo = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    img: "https://image.freepik.com/foto-gratis/feliz-sonriente-adolescente-pelo-rosa-suena-convertirse-estrella-rock-tocar-musica-guitarra-acustica-usa-jakcet-naranja-muestra-mini-gesto-corazon-o-letrero-coreano-como-poses-contra-pared-graffiti_273609-50835.jpg",
    resume: "",
  });
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
          <input type="file" />
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
