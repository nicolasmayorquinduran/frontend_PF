import { useState } from "react";

const Filters = ({
  clothingType,
  price,
  ranking,
  alph,
  filter,
  setFilter,
  handle,
}) => {
  const handleFilters = (e) => {
    setFilter({ ...filter, [e.target.id]: e.target.value });
  };
  return (
    <>
      <select name="clothingType" id="clothingType" onChange={handleFilters}>
        <option value="">Tipo de prenda</option>
        {clothingType.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>

      <select name="price" id="price" onChange={handleFilters}>
        <option value="">Precio</option>
        {price.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>

      <select name="clothingType" id="ranking" onChange={handleFilters}>
        <option value="">Ranking</option>
        {ranking.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>

      <select name="alph" id="alph" onChange={handleFilters}>
        <option value="">Orden alfabético</option>
        {alph.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </>
  );
};

export default Filters;
