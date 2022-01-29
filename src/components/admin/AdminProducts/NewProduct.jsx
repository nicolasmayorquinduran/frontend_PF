import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// Actions:
import { getCategories } from '../../../redux/actions/categories';

// Styles:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './AdminProduct.css';


export default function NewProduct () {
  
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categoryReducer.categories);

  useEffect(() => {
    
    dispatch(getCategories());
  
  }, [dispatch]);
  
  // GUARDO EL FORMULARIO EN EL ESTADO:
  const [product, setProduct] = useState(
    {
      name: '',
      img: [],
      price: '',
      description: '',
      aditionalInformation: {},
      stock: {},
      categories: [],
    }
  );

  // PARA EL RENDERIZADO (INPUT DE STOCK):
  let size = ["xs", "s", "m", "l", "xl", "xxl"];

  // PARA EL RENDERIZADO (INPUT DE INFORMACION ADICIONAL):
  let infoAd = ["Manufacturer", "Material", "occasion", "Fit", "Lining material"];

  // GUARDO LO QUE EL USUARIO ESCRIBE EN INPUT:
  function handleChange(event) {
    setProduct(
      {
        ...product,
        [event.target.name]: event.target.value,
      }
    );
  };

  function handleSubmitCategory(event) {
    setProduct(
      {
        ...product,
        categories: [...product.categories, event.target.value]
      }
    );

    event.preventDefault()
  };

  function handleImage(event) {
    setProduct(
      {
        ...product,
        img: [...product.img, event.target.value]
      }
    );
  };

  // SUBMIT:
  async function handleSubmit(event) {
    event.preventDefault()

    setProduct(
      {
        name: '',
        img: [],
        price: '',
        description: '',
        aditionalInformation: {},
        stock: {},
        categories: [],
      }
    )
  };

  const updateProduct = async () => {
    await axios.post("http://localhost:3001/products", product);
  }

  //console.log(product);

  return (
    <form onSubmit={handleSubmit} className="new">
 
      <h2> Agregá un nuevo Producto </h2>

      <div className="AddPhoto">

        <label> Imagen: </label>
        <div className="icon">
          <input
            onChange={handleImage}
            type="file" 
            required 
          />
          {/* <FontAwesomeIcon icon={faPlusSquare} /> */}
        </div>

      </div>
      

      <div className="formNew">

        <div className="nombre">
          <label> Nombre: </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={product.name}
            autoComplete="off"
            required
          />         
        </div>


        <div className='precio'>
          <label> Precio: </label>
          <input
            onChange={handleChange}
            type="number"
            min="0"
            name="price"
            value={product.price}
            autoComplete="off"
            required
          />
        </div>


        <div>
          <label> Descripción: </label>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            value={product.description}
            autoComplete="off"
            required
          />         
        </div>


        <div >
          <label> Categorías: </label>
          <select
            onClick={handleSubmitCategory}
            name="categories"
            autoComplete="off"
            required
          >
          {
            categories.map((c) => ( <option> {c.name} </option> ))
          }
          </select>
        </div>


        <div>
          <label> Stocks: </label>
          { 
            size.map((sizes) => (
              <div>
                <label>{sizes}:</label>
                <input 
                  type="number" 
                  min="0" 
                  onChange={(event) => setProduct({...product, stock: { ...product.stock, [sizes]: event.target.value} })}
                  autoComplete="off" 
                  required 
                />
              </div>
            ))
          }  
        </div>


        <div>
          <label> Información adicional: </label>
          { 
            infoAd.map((info) => (
              <div>
                <label>{info}:</label>
                <input 
                  type="text" 
                  onChange={(event) => setProduct({...product, aditionalInformation: { ...product.aditionalInformation, [info]: event.target.value} })}
                  autoComplete="off" 
                  required 
                />
              </div>
            ))
          }  
        </div>


        <div className='create'>
          <button type='submit' onClick={() => updateProduct(product)}> ¡Crear! </button>
        </div>
      

      </div>
    
    </form>
  )
};

