import { useState } from "react";
import { useDispatch } from "react-redux";
import {detailsProduct} from '../../redux/actions/products'

export default function SearchBar() {
  const dispatch = useDispatch();
  const[nameProduc, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmite(e) {
    e.preventDefault();
    dispatch(detailsProduct(nameProduc));
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




