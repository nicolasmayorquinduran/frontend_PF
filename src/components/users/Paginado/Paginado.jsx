import React from 'react';
// import '../styles/Paginado.css';

//-----------------------------------------------------------------------------------------------------------------

const Paginado =({productsPerPage,allProducts,paginado})=>{
  const pageNumbers=[];
  
  for(let i=1; i<=Math.ceil(allProducts/productsPerPage); i++){
    pageNumbers.push(i)
  }
  return(
    <nav>
      <ul className='paginado'>
        {
          pageNumbers && pageNumbers.map(number=>(
          <li className='number' key={number}>
            <button onClick={()=>paginado(number)}>{number}</button>
          </li>
          ))  
        }
      </ul> 
    </nav>
  )
}

export default Paginado; 