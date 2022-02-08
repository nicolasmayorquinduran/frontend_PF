import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "../../../globalStyles";
import "./style.css";

const SectionCategories = ({ allCategories }) => {
  let [group, setGroup] = useState(2);

  const handleArrowCategories = (e) => {
    e.target.className.includes("decrement")
      ? group > 0 && setGroup(group--)
      : group < allCategories.length && setGroup(group++);
  };
  console.log(group);
  return (
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
        {group !== 2 && (
          <button
            id="decremet"
            onClick={(e) => {
              handleArrowCategories(e);
              handleArrowCategories(e);
            }}
          >
            <div className="path decrement" style={{ opacity: "0" }}></div>
            <FontAwesomeIcon value="decremet" icon={faChevronLeft} />
          </button>
        )}
        {allCategories.map(
          (c, index) =>
            index >= group - 2 &&
            index <= group && (
              <Link
                to="/products"
                state={{
                  filter: c.name,
                }}
                className="categories"
                key={c.CategoriesId}
                style={{
                  backgroundImage: `url(${c.img})`,
                }}
              >
                <div className="title">
                  <h4>{c.name}</h4>
                </div>
              </Link>
            )
        )}
        {group !== allCategories.length - 1 && (
          <button
            id="incremet"
            onClick={(e) => {
              handleArrowCategories(e);
              handleArrowCategories(e);
            }}
          >
            <div className="path increment" style={{ opacity: "0" }}></div>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </Container>
    </div>
  );
};

export default SectionCategories;
