import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Login = () => {
  const [loginValue,setLoginValue] = useState("");
  // loginValue="ravina"
  const localStorageValue=()=>{
    setLoginValue(
    localStorage.setItem("loginValue",loginValue)
  )
  // console.log(loginValue)
}

  return (
    <form className="formDesign">
      <label className="custom">enter your Details </label>
      <div className="logo"></div>
      <label>
        <h1>Login Form</h1>{" "}
      </label>
      <div>
        <label>Username : </label>
        <input type="text" placeholder="enter your name "
        //  value={loginValue}
          />
        <br />
        <br />
      </div>
      <div>
        <label>Password : </label>
        <input type="password" placeholder="enter your password" />
        <br />
        <br />
      </div>
      <button type="submit" onClick={localStorageValue} >LogIn</button>
      <div className="forget">
        {/* <Link to="/signin">SignIn</Link> */}
      </div>
    </form>
  );
};
