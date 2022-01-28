import React from "react"
import { Link } from "react-router-dom"
import { Children } from "../../../globalStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons"
import "./styles.css"
const Product = ({ id, name, price, img, ranking }) => {
  ranking = 20 * (5 - ranking);
  return (
    <Children>
      <div className="father">
        <div className="card">
          <Link to={`/detail/${id}`}>
            <div className="eye">
              <FontAwesomeIcon className="iconEye" icon={faEye} />{' '}
            </div>
          </Link>
          <Link to={`/detail/${id}`}>
            <img src={img} alt="Producto" />
            <h5>{name}</h5>
          </Link>
          <strong>{`$${price}`}</strong>
        </div>
        <div className="ranking">
          <div style={{ width: `${ranking}%` }} className="path"></div>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
    </Children>
  )
}

export default Product
