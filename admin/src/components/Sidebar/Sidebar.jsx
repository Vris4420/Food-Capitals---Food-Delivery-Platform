import "./Sidebar.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-option">
          <div>
            <FontAwesomeIcon icon={faShoppingBag} />
          </div>
          <p>Add Items</p>
        </div>
        <div className="sidebar-option">
          <FontAwesomeIcon icon={faCirclePlus} />

          <p>List Items</p>
        </div>
        <div className="sidebar-option">
          <FontAwesomeIcon icon={faCirclePlus} />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
}
