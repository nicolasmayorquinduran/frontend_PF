import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Actions:
import { detailsProduct } from "../../../redux/actions/products";
import { getCategories } from "../../../redux/actions/categories";

// Styles:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faPlusSquare, faWindowClose } from "@fortawesome/free-solid-svg-icons";


const EditProduct = ({ product, setProduct }) => {

  // console.log(product)

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);


  // PARA EL RENDERIZADO (INPUT DE INFORMACION ADICIONAL):
  let infoAdditional = [];
  
  for(const prop in product.additionalInformation) {
    infoAdditional = [ ...infoAdditional, {title: prop, data: product.additionalInformation[prop]} ]
  };
  // console.log(infoAd)

  // PARA EL RENDERIZADO (INPUT DE STOCK):
  let stocksAll = []

  for(const prop in product.stock) {
    stocksAll = [ ...stocksAll, {size: prop, stock: product.stock[prop]} ]
  };
  // console.log(stocksAll)


  useEffect(() => {
    dispatch(detailsProduct(product.ProductId));
    dispatch(getCategories());
  }, [dispatch, product, setProduct]);
  

  const handleEdited = (event) => {
    Array.isArray(product[event.target.id])
    ? product[event.target.id].includes(event.target.value)
      ? setProduct(
        {
          ...product,
          [event.target.id]: [...product[event.target.id].filter((c) => c != event.target.value)],
        }
      )
      : event.target.value.length && setProduct(
        {
          ...product,
          [event.target.id]: [...product[event.target.id], event.target.value],
        }
      )
    : setProduct({ ...product, [event.target.id]: event.target.value });
  };


  return (
    <>
      <h2> Editar datos del Producto </h2>
      <form className="new">
        
        <div className="partsEdit">
          <div className=" editImage">
            
            <div className="coverImage">
              <h4> Imagen </h4>
              <img src={product.img[0]} />
            </div>
            
            {/* <FontAwesomeIcon className="icon" icon={faPenSquare} /> */}
          
          </div>
        </div>

        <div className="partsEdit formNew">
          <div className="nombrePrecio">
            <h4> Nombre </h4>
            <input
              id="name"
              value={product.name}
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleEdited}
              required
            />

            <h4> Precio </h4>
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
            <h4> Selecciona una Categoría </h4>

            <select
              id="categories"
              autoComplete="off"
              required
              onChange={handleEdited}
            >
              
              {
                categories.map((category) => (
                  <option value={category.name} id={category.CategoriesId}> {category.name} </option>
                ))
              }
            </select>
          </div>

          {/* <div>
            <label> Categorías del producto: </label>
            {edited.categories.map((category) => (
              <div style={{ marginBottom: "20px" }}>
                <label>{category.name}</label>
                <FontAwesomeIcon
                  icon={faWindowClose}
                  id="categories"
                  onClick={(event) =>
                    edited[event.target.id].includes(category)
                      ? setProduct({
                          ...edited,
                          [event.target.id]: [
                            ...edited[event.target.id].filter(
                              (c) => c != category
                            ),
                          ],
                        })
                      : category.length &&
                        setProduct({
                          ...edited,
                          [event.target.id]: [
                            ...edited[event.target.id],
                            category,
                          ],
                        })
                  }
                />
              </div>
            ))}

          </div> */}


          <h4> Descripción </h4>
          <textarea
            onChange={handleEdited}
            type="resume"
            name="description"
            value={product.description}
            autoComplete="off"
            required
          />


          <div className="stocksNewProduct">
            
            <h4> Stocks </h4>
              {
                stocksAll.map((props) => (
                  <div>
                    
                    <label>{props.size}:</label>
                    <input value={props.stock} type="number" min="0"/>

                  </div>
                ))
              }
          </div> {/* {...product.stock, [props.size]: event.target.value } */}

          
          <h4> Información addicional </h4>
          {
            infoAdditional.map((props) => (
              <div>
                    
                <label> {props.title}: </label>
                <input value={props.data} type="text"/>

              </div>
            ))
          }


          <button type="submit" onClick={async () => await axios.put("/products", product)}> ¡Terminar edición! </button>
        
        </div>

      
      </form>
    </>
  );
};

export default EditProduct;
