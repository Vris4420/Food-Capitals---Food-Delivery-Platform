import { useContext } from "react";
import "./MenuItem.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../context/StoreContext";

export function MenuItem({ id, name, price, description, image }) {
  const {cartItems, addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={url+"/images/"+image} alt="img" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.plus}
            alt="img"
          />
        ) : (
          <div className="food-item-counter">
            {/* <img onClick={() => setItemCount(prev => prev - 1)} alt="img"/> */}
            <div onClick={() => removeFromCart(id)}>
              <FontAwesomeIcon icon={faMinus} style={{ color: "#f90101" }} />
            </div>
            <p>{cartItems[id]}</p>
            {/* <img onClick={() => setItemCount(prev => prev + 1)}  alt="img"/> */}
            <div onClick={() => addToCart(id)}>
              <FontAwesomeIcon icon={faPlus} style={{ color: "#228b22" }} />
            </div>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          {/* <img /> */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}
