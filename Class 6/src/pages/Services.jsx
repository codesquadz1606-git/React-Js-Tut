import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {
    let navigate=useNavigate()
  return (
    <div>
      <h1>Services Page</h1>
      <button onClick={()=>{navigate("java")}}>Java Full Stack</button>
      <button onClick={()=>{navigate("python")}}>Python Full Stack</button>
      <button onClick={()=>{navigate("mern")}}>Mern Full Stack</button>
      <button onClick={()=>{navigate("dotnet")}}>Dot Net Full Stack</button>

      <Outlet/>
    </div>
  )
}

export default Services
