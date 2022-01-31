import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Container, Children } from "../../../globalStyles";
import { Link } from "react-router-dom";
import "./style.css";

const SectionProducts = ({ allProducts }) => {
  return (
    <div style={{ margin: "60px 0" }}>
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

      <Container className="section3" style={{ height: "80vh" }}>
        <Children style={{ height: "100%" }}>
          <div
            className="top"
            style={{
              position: "relative",
              height: "40%",
              backgroundImage: `url(${allProducts[0].img[0]})`,
            }}
          >
            <Link to={`/detail/${allProducts[0].ProductId}`} className="path">
              <FontAwesomeIcon icon={faEye} />
              {allProducts[0].name}
            </Link>
          </div>

          <div
            style={{
              position: "relative",
              height: "60%",
              backgroundImage: `url(${allProducts[1].img[0]})`,
            }}
          >
            <Link to={`/detail/${allProducts[1].ProductId}`} className="path">
              <FontAwesomeIcon icon={faEye} />
              {allProducts[1].name}
            </Link>
          </div>
        </Children>

        <Children style={{ height: "100%" }}>
          <div
            className="top"
            style={{
              position: "relative",
              height: "100%",
              backgroundImage: `url(${allProducts[2].img[0]})`,
            }}
          >
            <Link to={`/detail/${allProducts[2].ProductId}`} className="path">
              <FontAwesomeIcon icon={faEye} />
              {allProducts[2].name}
            </Link>
          </div>
        </Children>

        <Children style={{ height: "100%" }}>
          <div
            className="top"
            style={{
              position: "relative",
              height: "60%",
              backgroundImage: `url(${allProducts[3].img[0]})`,
            }}
          >
            <Link to={`/detail/${allProducts[3].ProductId}`} className="path">
              <FontAwesomeIcon icon={faEye} />
              {allProducts[3].name}
            </Link>
          </div>

          <div
            style={{
              position: "relative",
              height: "60%",
              backgroundImage: `url(${allProducts[4].img[0]})`,
            }}
          >
            <Link to={`/detail/${allProducts[4].ProductId}`} className="path">
              <FontAwesomeIcon icon={faEye} />
              {allProducts[4].name}
            </Link>
          </div>
        </Children>
      </Container>
    </div>
  );
};

export default SectionProducts;
