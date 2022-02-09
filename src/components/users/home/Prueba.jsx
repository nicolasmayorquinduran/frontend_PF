import { useState, useEffect } from "react";

const Prueba = () => {
  // let allPromos = [1, 2, 3, 4, 5];
  let [counter, setCounter] = useState(0);

  useEffect(() => setTimeout(() => setCounter(counter++), 4000));
  //console.log(counter);
  return <div>{counter}</div>;
};

export default Prueba;
