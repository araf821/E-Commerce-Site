import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">0</span>
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
