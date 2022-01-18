import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/products";

function SearchBar() {
  const dispatch = useDispatch();
  const[name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmite(e) {
    e.preventDefault();
    dispatch(getProducts(name));
  }

  return (
    <div className="container-searchBar">
      <input
        className="input-search"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="btn-Search"
        type="submit"
        onClick={(e) => handleSubmite(e)}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
