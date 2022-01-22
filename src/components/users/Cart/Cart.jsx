import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";
import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { Link, useNavigate} from 'react-router-dom';
import DataTable from 'react-data-table-component';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatMoney } from 'accounting';
import s from './Cart.module.css'


        

export default function Cart({product}) {
    const [cart, setCart] = UseLocalStorage('products', [])
    console.log(cart)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const products = useSelector(state => state.productsReducer.products);
    const User = JSON.parse(localStorage.getItem("user"));
    const idUser = !User?null:User.idUser;

    // useEffect(() => {
    //     dispatch(getProductsCartUser(idUser)); 
    // }, [dispatch]);  

    const handleDeleteItem = (idproduct) => {
        //e.preventDefault()
        // dispatch(deleteItemFromCart(idproduct, idUser))
        Swal.fire({
            icon: 'success',
            text: 'Producto eliminado correctamente!',
            showConfirmButton: false,
            timer: 3000
          })
    }

    // const handlerChangeAmount = (product,idUser,e) => {
    //     e.preventDefault()
    //     const { value } = e.target;
    //     if (value <= product.stock && value >= 1) {
    //         let auxProducts=products.map(p=>{
    //             if(p.idProduct===product.idProduct){
    //                 return {
    //                     ...p,
    //                     amount:value
    //                 }
    //             }
    //             return p;
    //         })

    //         dispatch(changeAmount(auxProducts, idUser));
    //     };
    // }


    // function handleGoToCheckOut() {
    //     if (idUser && idUser.email?.length) {
    //        navigate(redirige al checkout)
    //     } else {
    //         navigate(redirige al login);
    //     }
    // } 


    // function handleClearCart(e){
    //     e.preventDefault()
    //     dispatch(function que limpia el carrito)
    // }

    // id
    // name
    // price
    // img
    // category
    const columns=[
        {
            name: "Image",   
            grow: 0,
            sortable: true,
            cell: row => <img height="84px" width="56px" alt={row.name} src={row.img[0]} />
        },
        {
            name: "Name",
            cell: row  => <Link to={`/detail/${row.id}`}>{row.name}</Link>,
            sortable: true
        },
    
        {
            name: "Price",
            selector:row => formatMoney(row.price),
            sortable: true
        },

        {
            name: "Quantity",
            selector: row => <input name="amount" type="number" min={1} max={row.stock} value={row.amount} onChange={console.log('handlerChangeAmount')}></input>//row.amount,
            //sortable: true
        },

        {
            name:"Amount",
            selector:row => formatMoney(row.price * row.amount),
            sortable: true
        },

        {
            cell: row => {
            console.log("table data",row.id)
            return <abbr title="Delete Item"><button className={s.btnDel} onClick={()=>handleDeleteItem()}><FontAwesomeIcon icon={faTrashAlt}/></button></abbr>},
            ignoreRowClick: true,
            allowFlow: true,
            button: true 
        },
    ]
    
    const optionPagination = {
        rowsPerPageText: "Files per Page",
        rangesSeparatorText: "of",
        selectAllRowsItem: true,
        selectAllRowsItemText: "All",
        responsive: true
    } 
    return (
      <>
        <button onClick={() => setCart([...cart, product])}>Add to cart</button>
        <div className={s.container}>
        <DataTable 
            className={s.table}
            title ={<h1>My Shopping Cart</h1>} 
            columns = {columns}
            data = {products}
            pagination
            paginationComponentOptions = {optionPagination}
            actions
            > </DataTable>
        </div>
            <div>
                    <div className={s.amount}>
                       Total Amount: {formatMoney(products?.reduce((a, c) => a + c.price*c.amount,0))}
                        
                    </div>
            </div>
              
            <div className={s.btn_container}>
                <button className={s.btn}><Link to='/'><span>GO MORE SHOP</span></Link></button>
            {idUser? 
                <button className={s.btn}><Link to='/checkout/x' onClick={console.log('handleGoToCheckOut')}><span>GO TO CHECKOUT</span></Link></button>
                : null}
                <button className={s.btn} onClick={console.log('handleClearCart')}>CLEAR ALL CART</button>  

            </div>                         
    </>
    )

}