import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/products";
import { Container } from "../../../globalStyles";
import Product from "./product";
import Paginado from "../Paginado/Paginado.jsx";
import Filters from "../../filters/Filters";
import {
  filterClothingType,
  filterSort,
} from "../../filters/logicFunctionFilters";
import { getCategories } from "../../../../src/redux/actions/categories.js";
import { filterByCategory } from "../../../../src/redux/actions/products.js";

const Products = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const [filter, setFilter] = useState({
    clothingType: "",
    sort: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    setCurrentPage(1);
  }, [dispatch, search]);

  let allProducts = useSelector((store) =>
    store.productsReducer.products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
  );
  allProducts = allProducts.concat((useSelector((store) => store.productsReducer.newProducts)))
  allProducts = filterSort(
    filterClothingType(allProducts, filter.clothingType),
    filter.sort
  );
  const allCategories = useSelector(
    (store) => store.categoryReducer.categories
  );

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
        clothingType={allCategories}
        price={["Mayor precio", "Menor precio"]}
        ranking={["Mayor ranking", "Menor ranking"]}
        alph={["A > z", "Z > a"]}
      />

      <Container>
        {currentProduct?.map((product) => {
          return (
            <Product
              id={product.id}
              img={product.img}
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
