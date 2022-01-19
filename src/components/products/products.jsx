import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/products";
import { Container } from "../../globalStyles";

import Product from "./product";
import Paginado from '../Paginado/Paginado.jsx';

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.productsReducer.products);
  useEffect(() => dispatch(getProducts()), [dispatch]);

  //Estados locales para el paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const indexOfLastProduct = currentPage*productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = allProducts.slice(indexOfFirstProduct,indexOfLastProduct);
  const paginado = (pageNumber)=>{setCurrentPage(pageNumber)};
  //----------------------------------------------------------------------------------
  
  console.log(allProducts);

  return (
    <div>
      <Container>
      {
        currentProduct?.map(product=>{
          return(
            <div>
              <Product 
               img={product.img}
               name={product.name}
               price={product.price} 
              />
            </div>
          )
        })
      }
      </Container>
      <Paginado 
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
      />
    </div>
  );
};

export default Products;
