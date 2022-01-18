import { Link } from 'react-router-dom'

import React from 'react'

const Product = ({ id, name, price, img, category }) => {
  return (
    <div>
      <Link to={`/products/${id}`}>
        <img src={img} alt="Producto" />
      </Link>
      <Link to={`/products/${id}`}>
        <h2>{name}</h2>
      </Link>
      <Link to={`/products/${id}`}>
        <h3>{price}</h3>
      </Link>
    </div>
  )
}

export default Product
