import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions:
import { updateProductAdm } from '../../../redux/actions/products';
import { detailsProduct } from '../../../redux/actions/products';
import { getCategories } from '../../../redux/actions/categories';

// Styles:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faPlusSquare, faWindowClose } from "@fortawesome/free-solid-svg-icons";


const EditProduct = ({ product }) => {

  const dispatch = useDispatch()

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(detailsProduct(product.id));
    dispatch(getCategories());
  }, [dispatch, product.id])

  // ESTADO QUE MODIFICA EL PRODUCTO:
  const [edited, setEdited] = useState(
    {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      img: product.img,
      aditionalInformation: product.aditionalInformation,
      stock: product.stock,
      categories: [],
    }
  );

  console.log(edited);

  const handleEdited = (event) => {
    Array.isArray(edited[event.target.id])
    ? edited[event.target.id].includes(event.target.value)
    ? setEdited(
        {
          ...edited,
          [event.target.id]: [...edited[event.target.id].filter((c) => c != event.target.value)]
        }
      )
      
    : event.target.value.length && setEdited(
        {
          ...edited,
          [event.target.id]: [...edited[event.target.id], event.target.value]
        }
      )
      
    : setEdited({ ...edited, [event.target.id]: event.target.value });
  
  };


  // SUBMIT:
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateProductAdm(edited));
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="new">
        
        <div>
          
          <h2> Editar datos del Producto </h2>
          
          <div className="editImage">
            
            <div className="coverImage">
              <h3> Imagen: </h3>
              <img src={product.img} />
              <FontAwesomeIcon icon={faPenSquare} />
            </div>
            
            <div className="extraImages">
              <img
                src=""
                width="200px"
                height="300px"
                alt="img not found"
              />
              <FontAwesomeIcon icon={faPlusSquare} />
            </div>
          
          </div>
        
        </div>


        <div className="formNew">
          
          <div className="nombrePrecio">
            
            <h3> Nombre: </h3>
            <input
              id="name"
              value={product.name}
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleEdited}
              required
            />
            
            <h3> Precio </h3>
            <input
              id="price"
              value={product.price}
              type="Number"
              min="0"
              name="price"
              autoComplete="off"
              onChange={handleEdited}
              required
            />
          
          </div>
          

          <div className="categorias">
            <select
              id="categories"
              autoComplete="off"
              required
              onChange={handleEdited}
            >
            <option value=""> Seleccionar categorías</option>
            {
              categories.map((category) => (
                <option id={category}> {category.name} </option>
              ))
            }
            </select>
          </div>


          <div className="categories">
            <label> Categorías del producto: </label>
            {
              edited.categories.map((category) => (
                <div>
                  <label>{category}</label>
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    id="categories"
                    onClick={(event) => edited[event.target.id].includes(category)
                      ? setEdited(
                        {
                          ...edited,
                          [event.target.id]: [...edited[event.target.id].filter((c) => c != category)]
                        }
                      )
                      : category.length && setEdited(
                        {
                          ...edited,
                          [event.target.id]: [...edited[event.target.id], category],
                        }
                      )
                    }
                  />
                </div>
              ))
            }
          </div>
        

        </div>
      
      </form>

      <div>
        <button type='submit'> ¡Terminar edición! </button>
      </div>

    </>
  );
};

export default EditProduct;
