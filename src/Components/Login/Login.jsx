import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
import { useState } from "react";
import "../../App.css"
// import * as Yup from "yup";
export const Login = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passValue,setPassValue]=useState("")
  const Navigate=useNavigate()
  // const formike = useFormik({
  //   initialValues: { username: "", password: "" },
  //   validationSchema: {
  //     password: Yup.string()
  //       .min(4, "Password too short")
  //       .required("Password is required"),
  //   },
  // });
  
  const localStorageValue = () => {
    setLoginValue(localStorage.setItem("loginValue", loginValue));
    setPassValue(localStorage.setItem("passValue",passValue))
    const AuthT = "ravina";
    const AuthP="rvi@123";
    const storageToken = localStorage.setItem("key", AuthT);
    const storageToken1=localStorage.setItem("key1",AuthP)
    if(loginValue===AuthT && passValue===AuthP)
      // && AuthP===passValue 
       return Navigate("/profile") 
    
  };

  return (
    <form className="formDesign" 
    // onSubmit={formike.localStorageValue}
     >

      <label className="custom">enter your Details </label>
      <div className="logo"></div>
      <label>
        <h1>Login Form</h1>
        {"  "}
      </label>
      <div>
        <label>Username : </label>
        <input
          type="text"
          placeholder="enter your name "
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
        />
        <br />
        <br />
      </div>
      <div>
        <label>Password : </label>
        <input type="password" placeholder="enter your password"  
          value={[passValue]}
          onChange={(e) => setPassValue(e.target.value)}/>
        <br />
        <br />
      </div>
      <button type="submit" onClick={localStorageValue}>LogIn</button>
      <div className="forget"> <Link to="/signin">SignIn</Link> </div>
    </form>
  );
};
