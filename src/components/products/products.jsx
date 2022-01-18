import { useSelector, useDispatch, useEffect } from "react";
import { getProducts } from "../../redux/actions/products";
import SearchBar from "../SearchBar/SearchBar";

const products = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProducts()));
  const allProducts = useSelector((store) => store.productsReducer.products);
  console.log(allProducts);
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default products;
