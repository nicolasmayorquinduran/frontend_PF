import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/actions/products'
import { Container } from '../../../globalStyles'
import SearchBar from '../SearchBar/SearchBar'
import Product from './product'
import Paginado from '../Paginado/Paginado.jsx'
import { Category, Select, Selected } from './Style'
import { getCategories,
         // byCategory
 } from '../../../../src/redux/actions/categories.js'




const Products = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector(store => store.productsReducer.products)
  const allCategories = useSelector(store=>store.categoryReducer.categories)
  useEffect(() => dispatch(getProducts(), getCategories()), [dispatch])
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


  return (
    <div>
      <SearchBar />
      <Category>
        <Select >
          <option value="All">All</option>         
          {allCategories?.map((cat)=>{
          <option value={cat}>{cat}</option>
          })}
        </Select>
        <Selected>Shoes</Selected>
        <Selected>Jeans</Selected>
        <Selected>Dresses</Selected>
        <Selected>Lingerie</Selected>
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
