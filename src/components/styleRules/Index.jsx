import React from "react";

const Index = () => {
  return (
    <div>
      <h1>h1:Títulos principales // máximo 1 por componente</h1>
      <h2>h2:Títulos</h2>
      <h3>h3:Subtítulos cortos</h3>
      <h4>h4:Párrafos cortos y destacados</h4>
      <h5>h5:Párrafos cortos y destacados</h5>
      <h6>h6:Títluos pequeños</h6>
      <div>
        <div>
          <p>P : Etiqueta para cuerpos de texto o textos pequeños</p>
          <strong>
            strong : Etiqueta para textos pequeños pero en negrilla
          </strong>
        </div>
        <button>Button</button>
      </div>
      <div>
        <select>
          <option>Opción a</option>
          <option>Opción b</option>
          <option>Opción c</option>
        </select>
      </div>
      <div>
        <label>Label</label>
      </div>
      <div>
        <input type="text" placeholder="Input Type text" />
      </div>
      <div>
        <textarea placeholder="Textarea" />
      </div>

      <div>
        <h3>Paleta de colores</h3>
        <div style={{ backgroundColor: "#fff" }}>blanco #fff</div>
        <div style={{ backgroundColor: "#F8F9FB" }}>
          Gris muy claro #F8F9FB // fondo body
        </div>
        <div style={{ backgroundColor: "#CCCCCC" }}>Gris claro #fff</div>
        <div style={{ color: "#fff", backgroundColor: "#9E005D" }}>
          Violeta Principal #9E005D
        </div>
        <div style={{ backgroundColor: "#FF00FF" }}>
          Violeta claro secundario #9E005D
        </div>
      </div>
    </div>
  );
};

export default Index;
