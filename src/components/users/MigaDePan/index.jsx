import React from "react";
import { useLocation } from "react-router-dom";

const MigadePan = () => {
  let location = useLocation();
  console.log(location);
  // let lastWord = "";
  location = location.pathname
    .split("")
    .map((letter) => (letter === "/" ? " > " : letter))
    .join("");

  // -recorrer el location hasta que se encuentre con un >
  // -ir guardando los paths en un nuevo array
  // -devolver con link to los elementos del array -1 que seria el ultimo

  let array = [];
  for(let i = 0; i < location.length; i++){
    if(i !== '>'){
       return array.push[i]
    }
  }

  return(
  <div>
  
  { `Home ${location}` }

  </div>
  ) 
};

export default MigadePan;
