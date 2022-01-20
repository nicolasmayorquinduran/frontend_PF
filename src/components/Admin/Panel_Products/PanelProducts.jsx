import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPanelAdm } from '../../../redux/actions/products.js';

/*
TAREA: Componente panel de administrador, donde se puede agregar
un producto al estado gobal de redux para que se añada a la página 
que renderiza los productos.
*/


const PanelProductsAdmin = () => {

    return (
        <div>
            
            <h3> Portada </h3>

            <div>
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
                <input type="text" />

                <h3> Precio </h3>
                <input type="text" />
            </div>

            <div>
                <h3> Categorías </h3>
                <button> Vestidos </button>
                <button> Camisones </button>
                <button> Buzos </button>
                <button> Playeras </button>
            </div>

            <div>
                <h3> Stock </h3>
                <input type="text" />
            </div>

            <div>
                <h3> Ultimas Compras </h3>
                <h4> Comprador </h4>
                <h5> Pepito Perez </h5>
                <h5> Vendido el 15 de enero de 2021 </h5>
                <h5> Pepito Perez </h5>
                <h5> Vendido el 15 de enero de 2021 </h5>
            </div>

            <div>
                <h3> Todos los productos </h3>
                <select name="" id=""> Filtros </select>
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

        </div>
    );

};


export default PanelProducts;
