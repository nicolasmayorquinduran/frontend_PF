import React from 'react'
import './index.css'
import { useState } from 'react'
import AdminCategories from './AdminCategory/AdminCategories'
import AdminUsers from './AdminUsers/AdminUsers'
import AdminrOrders from './AdminOrders/AdminOrders'
import AdminProducts from './AdminProducts/AdminProducts'
import Products from '../users/products/products'
import AdminOrders from './AdminOrders/AdminOrders'


/* componente prestacional del administrador con un menú de opciones disponibles (productos, pedidos, categorías y usuarios), debe renderizar determinado componente según la pestaña que se clickee */

function Index() {
  const [local, setLocal] = useState('')

  function handleClick(e) {
    return setLocal(e.target.name)
  }

  return (
    <div>
      <div>
        <form className="formUser">

          <div className='imageUser'>
          
          </div>

          <div className='formName'>
          <label htmlFor="name">Nombre</label>
          <input id="" type="text" />
          </div>

          <div className='formCorreo'>
          <label htmlFor="name">Correo</label>
          <input id="" type="email" />
          </div>
          
          <div className='formPais'>
          <label htmlFor="name">Pais</label>
          <input id="" type="text" />
          </div>
          
          <div className='formCiudad'>
          <label htmlFor="name">Ciudad/ Provincia</label>
          <input id="" type="text" />
          </div>

          <div className='formDireccion'>
          <label htmlFor="name">Dirección</label>
          <input id="" type="text" />
          </div>

          <div className='formBoton'>
            <button>Guardar</button>
          </div>
        </form>
      </div>

      <div id="menu">
        <ul>
          <li>
            <a href="#" onClick={handleClick} name="a">
              Productos
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClick} name="b">
              Pedidos
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClick} name="c">
              Categorías
            </a>
          </li>
          <li class="item-r">
            <a href="#" onClick={handleClick} name="d">
              Usuarios
            </a>
          </li>
        </ul>
        <div>
          {(local === 'a' && <AdminProducts />) ||
            (local === 'b' && <AdminrOrders />) ||
            (local === 'c' && <AdminCategories />) ||
            (local === 'd' && <AdminUsers />)}
        </div>
      </div>
    </div>
  )
}

export default Index
