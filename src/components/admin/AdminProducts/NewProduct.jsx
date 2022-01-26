import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postProductsAdm } from '../../../redux/actions/products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './AdminProduct.css'
const NewProduct = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categoryReducer.categories)

  const [count, setCount] = useState(0)

  // INITIAL STATE:
  const [products, setProducts] = useState({
    name: '',
    img: 'https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-470x632.jpg',
    category: [],
    stock: count,
    price: '',
  })

  // INPUTS:
  function handleChange(event) {
    setProducts({
      ...products,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmitCategory(event) {
    setProducts({
      ...products,
      category: [...products.category, event.target.value],
    })

    event.preventDefault()
  }

  /* ---------------- COUNTER STOCK ---------------- */
  const handleSubtractOne = (e) => {
    e.preventDefault()
    products.stock >= 0 &&
      setProducts({
        ...products,
        stock: products.stock - 1,
      })
  }

  const handleAddOne = (e) => {
    e.preventDefault()
    setProducts({
      ...products,
      stock: products.stock + 1,
    })
  }
  /* ------------------------------------------------ */

  // SUBMIT:
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postProductsAdm(products))
    setProducts({
      name: '',
      img: [
        'https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-470x632.jpg',
        'https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_3-470x632.jpg',
        'https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_2-470x632.jpg',
        'https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21-470x632.jpg',
      ],
      category: [],
      stock: '',
      price: '',
    })

  }
  return (
    <form className="new" onSubmit={handleSubmit}>
      <div>
         
         <h3> Agregar Producto </h3>

        <div className="AddPhoto">

          <img
            src="https://img.archiexpo.es/images_ae/photo-g/49577-12858130.webp"
            width="200px"
            height="300px"
            alt="img not found"
          />

          <div className="icon">
            <FontAwesomeIcon icon={faPlusSquare} />
          </div>

        </div>
      </div>

      <div className="formNew">

        <div className="nombre">
          <h3> Nombre </h3>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={products.name}
            autoComplete="off"
            required
          />          
        </div>

        <div className='precio'>
        <h3> Precio </h3>
          <input
            onChange={handleChange}
            type="Number"
            min="0"
            name="price"
            value={products.price}
            autoComplete="off"
            required
          />
        </div>

        <div className="categorias">
          <h3> Categorías </h3>
          <select
            onClick={handleSubmitCategory}
            name="category"
            autoComplete="off"
            required
          >
            {categories.map(c => (
              <option> {c} </option>
            ))}
          </select>
        </div>

        <div >
          <h3> Stock </h3>
        <div className="stock">
        <div>
            <button onClick={handleSubtractOne}>-1</button>
          </div>

          <div>
            <p>{products.stock}</p>
          </div>
          <div>
            <button onClick={handleAddOne}>+1</button>
          </div>
          
        </div>
        </div>
        <div className='create'>
            <button type='submit'>Create</button>
          </div>
      </div>
    </form>
  )
}

export default NewProduct
