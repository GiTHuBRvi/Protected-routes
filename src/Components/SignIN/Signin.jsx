import React from 'react'
// import { Login } from '../Login/Login'
import { Link } from 'react-router-dom'
export const Signin = () => {
  return (
    <div>
<form className="formDesign">
      <label className="custom"><h1>Registration Form </h1></label>
      <div className="logo"></div>
      <label>
        <h1>Login Form</h1>{" "}
      </label>
      <div>
        <label>Username : </label>
        <input type="text" placeholder="enter your name " />
        <br />
        <br />
      </div>
      <div>
        <label>Password : </label>
        <input type="text" placeholder="enter your password" />
        <br />
        <br />
      </div>
      <button type="submit">LogIn</button>
      <div className="forget">
        <Link to="/signin">SignIn</Link>
      </div>
    </form>


    </div>
  )
}
