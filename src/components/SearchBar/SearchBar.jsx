import React from "react";
import { useState } from "react";
import { useDipatch } from "react-redux";
import { getProductsByName } from "../../redux/actions/products";

export default function SearchBar() {
  const dispatch = useDipatch();
  cons[(nameProduc, setName)] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmite(e) {
    e.preventDefault();
    dispatch(getProductsByName(nameProduc));
  }

  return (
    <div>
      <input
        type="text"
        className="input-search"
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
