import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const NavButtons = () => {
  const { total_items } = useCartContext();

  return (
    <div className="nav-buttons">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      <button className="auth-btn">
        Login
        <FaUserAlt />
      </button>
    </div>
  );
};
export default NavButtons;
