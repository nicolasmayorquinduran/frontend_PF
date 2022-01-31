import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Children } from "../../../globalStyles";
import "./style.css";

const SectionPromos = ({ allPromos }) => {
  let [counter, setCounter] = useState(0);

  const handleArrowPromos = (e) => {
    e.target.className.includes("decrement")
      ? counter > 0 && setCounter(counter--)
      : counter < allPromos.length && setCounter(counter++);
  };

  //   useEffect(() => handleArrowPromos(), [handleArrowPromos]);

  console.log(counter);
  return (
    <Container>
      {
        <Children className="sliderPromo">
          <div className="path"></div>
          <button
            id="decremet"
            onClick={(e) => {
              handleArrowPromos(e);
              handleArrowPromos(e);
            }}
          >
            <div className="path decrement" style={{ opacity: "0" }}></div>
            <FontAwesomeIcon value="decremet" icon={faChevronLeft} />
          </button>
          <div className="promo">
            <img src={allPromos[counter].img} alt={allPromos[counter].title} />
            <div className="data">
              <h1>{allPromos[counter].title}</h1>
              <p>{allPromos[counter].resume}</p>
              <button>LoOk +</button>
            </div>
          </div>
          <button
            id="incremet"
            onClick={(e) => {
              handleArrowPromos(e);
              handleArrowPromos(e);
            }}
          >
            <div className="path increment" style={{ opacity: "0" }}></div>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </Children>
      }
    </Container>
  );
};

export default SectionPromos;
