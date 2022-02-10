import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0 !important;
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F8F9FB;
  text-align:center
}
h1, h2, h3, h4, h5, h6, p, img{
  margin:0;
}
h4, h5, h6 {
   font-weight: lighter;
}
h1 {
    font-size: 60px;
}
h2 {
    font-size: 40px;
}
h3 {
    font-size: 28px;
}
h4 {
    font-size: 26px;
}
h5 {
    font-size: 16px;
}
h6 {
    font-size: 20px;
    color: #9E005D;
}
strong {
  color: #9E005D;
}
button {
    font-size: 18px;
    font-family: 'Work Sans', sans-serif;
    color: #fff;
    border: none;
    background-color: #9E005D;
    padding: 10px 16px;
    -webkit-box-shadow: 5px 4px 6px -7px #000000; 
    box-shadow: 5px 4px 6px -7px #000000; 
    border-radius: 5px;
}
button:hover {
    color: #9E005D;
    background-color: #fff;
    font-weight: bold;

}
select, input, textarea {
    font-size: 18px;
    font-family: 'Work Sans',sans-serif;
    padding: 10px 16px;
    border: solid 0.1px #bbb;
    border-radius: 5px;
  box-shadow: 2px 2px 2px grey;
}
label {
    font-size: 20px;
    font-weight: bold;
}
  a {
    color: #000;
    text-decoration: none;
}

a:hover {
  color: #9E005D
}

input[type="range"] {
    box-shadow: none;
    padding: 0;
}

`;
// Container solo se usa donde hallan varias etiquetas div
// que se repiten varias veces, que tienen el mismo ancho,
// y generalmente tienen el mismo tipo de información
//           vvvvvvvv

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

// El componente "Children" son las etiquetas hijas que se repiten varias veces
// tienen por defecto un responsive de 1 columna para móvil, 2 para tablet y 4 para pc
// El componente recibe props de columnas por ancho de pantalla (props = {pc, tablet, movil})
// por ejemplo: <Children pc="4" tablet="3" movil="1">
// para personalizar la cantidad de columnas en determinado ancho de pantalla
//           vvvvvvvv

export const Children = styled.div`
  width: ${(props) => (props.pc ? 100 / props.pc - 2 + "%" : "23%")};
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  input {
    box-shadow: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px #888;
    height: 31px;
  }
  textarea {
    box-shadow: none;
  }
  @media only screen and (max-width: 1100px) and (min-width: 700px) {
    width: ${(props) => (props.tablet ? 100 / props.tablet - 2 + "%" : "48%")};
  }
  @media only screen and (max-width: 699px) and (min-width: 0px) {
    width: ${(props) => (props.movil ? 100 / props.movil - 2 + "%" : "98%")};
  }
  img {
    width: 100%;
  }
  select {
    box-shadow: 2px 2px 5px grey;
  }
`;

export const Category = styled.div`
  display: inline-block;
  align-contents: center;
  text-align: center;
`;

export const SelectCategory = styled.select`
  border-radius: 5px;
  font-weight: 600;
  margin-left: 5rem;
`;
export const Selected = styled.button`
  margin: 1rem;
  height: 2rem;
  border-radius: 5px;
  text-align: center;
  padding-bottom: 2rem;
  box-shadow: 2px 2px 3px black;
  &:hover {
    background: grey;
    color: white;
    transition: 1s;
  }
`;
