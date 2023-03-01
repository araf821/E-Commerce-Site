import { Link } from "react-router-dom";
import NavButtons from "./NavButtons";
import { FaTimes } from "react-icons/fa";
import { links } from "../data";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false)

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
          <button className="close-btn" onClick={() => setOpen(false)} >
            <FaTimes />
          </button>
        </div>

        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <NavButtons />
      </aside>
    </div>
  );
};
export default Sidebar;
