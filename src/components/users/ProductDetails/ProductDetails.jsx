import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct,getProducts } from "../../../redux/actions/products";
import "./productdetails.css";
import Cart from "../Cart/Cart";
import { useParams } from "react-router-dom";
import { formatMoney } from "accounting";

export default function ProductDetails() {
  const {id}=useParams()
  const dispatch = useDispatch();
  const product = useSelector((store) => store.productsReducer.products.find(e=>e.id == id));
  useEffect(() =>{
      dispatch(getProducts())
      dispatch(detailsProduct())
    },[dispatch]
  );
  console.log("PRODUCTO FILTRADO",product)


 

  return (
    <div>
      <hr></hr>
         <div>
          {" "}
          <div className="imgAndDetail">
            <div className="imgContainer">
              <div className="bigImg">
                <img src={product.img} alt="big" />
              </div>
              <div className="smallImg">
                <img src={product.img} alt="small" />
                <img src={product.img} alt="small" />
                <img src={product.img} alt="small" />
                <img src={product.img} alt="small" />
              </div>
            </div>
            <div className="productDetail">
              <h3> {product.name} </h3>
              <h3 id="price"> {formatMoney(product.price) } </h3>
              <br></br>
              <p id="categories"> Category: {product.category} </p>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
          TALLE:
          <p>
            {product.detail.size}
          </p>
          REVIEWS:
          INFO ADICIONAL:
        </div> 
    </div>
  );
}
