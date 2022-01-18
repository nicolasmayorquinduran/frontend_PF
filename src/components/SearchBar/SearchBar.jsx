import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmite(e) {
    e.preventDefault();
    dispatch();
  }
  return <div></div>;
};

export default SearchBar;
