import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserCart } from "../../../redux/actions/products";

export const NavBarCart = () => {
  // const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) =>
      state.cart.hasOwnProperty("productCart") && state.cart.productCart
  );

  // useEffect(() => dispatch(getUserCart()), [dispatch]);

  return (
    <>
      <div className="logged">
        <Link id="navLink" to="/cart">
          <FontAwesomeIcon icon={faCartPlus} />
          {cartItems?.length}
        </Link>
      </div>
    </>
  );
};
