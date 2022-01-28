import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Children } from "../../../globalStyles";
import { getProducts } from "../../../redux/actions/products";
import { getCategories } from "../../../redux/actions/categories";
import { getPromos } from "../../../redux/actions/promos";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPromos());
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const allPromos = useSelector((store) => store.promoReducer.promos);
  const allCategories = useSelector(
    (store) => store.categoryReducer.categories
  );
  // const allProducts = useSelector((store) => store.productReducer.allProducts);
  console.log(allPromos);
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
      <Container>
        {allCategories.map((c) => (
          <Children>
            <img src={c.name} alt={c.name} />
            <h4>{c.name}</h4>
          </Children>
        ))}
      </Container>
      {/* <Container>
        {allProducts.map(
          (p, i) =>
            i < 6 && (
              <Children>
                <img src={p.img} alt={p.name} />
                <strong>{p.name}</strong>
              </Children>
            )
        )}
      </Container> */}
    </div>
  );
};

export default Home;
