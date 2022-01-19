import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/actions/products'
import { Container } from '../../../globalStyles'
import SearchBar from '../SearchBar/SearchBar'
import Product from './product'
import { Category, Select, Selected } from './Style'



const Products = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(getProducts()), [dispatch])
  const allProducts = useSelector(store => store.productsReducer.products)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const indexOfLastProduct = currentPage*productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = allProducts.slice(indexOfFirstProduct,indexOfLastProduct);
  const paginado = (pageNumber)=>{setCurrentPage(pageNumber)};

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
        {allProducts.map(p => (
          <Product name={p.name} img={p.img} price={p.price} />
        ))}
      </Container>
      <Paginado 
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
      />
    </div>
  )
}

export default Products
