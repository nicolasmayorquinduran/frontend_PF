import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct,getProducts } from "../../../redux/actions/products";
import "./productdetails.css";
import Cart from "../Cart/Cart";
import { useParams } from "react-router-dom";
import { formatMoney } from "accounting";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const handleAddCart = ()=>{
    dispatch()
  }


 

  return (
    <div>
      <hr></hr>
        <div className='container'>

          <div className="imgDetail">

            <div className="imgContainer">
              <div className="bigImg">
                <img src={product.img} alt="big" />
              </div>
              <div className="smallImg">
                <img id='s' src={product.img} alt="small" />
                <img id='s' src={product.img} alt="small" />
                <img id='s' src={product.img} alt="small" />
                <img id='s' src={product.img} alt="small" />
              </div>
            </div>

            <div className="productDetail">
              <h2> {product.name} </h2>
              <h3 id="price"> {formatMoney(product.price) } </h3>
              <input type="number" name="qty"/>
              <br></br>
              <h4 id="categories"> Category: {product.category} </h4>
              <h4>Size:  {product.detail.size}</h4>
              <h4>Color: {product.detail.color.toLowerCase()}</h4>
              <h4>Cloth Type: {product.additionalInformation[0].lining_material}</h4>
              <h4>Manufacturer: {product.additionalInformation[0].manufacturer}</h4>
              <h4>Fit: {product.additionalInformation[0].fit}</h4>
              <button img={product.img} name={product.name} price={product.price}>
                Add to cart <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </div>
          </div>

          <div className='review'>
              <h4>REVIEWS</h4>
              <br/>
              <br/>
              {(product.reviews.map(r=>{
                return(
                  <div>
                    <h4>{r.usuario}</h4>
                    <div>
                      <p>{r.timestamps}</p>
                      <p>{r.comment}</p>
                    </div>
                  </div>
                )
              }))}
          </div>
        </div> 
    </div>
  );
}
