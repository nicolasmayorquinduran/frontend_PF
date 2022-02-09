import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const NavBarCart = () => {
  const cartItems = useSelector(
    (state) =>
      state.actualUser?.hasOwnProperty("carts") &&
      state.actualUser.carts[state.actualUser.carts.length - 1].productCart
        .length
  );
  console.log(cartItems);
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
