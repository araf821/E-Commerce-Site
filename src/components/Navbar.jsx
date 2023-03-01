import { Link } from "react-router-dom";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { links } from "../data";
import NavButtons from "./NavButtons";

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
          <NavButtons />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
