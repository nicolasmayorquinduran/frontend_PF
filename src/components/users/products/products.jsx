import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/products";
import { Container, Prueba } from "../../../globalStyles";
import Product from "./product";
import Paginado from "../Paginado/Paginado.jsx";
import Filters from "../../filters/Filters";
import {
  filterClothingType,
  filterSort,
} from "../../filters/logicFunctionFilters";
import { getCategories } from "../../../../src/redux/actions/categories.js";
//import { filterByCategory } from "../../../../src/redux/actions/products.js";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  //const [productsPerPage, setProductsPerPage] = useState(9);
  const productsPerPage = 12;
  const [filter, setFilter] = useState({
    clothingType: location.state != null ? location.state.filter : "",
    sort: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    setCurrentPage(1);
  }, [dispatch, search, location]);

  let allProducts = useSelector((state) =>
    state.products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  allProducts = filterSort(
    filterClothingType(allProducts, filter.clothingType),
    filter.sort
  );
  allProducts = allProducts.filter((p) => p.active)
  const allCategories = useSelector((state) => state.categories);
  

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => setSearch(e.target.value);
  // console.log(filter.name);
  return (
    <div className="products">
      <input
        id="search"
        type="text"
        placeholder="Nombre producto"
        onChange={handleSearch}
      />

      <Filters
        filter={filter}
        setFilter={setFilter}
        clothingType={allCategories.filter(el => el.active === true)}
        price={["Mayor precio", "Menor precio"]}
        ranking={["Mayor ranking", "Menor ranking"]}
        alph={["A > z", "Z > a"]}
      />
      <Container>
        {currentProduct?.map((product) => {
          return (
            <Product
              id={product.ProductId}
              img={product.img[0]}
              name={product.name}
              price={product.price}
              ranking={product.ranking}
            />
          );
        })}
      </Container>

      <Paginado
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
      />
    </div>
  );
};

export default Products;
