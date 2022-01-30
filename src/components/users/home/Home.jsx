import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Children } from "../../../globalStyles";
import { getProducts } from "../../../redux/actions/products";
import { getCategories } from "../../../redux/actions/categories";
import { getPromos } from "../../../redux/actions/promos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faChevronCircleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Home = () => {
  const dispatch = useDispatch();
  let [counter, setCounter] = useState(0);
  let [group, setGroup] = useState(2);

  const allPromos = useSelector((store) => store.promos);
  const allCategories = useSelector((store) => store.categories);
  const allProducts = useSelector((store) => store.allProducts);
  useEffect(() => {
    dispatch(getPromos());
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch, counter, setCounter]);

  const handleArrowPromos = (e) => {
    e.target.id === "incremet"
      ? counter === 0
        ? setCounter(0)
        : setCounter(counter--)
      : counter === allPromos.length - 1
      ? setCounter(allPromos.length - 1)
      : setCounter(counter++);
  };

  const handleArrowCategories = (e) => {
    e.target.id === "incremet"
      ? counter === 0
        ? setGroup(0)
        : setGroup(group--)
      : counter === allCategories.length - 1
      ? setGroup(allCategories.length - 1)
      : setGroup(group++);
  };

  console.log(counter);
  return (
    <div>
      <Container>
        {allPromos.length ? (
          <Children className="sliderPromo">
            <div className="path"></div>
            <FontAwesomeIcon
              id="decremet"
              icon={faArrowAltCircleLeft}
              onClick={handleArrowPromos}
            />
            <div className="promo">
              <img
                src={allPromos[counter].img}
                alt={allPromos[counter].title}
              />
              <div className="data">
                <h1>{allPromos[counter].title}</h1>
                <p>{allPromos[counter].resume}</p>
                <button>LoOk +</button>
              </div>
            </div>
            <FontAwesomeIcon
              id="incremet"
              icon={faArrowAltCircleRight}
              onClick={handleArrowPromos}
            />
          </Children>
        ) : (
          <Children>cargando...</Children>
        )}
      </Container>

      <div>
        <div>
          <hr
            style={{
              width: "100px",
              height: "7px",
              margin: "10px auto",
              color: "#9E005D",
              opacity: 1,
            }}
          ></hr>
          <h3>nuestras</h3>
          <h3 style={{ fontWeight: "bold" }}>CategOrías</h3>
        </div>

        <Container className="section2">
          <FontAwesomeIcon
            id="decrement"
            icon={faChevronLeft}
            onClick={handleArrowCategories}
          />
          {allCategories.map(
            (c, index) =>
              index >= group - 2 &&
              index <= group && (
                <Children>
                  <div className="categories">
                    <img src={c.img} alt={c.name} />
                    <h4>{c.name}</h4>
                  </div>
                </Children>
              )
          )}
          <FontAwesomeIcon
            id=""
            icon={faChevronRight}
            onClick={handleArrowCategories}
          />
        </Container>
      </div>

      <div style={{ marginTop: "60px" }}>
        <div>
          <hr
            style={{
              width: "100px",
              height: "7px",
              margin: "10px auto",
              color: "#9E005D",
              opacity: 1,
            }}
          ></hr>
          <h3>nuestras</h3>
          <h3 style={{ fontWeight: "bold" }}>nOvedades</h3>
        </div>

        <Container>
          {
            <>
              <Children className="col">
                <div>
                  <img src={allProducts[0].img[0]} alt={allProducts[0].name} />
                  <strong>{allProducts[0].name}</strong>
                </div>
                <div>
                  <img src={allProducts[1].img[1]} alt={allProducts[1].name} />
                  <strong>{allProducts[1].name}</strong>
                </div>
              </Children>

              <Children className="col">
                <div>
                  <img src={allProducts[2].img[2]} alt={allProducts[2].name} />
                  <strong>{allProducts[2].name}</strong>
                </div>
              </Children>

              <Children className="col">
                <div>
                  <img src={allProducts[3].img[3]} alt={allProducts[3].name} />
                  <strong>{allProducts[3].name}</strong>
                </div>
                <div>
                  <img src={allProducts[4].img[4]} alt={allProducts[4].name} />
                  <strong>{allProducts[4].name}</strong>
                </div>
              </Children>
            </>
          }
        </Container>
      </div>
    </div>
  );
};

export default Home;
