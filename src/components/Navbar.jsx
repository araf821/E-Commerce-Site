import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar-component">
      <div className="nav-content">
        <div className="nav-header">
          <Link to="/">
            <h1>BrandName</h1>
          </Link>
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-buttons">
          <button>
            <FaShoppingCart />
          </button>
          <button>
            <FaUserAlt />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
