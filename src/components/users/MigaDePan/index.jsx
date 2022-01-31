import React from "react";
import { useLocation } from "react-router-dom";

const MigadePan = () => {
  let location = useLocation();
  let lastWord = "";
  location = location.pathname
    .split("")
    .map((letter) => (letter == "/" ? " > " : letter))
    .join("");

  return <div>{`Home ${location}`}</div>;
};

export default MigadePan;
