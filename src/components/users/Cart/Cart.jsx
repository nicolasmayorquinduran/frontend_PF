import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {getUserCart,deleteAllCart,deleteProductCart} from "../../../redux/actions/products";
import {getActualUser} from "../../../redux/actions/users";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatMoney } from "accounting";
import s from "./Cart.module.css";
import axios from "axios";

export default function Cart() {
    const [cart, setCart] = UseLocalStorage('cart', [])
    const dispatch = useDispatch();
    const User = useSelector((store) => store.actualUser);
    const idUser = !User ? null : User.UsersId;
    const carrito = useSelector((store) => store.cart)
    
    const [user, setUser] = useState({
      email: "",
      name: "",
      address: "",
      carts: []
    })

    useEffect(() => {
      setUser({
        email: User.email,
        name: User.name,
        carts: User.carts
      })
      dispatch(getUserCart(User.email));
      
    }, [User, dispatch])
    
    // useEffect(() => {
    //     dispatch(getProductsCartUser(idUser)); 
    // }, [dispatch]);  
    const handleDeleteItem = (e) => {
      // e.preventDefault();
      dispatch(deleteProductCart(carrito.CartId, e.target.name))
      Swal.fire({
        icon: 'success',
        text: 'Producto eliminado!',
        showConfirmButton: false,
        timer: 3000
      })
    }

    const handleDeleteAllCart = (e) => {
      // localStorage.clear()
      dispatch(deleteAllCart(carrito.CartId))
      Swal.fire({
        icon: 'success',
        text: 'Carriro eliminado!',
        showConfirmButton: false,
        timer: 3000
      })
    }

  // function getTotalAmount() {
  //   let prices = 0;
  //   let qtys = 0;
  //   prices += Number(cart.map((e) => e.price));
  //   console.log(prices);
  //   qtys += Number(cart.map((e) => e.price));
  //   let total = prices * qtys;
  //   return total;
  // }

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

  const columns = [
    {
      name: "Image",
      grow: 0,
      sortable: true,
      cell: (row) => (
        <img height="84px" width="56px" alt={row.name} src={row.img[0]} />
      ),
    },
    {
      name: "Name",
      cell: (row) => <Link to={`/detail/${row.id}`}>{row.name}</Link>,
      sortable: true,
    },

    {
      name: "Price",
      selector: (row) => formatMoney(row.price),
      sortable: true,
    },

    {
      name: "Quantity",
      selector: (row) => (
        <input
          name="amount"
          type="number"
          min={1}
          max={100}
          // value={row.qty}
          onChange={console.log("handlerChangeAmount")}
        ></input>
      ), //row.amount,
      //sortable: true
    },

    // {
    //   name: "Amount",
    //   selector: (row) => formatMoney(row.price * row.qty),
    //   sortable: true,
    // },

    {
      cell: (row) => {
        return (
          <abbr title="Delete Item">
            <button className={s.btnDel} name={row.ProductId} onClick={handleDeleteItem}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </abbr>
        );
      },
      ignoreRowClick: true,
      allowFlow: true,
      button: true,
    },
  ];

    
    const optionPagination = {
        rowsPerPageText: "Files per Page",
        rangesSeparatorText: "of",
        selectAllRowsItem: true,
        selectAllRowsItemText: "All",
        responsive: true
    } 
    return (
      <>
        <div className={s.container}>
        <h1>Shopping Cart</h1>
        <DataTable
          className={s.table}
          columns={columns} 
          data={carrito.productCart} 
          pagination
          paginationComponentOptions={optionPagination}
          actions
        >
          {" "}
        </DataTable>
      </div>
      <div>
        <div className={s.amount}>Total Amount: </div>
      </div>

      <div className={s.btn_container}>
        <button className={s.btn}>
          <Link to="/">
            <span>GO SHOP MORE</span>
          </Link>
        </button>
        {/* {idUser?  */}
        <button className={s.btn} name={carrito.CartId} onClick={handleDeleteAllCart}>
          CLEAR ALL CART
        </button>
        <Link to="/checkout">
          <input type="submit" value="GO TO CHECKOUT" className={s.btn} />
        </Link>
      </div>
    </>
  );
}
