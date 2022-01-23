export const filterClothingType = (all, filter) =>
  filter.length ? all.filter((product) => product.category === filter) : all;

export const filterPrice = (all, filter) =>
  (!filter.length && all) ||
  (filter === "mayor" &&
    all.sort(
      (a, b) =>
        (a.price > b.price && 1) ||
        (b.price > a.price && -1) ||
        (a.price == b.price && 0)
    )) ||
  (filter === "menor" &&
    all.sort(
      (a, b) =>
        (a.price > b.price && -1) ||
        (b.price > a.price && 1) ||
        (a.price == b.price && 0)
    ));

export const filterRanking = (all, filter) =>
  filter.length
    ? filter === "mayor"
      ? all.sort((a, b) => (a.ranking >= b.ranking ? 1 : -1))
      : all.sort((a, b) => (a.ranking >= b.ranking ? -1 : 1))
    : all;

export const filterAlph = (all, filter) =>
  filter.length
    ? filter === "A > z"
      ? all.sort((a, b) => (a.name >= b.name ? 1 : -1))
      : all.sort((a, b) => (a.name >= b.name ? -1 : 1))
    : all;
