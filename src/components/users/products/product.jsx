import React from 'react'
import { Link } from 'react-router-dom'
import { Children } from '../../../globalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { containerImage } from './Style.jsx'
const Product = ({ id, name, price, img, ranking }) => {
  ranking = 20 * (5 - ranking)
  return (
    <Children>
      <Link to="/detail">
        <containerImage>
          <img src={img} alt="Producto" />
          <FontAwesomeIcon className="icon" icon={faCartPlus} />{' '}
        </containerImage>
        <h5>{name}</h5>
      </Link>
      <strong>{`$${price}`}</strong>
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
    </Children>
  )
}

export default Product
