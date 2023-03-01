import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

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
    </div>
  );
};
export default NavButtons;
