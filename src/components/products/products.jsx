import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../redux/actions/products'
import SearchBar from '../SearchBar/SearchBar'
import { Container } from '../../globalStyles'

const Products = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(getProducts()))
  const allProducts = useSelector(store => store.productsReducer.products)
  console.log(allProducts)

  return (
    <div>
      <SearchBar />
      <div>
        <select name="" id="">
          <option value="">Category</option>
          <option value="">Shoes</option>
          <option value="">Jeans</option>
          <option value="">Dresses</option>
          <option value="">Women Clothing</option>
          <option value="">Men Clothing</option>
          <option value="">Lingerie</option>
        </select>
      </div>
      <div>
        <button>Shoes</button>
        <button>Jeans</button>
        <button>Dresses</button>
        <button>Lingerie</button>
      </div>
      <Container>
        {allProducts.map(p => (
          <p>{p.name}</p>
        ))}
      </Container>
    </div>
  )
}

export default Products
