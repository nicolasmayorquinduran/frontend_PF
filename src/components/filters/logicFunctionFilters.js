export const filterClothingType = (all, filter) =>
  filter.length
    ? all.filter((product) => product.categories.some((c) => c.name == filter))
    : all;

export const filterSort = (all, filter) => {
  switch (filter) {
    case "Mayor precio":
      return all.sort((a, b) => (Number(a.price) >= Number(b.price) ? -1 : 1));
    case "Menor precio":
      return all.sort((a, b) => (Number(a.price) >= Number(b.price) ? 1 : -1));
    case "Mayor ranking":
      return all.sort((a, b) => (a.ranking >= b.ranking ? -1 : 1));
    case "Menor ranking":
      return all.sort((a, b) => (a.ranking >= b.ranking ? 1 : -1));
    case "A > z":
      return all.sort((a, b) => (a.name >= b.name ? 1 : -1));
    case "Z > a":
      return all.sort((a, b) => (a.name >= b.name ? -1 : 1));
    default:
      return all;
  }
};
