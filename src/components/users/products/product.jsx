import React from "react";
import { Link } from "react-router-dom";
import { Children } from "../../../globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
const Product = ({ id, name, price, img, ranking, unids, amount }) => {
  ranking = [Number(ranking)];
  while (ranking.length < ranking[ranking.length - 1]) {
    ranking = [...ranking, ranking[ranking.length - 1]];
  }
  return (
    <Children pc="4" tablet="3" movil="2">
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
          <Link to={`/products/${id}`}><h5>{name}</h5></Link>
          {/* <strong>{`Unidades pedidas: ${unids}`}</strong> */}
          <strong>{`Precio: $${price}`}</strong>
          <div className="ranking">
            {ranking.map((star) => (
              <FontAwesomeIcon icon={faStar} />
            ))}
          </div>
          {/* <strong>{`Precio total $${amount}`}</strong> */}
        </div>
      </div>
    </Children>
  );
};

export default Product;
