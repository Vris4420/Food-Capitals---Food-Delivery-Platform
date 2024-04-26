import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'

export function Cart() {
  const { cartItems, menuItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {menuItems.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p onClick={() => removeFromCart(item.id)} className="cross">
                  <FontAwesomeIcon icon={faX} />
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
                <div className="cart-total-detials">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cart-total-detials">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()===0 ? 0 : 2}</p>
                </div>
                <hr/>
                <div className="cart-total-detials">
                    <b>Total</b>
                    <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+2}</b>
                </div>
            </div>
            <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
        </div>

        <div className="cart-promocode">
            <div>
                <p>If you have a promo code, Enter here</p>
                <div className="cart-promocode-input">
                    <input type="text" placeholder="Promo code"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}
