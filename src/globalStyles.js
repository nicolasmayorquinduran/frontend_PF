import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F8F9FB;
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
    font-size: 50px;
}
h3 {
    font-size: 32px;
}
h4 {
    font-size: 30px;
}
h5 {
    font-size: 20px;
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
  a {
    color: #000;
    text-decoration: none;
}

a:hover {
  color: #9E005D
}

`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`;

export const Children = styled.div`
  width: 23%;
  margin-top: 50px;
  @media only screen and (max-width: 1100px) and (min-width: 700px) {
    width: 48%;
  }
  @media only screen and (max-width: 699px) and (min-width: 0px) {
    width: 98%;
  }
  img {
    width: 100%;
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