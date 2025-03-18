import React from 'react'

export const Home = () => {

const AuthT="ravina"
const storageToken=localStorage.setItem("key",AuthT)

console.log(storageToken)
  return (
    <div className='dis'>This is my homepage</div>
  )
}
