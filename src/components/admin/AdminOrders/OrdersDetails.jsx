import React from 'react';

// Components:
import Product from '../../users/products/product';
import { Container } from '../../../globalStyles'


const OrdersDetails = ({ productsOrder }) => {

    return (
        <Container>

            {
                productsOrder?.map((prod) => (
                    
                    <Product
                        name={prod.name}
                        unids={Object.keys(prod.stock).reduce((acc, element) => acc += Number(prod.stockSelected[element]), 0 )}
                        price={prod.price}
                        amount={Object.keys(prod.stock).reduce((acc, element) => acc += Number(prod.stockSelected[element]), 0 ) * prod.price}
                        img={prod.img}
                    />
                
                ))
            }  

        </Container>
  
    )

};


export default OrdersDetails