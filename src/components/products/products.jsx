import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import { Container } from "../../globalStyles";
import SearchBar from "../SearchBar/SearchBar";
import Product from "./product";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProducts()), [dispatch]);
  const allProducts = useSelector((store) => store.productsReducer.products);
  console.log(allProducts);

  return (
    <div>
      <SearchBar />
      <Container>
        {allProducts.map((p) => (
          <Product name={p.name} img={p.img} price={p.price} />
        ))}
      </Container>
    </div>
  );
};

export default Products;
