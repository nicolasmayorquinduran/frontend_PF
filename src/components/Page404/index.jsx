import { useState, useEffect } from "react";

const Page404 = () => {
  let [counter, setCounter] = useState(0);
  const handler = (e) => {
    e.target.value == "-" ? setCounter(counter--) : setCounter(counter++);
  };
  useEffect(() => handler(), [handler]);
  return (
    <div>
      <button onClick={handler}>-</button>
      <div>{counter}</div>
      <button onClick={handler}>+</button>
    </div>
  );
};

export default Page404;
