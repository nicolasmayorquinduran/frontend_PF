import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProductsAdm } from "../../../redux/actions/products.js";
import { getCategories } from "../../../../src/redux/actions/categories.js";
import { getProducts } from "../../../redux/actions/products.js";
import s from "./AdminProduct.module.css"

const AdminProducts = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const categorie = useSelector((state) => state.categoryReducer.categories);
  let productsAll = useSelector((state) => state.productsReducer.allProducts);
 
  productsAll = productsAll.slice(0, 8);
  console.log("SLICE", productsAll);

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
      category: categorie,
      stock: count,
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
        category: [...products.category, event.target.value],
      }
    )

    event.preventDefault();  
  };


  /* ---------------- COUNTER STOCK ---------------- */
  const handleSubtractOne = () => {

    products.stock >= 0 && 
    setProducts(
      {
        ...products, stock: products.stock -1
      }
    )
  };

  const handleAddOne = () => {
    setProducts(
      {
        ...products, stock: products.stock +1
      }
    )
  };
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
    
      <form onSubmit={handleSubmit}> 
        
        <div>
         
          <h3> Portada </h3>

          <div className={s.imgPortada}>
            <img src="https://img.archiexpo.es/images_ae/photo-g/49577-12858130.webp" width="200px" height="300px" alt="img not found" />
            <button className={s.buttonEditImg}>
              <img src="" alt="" />
            </button>

            <img src="https://img.archiexpo.es/images_ae/photo-g/49577-12858130.webp" width="200px" height="300px" alt="img not found" />
            <button className={s.buttonEditImg} >
              <img src="" alt="" />
            </button>

            <img src="https://img.archiexpo.es/images_ae/photo-g/49577-12858130.webp" width="200px" height="300px" alt="img not found" />
            <button className={s.buttonEditImg}>
              <img src="" alt="" />
            </button>

            <img src="https://img.archiexpo.es/images_ae/photo-g/49577-12858130.webp" width="200px" height="300px" alt="img not found" />
            <button className={s.buttonEditImg}>
              <img src="" alt="" />
            </button>
          </div>
          
        </div>


        <div>
          <h3> Nombre </h3>
          <input onChange={handleChange} type='text' name="name" value={products.name} autoComplete="off" required />

          <h3> Precio </h3>
          <input onChange={handleChange} type='Number' min="0" name="price" value={products.price} autoComplete="off" required />
        </div>


        <div>
          <h3> Categorías </h3>
          <select onClick={handleSubmitCategory} name="category" autoComplete="off" required >
            {
              categorie?.map((c) => <option> {c} </option>)
            }
          </select>
        </div>


        <div>
          <h3> Stock </h3>
          <button onClick={handleSubtractOne}>-1</button>
            <p>{products.stock}</p>
          <button onClick={handleAddOne}>+1</button>
        </div>

        <div>
          {
            productsAll?.map((image) => (
              <div>
                <img src={image.img} width="200px" height="300px" alt="img not found" />
                <button>
                  <img src="" alt="" />
                </button>
              </div>
            ))
          }
        </div>
      
      </form >

    </div>
  );
};

export default AdminProducts;
