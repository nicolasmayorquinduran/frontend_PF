import React from "react";
import { Link } from "react-router-dom";
import { Children } from "../../../globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
const Product = ({ id, name, price, img, ranking }) => {
  ranking = [Number(ranking)];
  while (ranking.length < ranking[ranking.length - 1]) {
    ranking = [...ranking, ranking[ranking.length - 1]];
  }
  return (
    <Children>
      <div className="father">
        <Link
          to={`/products/${id}`}
          className="card"
          style={{ backgroundImage: `url(${img})` }}
        >
          <Link to={`/products/${id}`}>
            <div className="eye">
              <FontAwesomeIcon className="iconEye" icon={faEye} />{" "}
            </div>
          </Link>
        </Link>

        <div className="Card">
          <Link to={`/products/${id}`}>{name}</Link>
          <strong>{`$${price}`}</strong>
          <div className="ranking">
            {ranking.map((star) => (
              <FontAwesomeIcon icon={faStar} />
            ))}
          </div>
        </div>
      </div>
    </Children>
  );
};

export default Product;
