import {  useContext, useState } from "react";
import "./LoginPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'

export function LoginPopup({ setShowLogin }) {

  const {url,setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  function onChangeHandler(event){
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  async function onLogin(event){
    event.preventDefault();
    let newUrl = url;
    if(currState === 'Login'){
      newUrl += '/api/user/login'
    }else{
      newUrl += '/api/user/register'
    }

    const response = await axios.post(newUrl,data)

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)
    }else{
      alert(response.data.message)
    }
  }

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <div className="Cross-icon" onClick={() => setShowLogin(false)}>
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your Name" required />
          )}
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your Email Id" required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Your Password" required />
        </div>
        <button type="submit">{currState === "Sign up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ?<span onClick={() => setCurrState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account ?<span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
