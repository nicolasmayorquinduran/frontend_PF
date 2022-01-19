import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F8F9FB;
}
h4, h5, h6 {
   font-weight: lighter;
}
h1 {
    font-size: 60px;
}
h2 {
    font-size: 50px;
}
h3 {
    font-size: 32px;
}
h4 {
    font-size: 30px;
}
h5 {
    font-size: 28px;
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
}
label {
    font-size: 20px;
    font-weight: bold;
}
  

`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Children = styled.div`
  @media (min-width: 1100px);
   {
    max-width: 31%;
  }
  @media (min-width: 900px);
   {
    max-width: 48%;
  }
  @media (max-width: 700px);
   {
    max-width: 98%;
  }
`;
