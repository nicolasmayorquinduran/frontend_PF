import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions:
import { getCategories } from "../../../../src/redux/actions/categories.js";
import { getProducts } from "../../../redux/actions/products.js";

// Components:
import EditProduct from "./EditProduct.jsx";
import NewProduct from "./NewProduct.jsx";

// Styles:
import "./AdminProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const AdminProducts = () => {
  
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(
    {
      name: "",
      price: "",
      ranking: "",
      img: "",
      category: "",
    }
  );

  useEffect(() => {
    
    dispatch(getCategories());
    dispatch(getProducts());
  
  }, [dispatch, selected]);

  let productsAll = useSelector((state) => state.productsReducer.allProducts);
  // console.log(selected);

  return (
    <div>
      
      {
        selected.name.length 
        ? ( <EditProduct product={selected} /> ) 
        : ( <NewProduct /> )
      }

      <div className="Container">
        
        <div className="cardAdmin">
          
          <div className="cardsProducts">
            
            <img
              src="https://img.archiexpo.es/images_ae/photo-g/49577-12858130.webp"
              width="160px"
              height="240px"
              alt="img not found"
            />
            <div className="crearNuevo">
              <strong>Crear Nuevo</strong>
              <FontAwesomeIcon icon={faPlusSquare} />
            </div>
          
          </div>
        
        </div>
        
        {
          productsAll.map((product) => (
            <div
              className="cardsProducts"
              onClick={() => setSelected(
                {
                  name: product.name,
                  price: product.price,
                  ranking: product.ranking,
                  img: product.img,
                  category: product.category,
                }
              )}
            >
              <img
                src = {product.img[0]}
                width="160px"
                height="200px"
                alt="img not found"
              />

              <div className="cardData">
              
                <div>
                  <h5>{product.name}</h5>
                </div>
              
                <div className="price">
                  <strong>{product.price}</strong>
                </div>
              
                <div className="category">
                  <p>{product.category}</p>
                </div>
              
                <div className="iconCard">
                  <FontAwesomeIcon icon={faPenSquare} width="50px" />
                </div>
            
              </div>
          
            </div>
          
          ))
        }
      
      </div>
    
    </div>
  );

};

export default AdminProducts;
