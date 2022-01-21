export const filterClothingTipe = (all, filter) =>
  filter.length ? all.filter((product) => product.category === filter) : all;

export const filterPrice = (all, filter) =>
  filter.length
    ? filter === "mayor"
      ? all.sort((a, b) => (a.price >= b.price ? 1 : -1))
      : all.sort((a, b) => (a.price >= b.price ? -1 : 1))
    : all;

export const filterRanking = (all, filter) =>
  filter.length
    ? filter === "mayor"
      ? all.sort((a, b) => (a.ranking >= b.ranking ? 1 : -1))
      : all.sort((a, b) => (a.ranking >= b.ranking ? -1 : 1))
    : all;

export const filterAlph = (all, filter) =>
  filter.length
    ? filter === "A > z"
      ? all.sort((a, b) => (a.price >= b.price ? 1 : -1))
      : all.sort((a, b) => (a.price >= b.price ? -1 : 1))
    : all;
