import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCategories,
  deleteCategories,
  getCategories,
} from '../../../redux/actions/categories'
import './adminCategories.css'
import axios from 'axios'
/* import { Image } from 'cloudinary-react'; */

function AdminCat() {
  const categories = useSelector(
    state =>
      (state.filterCategories.length && state.filterCategories) ||
      state.categories
  )
  // const [categories, setCategories] = useState(DBcategories);
  // console.log(categories);

  //INSERTAR IMAGEN
  const [imageSelected, setImageSelected] = useState('')
  // console.log(imageSelected)

  const [newCategory, setNewCategory] = useState({
    name: '',
    active: true,
    img: imageSelected,
  })

  const dispatch = useDispatch()
  useEffect(() => dispatch(getCategories()), [dispatch, imageSelected])

  const handleChange = e => {
    e.preventDefault()
    setNewCategory(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!e.target.id) {
      alert('Debes crear categoria')
    } else if (categories.includes(e.target.id)) {
      alert('esta categoría ya existe')
    } else {
      dispatch(addCategories(newCategory))
    }

    setNewCategory('')
    document.getElementById('inputCategory').value = ''
  }

  const handleDeteleCategory = e => {
    e.preventDefault()
    dispatch(deleteCategories(e.target.id))
  }

  const uploadImage = () => {
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'qoc3ud7y')

    axios
      .post(
        'https://api.cloudinary.com/v1_1/jonascript/image/upload/',
        formData
      )
      .then(response => {
        return setImageSelected(response.data.url)
      })
  }

  return (
    <>
      <div className="categoryContainer">
        <div className="newCategory">
          <div>
            <h5>Nueva categoría: </h5>
          </div>
          <form id={newCategory} onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Nombre..."
                onChange={handleChange}
                id="inputCategory"
              ></input>
              <div>
                <button>Crear</button>
              </div>
            </div>
          </form>
          <div className='uploadImage'>
            <input
              type="file"
              onChange={event => setImageSelected(event.target.files[0])}
            />
            <button onClick={uploadImage}>Upload Image</button>
            <img src={imageSelected} alt="Imagen" />
          </div>
        </div>
        <div className="categoriesContainer">
          <h5>Categorías creadas: </h5>
          <div className="categoriesCards">
            {categories?.map(c => {
              return (
                <div className="catCard">
                  <div className='labelAndDelete'>
                    <label className="catLabel">{c.name}</label>

                    <button
                      className="deleteBtn"
                      id={c}
                      onClick={handleDeteleCategory}
                    >
                      X
                    </button>
                  </div>
                  <img src={c.img} alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminCat
