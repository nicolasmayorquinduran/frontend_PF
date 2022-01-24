import { useState } from 'react'
import { useSelector } from 'react-redux'
import { postProductsAdm } from '../../../redux/actions/products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPenSquare,
  faPlusSquare,
  faWindowClose,
} from '@fortawesome/free-solid-svg-icons'

const EditProduct = ({ product }) => {
  const [edited, setEdited] = useState({
    name: product.name,
    price: product.price,
    ranking: product.ranking,
    img: product.img,
    categories: [product.category],
  })
  const categories = useSelector(state => state.categoryReducer.categories)

  console.log(edited)

  const handleEdited = e => {
    Array.isArray(edited[e.target.id])
      ? edited[e.target.id].includes(e.target.value)
        ? setEdited({
            ...edited,
            [e.target.id]: [
              ...edited[e.target.id].filter(c => c != e.target.value),
            ],
          })
        : e.target.value.length &&
          setEdited({
            ...edited,
            [e.target.id]: [...edited[e.target.id], e.target.value],
          })
      : setEdited({ ...edited, [e.target.id]: e.target.value })
    console.log(`name: ${e.target.value}`)
  }

  return (
    <>
      <form className="new">
        
          <div>
          <h3> Editar Producto </h3>
          <div className='editImage'>
          <div className="coverImage">
            <img src={edited.img} />
            <FontAwesomeIcon icon={faPenSquare} />
          </div>
          <div className="extraImages">
            <img
              src="https://img.archiexpo.es/images_ae/photo-g/49577-12858130.webp"
              width="200px"
              height="300px"
              alt="img not found"
            />
            <FontAwesomeIcon icon={faPlusSquare} />
          </div>
        </div>
          </div>

        <div className='formNew'>
          <div className="nombrePrecio">
            <h3> Nombre </h3>
            <input
              id="name"
              value={edited.name}
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleEdited}
              required
            />
            <h3> Precio </h3>
            <input
              id="price"
              value={edited.price}
              type="Number"
              min="0"
              name="price"
              autoComplete="off"
              onChange={handleEdited}
              required
            />
          </div>
          <div className='categorias'>
            <select
              id="categories"
              autoComplete="off"
              required
              onChange={handleEdited}
            >
              <option value=""> Seleccionar categorías</option>
              {categories.map(c => (
                <option id={c}> {c} </option>
              ))}
            </select>
          </div>

          <div className="categories">
            <label>Categoría(s) del producto</label>
            {edited.categories.map(category => (
              <div>
                <label>{category}</label>
                <FontAwesomeIcon
                  icon={faWindowClose}
                  id="categories"
                  onClick={e =>
                    edited[e.target.id].includes(category)
                      ? setEdited({
                          ...edited,
                          [e.target.id]: [
                            ...edited[e.target.id].filter(c => c != category),
                          ],
                        })
                      : category.length &&
                        setEdited({
                          ...edited,
                          [e.target.id]: [...edited[e.target.id], category],
                        })
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </form>
    </>
  )
}

export default EditProduct
