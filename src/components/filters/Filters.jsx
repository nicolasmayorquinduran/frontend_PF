import { useState } from 'react'
import { Container, Children } from '../../globalStyles'

const Filters = ({ clothingType, price, ranking, alph, filter, setFilter }) => {
  const handleFilters = e => {
    setFilter({ ...filter, [e.target.id]: e.target.value })
  }
  return (
    <Container>
      <Children>
        <select id="clothingType" onChange={handleFilters}>
          <option value="">Tipo de prenda</option>
          {/* {clothingType.map((el) => (
            <option value={el}>{el}</option>
          ))} */}
        </select>
      </Children>

      <Children>
        <select id="sort" onChange={handleFilters}>
          <option value="">Ordenar por:</option>
          <optgroup label="precio">
            {price.map(el => (
              <option value={el}>{el}</option>
            ))}
          </optgroup>
          <optgroup label="ranking">
            {ranking.map(el => (
              <option value={el}>{el}</option>
            ))}
          </optgroup>
          <optgroup label="orden alfabético">
            {alph.map(el => (
              <option value={el}>{el}</option>
            ))}
          </optgroup>
        </select>
      </Children>
    </Container>
  )
}

export default Filters
