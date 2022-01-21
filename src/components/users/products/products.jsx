import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/actions/products'
import { Container, Category, SelectCategory } from '../../../globalStyles'
import SearchBar from '../SearchBar/SearchBar'
import Product from './product'
import Paginado from '../Paginado/Paginado.jsx'
import { getCategories } from '../../../../src/redux/actions/categories.js'
import { filterByCategory } from '../../../../src/redux/actions/products.js'


const Products = () => {
  const dispatch = useDispatch()
  let allProducts = useSelector(store => store.productsReducer.products)
    const searchProducts = useSelector((store) => store.productsReducer.search);

  const allCategories = useSelector(store=>store.categoryReducer.categories)
  const [filter, setFilter] = useState("")
  allProducts = allProducts.filter(e=>e.category.includes(filter))
   allProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(searchProducts.toLowerCase())
  );
  useEffect(()=>{
    dispatch(getProducts())
    dispatch(getCategories())
  }, [dispatch])  

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  function handleFilterCategories(e){
    setFilter(e.target.value)
  }

  return (
    <div>
      <SearchBar />
      <Category>
        <SelectCategory onChange={e=>handleFilterCategories(e)}>
          <option value="All">All</option>         
          {allCategories && allCategories.map(cat=>(
          <option value={cat}>{cat}</option>
            ))}
        </SelectCategory>
        </Category>

      <Container>
        {currentProduct?.map((product) => {
          return (
            <Product
              img={product.img}
              name={product.name}
              price={product.price}
              ranking={product.ranking}
            />
          );
        })}
      </Container>
      <Paginado
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
      />
    </div>
  );
};

export default Products;
