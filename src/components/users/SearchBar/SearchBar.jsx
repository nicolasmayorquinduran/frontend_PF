import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../../redux/actions/products";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => dispatch(searchProducts(search), [search]));

  function handleInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="container-searchBar">
      <form onChange={handleInputChange}>
        <input
          className="input-search"
          type="text"
          placeholder="Buscar..."
          onChange={handleInputChange}
          value={search}
        />
        <button className="btn-Search" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
