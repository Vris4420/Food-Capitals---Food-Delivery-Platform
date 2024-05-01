import { createContext, useEffect, useState } from "react";
// import { menuItems } from "../assets/assets";
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = 'http://localhost:4000'
  const [token,setToken] = useState("");
  const [ menuItems, setMenuItems] = useState([])

  async function addToCart(itemId) {
    if (!cartItems[itemId]) {
      setCartItems((prev) => {
        return { ...prev, [itemId]: 1 };
      })
    } else {
      setCartItems((prev) => {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      });
    }
    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  }

  function removeFromCart(itemId) {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  }

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = menuItems.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.error(`Item with ID ${item} not found.`);
        }
      }
    }
    return totalAmount;
  }

  //fetching menuItems from backend
  async function fetchFoodList(){
    const response = await axios.get(url+"/api/food/list")
    setMenuItems(response.data.data)
  }

  //Login after refreshing page
  useEffect(() => {
    async function loadData(){
      await fetchFoodList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
      }
    }
    loadData()
  },[])
  

  const contextValue = {
    menuItems,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
