import { assets } from "../../assets/assets";
import "./Navbar.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faBagShopping, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"; // Correct import for the magnifying glass icon
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

export function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount,token, setToken} = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Food Capitals" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          LinkClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      <div className="navbar-right">
        <FontAwesomeIcon icon={faSearch} size="lg" />
        <Link to="/cart" className="navbar-search_icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profilePic} alt="profile" />
            <ul className="navbar-profile-dropdown">
              <li>
               <FontAwesomeIcon icon={faBagShopping} id="bagShopping" />
                <p>Orders</p></li>
              <hr/>
              <li>
               <FontAwesomeIcon icon={faRightFromBracket} id="rightFromBracket" />
                <p>Logout</p></li>
              <hr/>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
