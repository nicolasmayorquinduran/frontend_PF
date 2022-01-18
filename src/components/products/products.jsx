import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import SearchBar from "../SearchBar/SearchBar";
import { Container } from "../../globalStyles";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProducts()));
  const allProducts = useSelector((store) => store.productsReducer.products);
  console.log(allProducts);

  return (
    <div>
      <SearchBar />
      <Container>
        {allProducts.map((p) => (
          <p>{p.name}</p>
        ))}
      </Container>
    </div>
  );
};

export default Products;
