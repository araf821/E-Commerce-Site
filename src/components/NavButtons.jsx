import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useProductContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const NavButtons = () => {
  const { closeSidebar } = useProductContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <div className="nav-buttons">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>

      {!myUser ? (
        <button className="auth-btn" onClick={loginWithRedirect}>
          Login
          <FaUserAlt />
        </button>
      ) : (
        <button
          className="auth-btn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
          <FaUserAlt />
        </button>
      )}
    </div>
  );
};
export default NavButtons;
