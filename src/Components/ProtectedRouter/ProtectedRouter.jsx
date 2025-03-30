import React from "react";
import { Navigate } from "react-router-dom";
export const ProtectedRouter = ({ children }) => {


    const authToken=localStorage.getItem("key" )
    console.log(authToken,"got the auth token")
    console.log(authToken);
    
   
    
    if(authToken)
    {
      return children 
      
    }
    return (<Navigate to="/" replace />
 )
  
  
};
