import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Children } from "../../../globalStyles";

const Home = () => {
  const dispatch = useDispatch();
  const allPromos = useSelector((store) => store.promoReducer.promos);
  const allCategories = useSelector(
    (store) => store.categoryReducer.categories
  );
  const allProducts = useSelector((store) => store.productReducer.allProducts);
  return (
    <div>
      <Container>
        {allPromos.map((p) => (
          <Children>
            <img src={p.img} alt={p.title} />
            <h1>{p.title}</h1>
            <p>{p.resume}</p>
            <button>LoOk +</button>
          </Children>
        ))}
      </Container>
      <Container>{allCategories.map()}</Container>
      <Container>
        <Children></Children>
      </Container>
    </div>
  );
};

export default Home;
