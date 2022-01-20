import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/products";

export const NavBarSearch = () => {
  const [searchBar, setSearchBar] = useState(true);

  const showHideSearchBar = () => {
    setSearchBar(!searchBar);
  };

  const dispatch = useDispatch();
  const [nameProduc, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getProducts(nameProduc));
  }

  function submitAndChange(e) {
    showHideSearchBar();
    handleSubmit(e);
  }

  return (
    <div className="searchContainer">
      {searchBar ? (
        <FontAwesomeIcon onClick={showHideSearchBar} icon={faSearch} />
      ) : (
        <div class="search">
          <FontAwesomeIcon
            type="submit"
            onClick={submitAndChange}
            icon={faSearch}
          />
          <div>
            <form>
              <input
                type="search"
                placeholder="Search Here"
                onChange={(e) => handleInputChange(e)}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
