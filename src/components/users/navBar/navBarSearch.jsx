import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../../redux/actions/products";

export const NavBarSearch = () => {
  const [searchBar, setSearchBar] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const showHideSearchBar = () => {
    setSearchBar(!searchBar);
  };

  useEffect(() => dispatch(searchProducts(search), [search]));

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch(search);
  // }

  function handleInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="searchContainer">
      {searchBar ? (
        <FontAwesomeIcon onClick={showHideSearchBar} icon={faSearch} />
      ) : (
        <div class="search">
          <form onChange={handleInputChange}>
            <FontAwesomeIcon type="submit" icon={faSearch} />
            <div>
              <input
                type="text"
                placeholder="Buscar..."
                onChange={handleInputChange}
                value={search}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
