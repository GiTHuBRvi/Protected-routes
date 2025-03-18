import React from 'react'
import { Link } from 'react-router-dom'
export const Notfound = () => {
  return (
    <div style={{color:"red", display:"flex",justifyContent:"center" ,flexDirection:"column"}}>
      that page was not found  

        <Link to="/">Go Back</Link>


    </div>
  )
}
