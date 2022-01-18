import { useSelector, useDispatch, useEffect } from "react";
import { getProducts } from "../../redux/actions/products";

const products = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProducts()));
  const allProducts = useSelector((store) => store.productsReducer.products);
  console.log(allProducts);
  return <div></div>;
};

export default products;
