import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetails } from '../../redux/actions/products';


export default function DetailsProduct () {

    const product = useSelector((state) => state.productsReducer.productDetails);
    console.log(product);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails())
    }, [dispatch]);


    return (
        <div>

            <Link>
                <button > Carrito </button>
            </Link>

            <div>
                { 
                    typeof product === 'object' ?
                        
                        <div key = {product.id}>

                            <div >                               
                                <img
                                    src = {product.images[0]}
                                    alt = "Not found"   
                                />
                                <img 
                                    src = {product.images[1]}
                                    alt = "Not found" 
                                />
                                <img 
                                    src = {product.images[2]}
                                    alt = "Not found" 
                                />
                                <img 
                                    src = {product.images[3]}
                                    alt = "Not found" 
                                />
                            </div>

                        
                        </div>
                    
                    : <h3>Error 404 Not Found</h3>
                }
            </div>
        
        </div>
    )
};