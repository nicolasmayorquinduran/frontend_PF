// import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  getUserCart,
  deleteAllCart,
  deleteProductCart,
} from "../../../redux/actions/products";

// import { getActualUser } from "../../../redux/actions/users";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatMoney } from "accounting";
import s from "./Cart.module.css";
// import axios from "axios";
 
export default function Cart() {
  const navigate = useNavigate();

  const email = window.localStorage.getItem("userEmail");
  const carrito = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const User = useSelector((store) => store.actualUser);
  const idUser = !User ? null : User.UsersId;
  console.log("cart", carrito);
  console.log("user", email);

  let products = carrito?.hasOwnProperty("productCart")
    ? carrito.productCart
    : [];
  console.log("products", products)
  useEffect(() => {
    dispatch(getUserCart(email));
  }, [dispatch, email]);

  

  const handleDeleteItem = (e, ProductId) => {
    e.preventDefault();
    dispatch(deleteProductCart(carrito.CartId, ProductId));
    
    Swal.fire({
      icon: "success",
      text: "Producto eliminado!",
      showConfirmButton: false,
      timer: 3000,
    });
    dispatch(getUserCart(email))
  };

  const handleDeleteAllCart = (e) => {
    localStorage.clear()
    dispatch(deleteAllCart(carrito.CartId));
    Swal.fire({
      icon: "success",
      text: "Carrito eliminado!",
      showConfirmButton: true,
      timer: 3000,
    });
  };

  function getTotalAmount() {
    let prices = 0;
    let qtys = 0;
    prices += (products.map((e) => e.price));
    console.log(prices);
    qtys += Number(Object.values(products.map(e=>e.stock)));
    let total = prices * qtys;
    console.log(total)
    return total;
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

  const columns = [
    {
      name: "Image",
      grow: 0,
      sortable: true,
      cell: (row) => (
        <img height="84px" width="56px" alt={row.name} src={row.img} />
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
      name: "Talles",
      selector: (row) => (
        // <input
        //   name="amount"
        //   type="number"
        //   min={1}
        //   max={100}
        //   value={Object.keys(row.stock)}
        //   // onChange={console.log("handlerChangeAmount")}
        // ></input>
        <p>{Object.entries(row.stock)}</p>
      ), //row.amount,
      sortable: true
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
            <button
              className={s.btnDel}
              value={row.ProductId}
              onClick={(e) => handleDeleteItem(e, row.ProductId)}
            >
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
    responsive: true,
  };
  return (
    <>
      <div className={s.container}>
        <h1>Shopping Cart</h1>
        {products.length? (
          <DataTable
            className={s.table}
            columns={columns}
            data={products}
            pagination
            paginationComponentOptions={optionPagination}
            actions
          >
            {" "}
          </DataTable>
        ): <h4>No hay ningun producto en tu carrito</h4>}
      </div>
      <div>
        <div className={s.amount}>Total Amount:{getTotalAmount()} </div>
      </div>

      <div className={s.btn_container}>
        <button className={s.btn}>
          <Link to="/">
            <span>GO SHOP MORE</span>
          </Link>
        </button>
        {/* {idUser?  */}
        <button
          className={s.btn}
          name={carrito?.CartId}
          onClick={handleDeleteAllCart}
        >
          CLEAR ALL CART
        </button>
        <Link to="/checkout">
          <input
            type="submit"
            value="GO TO CHECKOUT"
            className={s.btn}
            onClick={() =>
              navigate(
                "https://stackoverflow.com/questions/69868956/how-to-redirect-in-react-router-v6"
              )
            }
          />
        </Link>
      </div>
    </>
  );
}
