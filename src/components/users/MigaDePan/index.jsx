import React from "react";
import { useLocation, Link } from "react-router-dom";
import './miga.css';


const MigadePan = () => {
  let location = useLocation();
  console.log(location);
  // let lastWord = "";
  location = location.pathname
    .split("")
    .map((letter) => (letter === "/" ? " > " : letter))
    .join("");

  

  return(
  <div className='letters'>

    <Link to={`Home ${location}`}>
      {`Home ${location}`}
    </Link>
  </div>
  ) 
};

export default MigadePan;
