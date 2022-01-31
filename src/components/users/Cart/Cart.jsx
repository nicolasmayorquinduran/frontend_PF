import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatMoney } from "accounting";
import s from "./Cart.module.css";
import axios from "axios";

export default function Cart() {
  const [payUrl, setPayUrl] = useState("");
  const [cart, setCart] = UseLocalStorage("products", []);
  useEffect(
    () =>
      axios
        .post("http://localhost:3001/checkout", {
          title: "title",
          unit_price: "300",
          quantity: "3",
        })
        .then((res) => setPayUrl(res.data)),
    []
  );
  console.log(payUrl);
  const User = JSON.parse(localStorage.getItem("user"));
  const idUser = !User ? null : User.idUser;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDeleteItem = (e) => {
    cart.map((e) => e.id !== "3");
    console.log("eliminado", cart);
    Swal.fire({
      icon: "success",
      text: "Producto eliminado!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const deleteAllCart = (e) => {
    e.preventDefault();
    localStorage.clear();
    Swal.fire({
      icon: "success",
      text: "Carriro eliminado!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  function getTotalAmount() {
    let prices = 0;
    let qtys = 0;
    prices += Number(cart.map((e) => e.price));
    console.log(prices);
    qtys += Number(cart.map((e) => e.price));
    let total = prices * qtys;
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
      name: "Quantity",
      selector: (row) => (
        <input
          name="amount"
          type="number"
          min={1}
          max={100}
          value={row.qty}
          onChange={console.log("handlerChangeAmount")}
        ></input>
      ), //row.amount,
      //sortable: true
    },

    {
      name: "Amount",
      selector: (row) => formatMoney(row.price * row.qty),
      sortable: true,
    },

    {
      cell: (row) => {
        return (
          <abbr title="Delete Item">
            <button className={s.btnDel} id={row.id} onClick={handleDeleteItem}>
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
        <a href={payUrl}>checkout</a>
        <DataTable
          className={s.table}
          columns={columns}
          data={cart}
          pagination
          paginationComponentOptions={optionPagination}
          actions
        >
          {" "}
        </DataTable>
      </div>
      <div>
        <div className={s.amount}>Total Amount: {getTotalAmount()}</div>
      </div>

      <div className={s.btn_container}>
        <button className={s.btn}>
          <Link to="/">
            <span>GO SHOP MORE</span>
          </Link>
        </button>
        {/* {idUser?  */}
        <button className={s.btn} onClick={deleteAllCart}>
          CLEAR ALL CART
        </button>
        {/*                <button className={s.btn}><Link to='/checkout'><span>GO TO CHECKOUT</span></Link></button>
         */}{" "}
        {/* : null} */}
        <form>
          <input type="hidden" name="title" value="Baheera’s Winter Jacket " />
          <input type="hidden" name="price" value="20000" />
          <input type="hidden" name="quantity" value="5" />
          <input type="submit" value="GO TO CHECKOUT" className={s.btn} />
        </form>
      </div>
    </>
  );
}
