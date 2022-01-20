import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsProduct } from '../../redux/actions/products';
import { Children } from "../../../globalStyles";


export default function ProductDetails () {

    const product = useSelector((state) => state.productsReducer.productsDetails )

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(detailsProduct(id))
    }, [dispatch, id]);


    return (
    
        <div>
            <Children>
                
                <div>
                    <Link to = "/carrito">
                        CARRITO!
                    </Link>
                </div>

                <div>
                    { 
                        typeof product === 'object' ?

                            <div>

                                <div>
                                    <img
                                        src = {product.images[0].img1}
                                        alt = "Not found"   
                                    />
                                    <img
                                        src = {product.images[1].img2}
                                        alt = "Not found"   
                                    />
                                    <img
                                        src = {product.images[2].img3}
                                        alt = "Not found"   
                                    />
                                    <img
                                        src = {product.images[3].img4}
                                        alt = "Not found"   
                                    />
                                </div>

                                <div>
                                    <p> {product.nameProduc} </p>
                                    <p> {product.productType} </p>
                                    <p> {product.price} </p>
                                    <p> {product.description} </p>
                                </div>

                                <div>
                                    <p>{product.reviews[0].usuario}</p>
                                    <p>{product.reviews[0].timestamps}</p>
                                    <p>{product.reviews[0].comment}</p>

                                    <p>{product.reviews[1].usuario}</p>
                                    <p>{product.reviews[1].timestamps}</p>
                                    <p>{product.reviews[1].comment}</p>

                                    <p>{product.reviews[2].usuario}</p>
                                    <p>{product.reviews[2].timestamps}</p>
                                    <p>{product.reviews[2].comment}</p>
                                </div>

                                <div>
                                    <p>{product.Additional_Information[0].manufacturer}</p>
                                    <p>{product.Additional_Information[0].fit}</p>
                                    <p>{product.Additional_Information[0].lining_material}</p>
                                    <p>{product.Additional_Information[0].Occasion}</p>
                                </div>
                            
                            </div>         

                        : <h3> Error 404 Not Found </h3>
                    }
                </div>

            </Children>
        </div>
    )
};