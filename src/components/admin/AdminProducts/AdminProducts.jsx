import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProductsAdm } from "../../../redux/actions/products.js";

/*
TAREA: Componente panel de administrador, donde se puede agregar
un producto al estado gobal de redux para que se añada a la página 
que renderiza los productos.
*/ 

const redux = [];


const AdminProducts = () => {

  const categories = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch()

  const [count, setCount] = useState(0);

  // INITIAL STATE:
  const [products, setProducts] = useState(
    {
      name: "",
      img: [
        "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-470x632.jpg",
        "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_3-470x632.jpg",
        "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_2-470x632.jpg",
        "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21-470x632.jpg"
      ],
      category: "",
      stock: 1,
      precio: "",
    }
  );

  // INPUTS:
  function handleChange(event) {
    
    setProducts(
      {
        ...products,
        [event.target.name]: event.target.value
      }
    )
  
  };

  function handleSubmitCategory(event) {
    setProducts(
      {
        ...products,
        category: event.target.value,
      }
    )

    event.preventDefault();  
  };

  /* ---------------- COUNTER STOCK ---------------- */
  const handleSubtractOne = () => {
    setCount(count - 1);
  }

  const handleAddOne = () => {
    setCount(count + 1);
  }
  /* ------------------------------------------------ */

  // SUBMIT:
  function handleSubmit(event) {
    // event.preventDefault();
    dispatch(postProductsAdm(products))
    
    setProducts (
      {
        name: "",
        img: "",
        category: "",
        stock: "",
        precio: "",
      }
    )
  };


  return (
    <div>
    
      <form onClick={handleSubmit}> 
        
        <div>
          <h3> Portada </h3>
          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>
        </div>

        <div>
          <h3> Nombre </h3>
          <input onChange={handleChange} type='text' name="name" value={products.name} autoComplete="off" required />

          <h3> Precio </h3>
          <input onChange={handleChange} type='Number' min="0" name="price" value={products.price} autoComplete="off" required />
        </div>

        <div>
          <h3> Categorías </h3>
          <select name="category" onChange = {handleSubmitCategory} >
            {
              categories.map((p, i) => (
                <option key={i} value={p.id}>{p.name}</option>
              ))
            }
          </select>
        </div>

        <div>
          <p> Stock </p>
          <button onClick={handleSubtractOne}>-1</button>
          <button onClick={handleAddOne}>+1</button>
        </div>

        <div>
          <h3> Todos los productos </h3>
          <select name="" id="">
            Filtros
          </select>
        </div>

        <div>
          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>

          <img src="" alt="" />
          <button></button>
        </div>
      
      </form >

      <div>
        <h3> Ultimas Compras </h3>
        <h4> Comprador </h4>
        <h5> Pepito Perez </h5>
        <h5> Vendido el 15 de enero de 2021 </h5>
        <h5> Pepito Perez </h5>
        <h5> Vendido el 15 de enero de 2021 </h5>
      </div>

    </div>
  );
};

export default AdminProducts;
