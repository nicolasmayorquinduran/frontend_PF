import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/actions/products'
import { Container } from '../../../globalStyles'
import SearchBar from '../SearchBar/SearchBar'
import Product from './product'
import Paginado from '../Paginado/Paginado.jsx'
import { capa, Category, containerImage, Select, Selected } from './Style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'




const Products = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector(store => store.productsReducer.products)
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
        <Select name="" id="">
          <option value="">Category</option>
          <option value="">Shoes</option>
          <option value="">Jeans</option>
          <option value="">Dresses</option>
          <option value="">Women Clothing</option>
          <option value="">Men Clothing</option>
          <option value="">Lingerie</option>
        </Select>
        <Selected>Shoes</Selected>
        <Selected>Jeans</Selected>
        <Selected>Dresses</Selected>
        <Selected>Lingerie</Selected>
      </Category>

      <Container>
        {currentProduct?.map((product) => {
          return (
            <Product>
              <containerImage  img={product.img}>                
                  <Link to={'/'}><FontAwesomeIcon className='icon' icon={faCartPlus}/> </Link> 
              </containerImage>
              name={product.name}
              price={product.price}
              ranking={product.ranking}
              </Product> 
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
