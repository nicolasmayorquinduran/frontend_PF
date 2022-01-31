import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Children } from "../../../globalStyles";
import { getProducts } from "../../../redux/actions/products";
import { getCategories } from "../../../redux/actions/categories";
import { getPromos } from "../../../redux/actions/promos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionPromos from "./SectionPromos";
import SectionCategories from "./SectionCategories";
import SectionProducts from "./SectionProducts";
import Loading from "../../Loading/Index";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Home = () => {
  const dispatch = useDispatch();

  const allPromos = useSelector((store) => store.promos);
  const allCategories = useSelector((store) => store.categories);
  const allProducts = useSelector((store) => store.allProducts);
  useEffect(() => {
    dispatch(getPromos());
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {allPromos.length ? <SectionPromos allPromos={allPromos} /> : <Loading />}

      {allCategories.length ? (
        <SectionCategories allCategories={allCategories} />
      ) : (
        <Loading />
      )}

      {allProducts.length ? (
        <SectionProducts allProducts={allProducts} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
