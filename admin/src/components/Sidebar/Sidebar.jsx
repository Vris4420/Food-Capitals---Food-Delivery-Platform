import "./Sidebar.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <div>
            <FontAwesomeIcon icon={faShoppingBag} />
          </div>
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <FontAwesomeIcon icon={faCirclePlus} />

          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <FontAwesomeIcon icon={faCirclePlus} />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
}
