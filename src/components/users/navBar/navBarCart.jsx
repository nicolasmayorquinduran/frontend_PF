import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const NavBarCart = () => {
  const cartItems = useSelector(
    (state) =>
      state.cart.hasOwnProperty("productCart") && state.cart.productCart
  );

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
