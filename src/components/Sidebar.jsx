import { Link } from "react-router-dom";
import NavButtons from "./NavButtons";
import { FaTimes } from "react-icons/fa";
import { links } from "../data";

const Sidebar = () => {
  const open = true;

  return (
    <div className="sidebar-container">
      <aside className={`${open ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <h1>
            <Link to="/">
              Brand
              <span>Name</span>
            </Link>
          </h1>
          <button className="close-btn">
            <FaTimes />
          </button>
        </div>

        <ul className="links"></ul>
      </aside>
    </div>
  );
};
export default Sidebar;
