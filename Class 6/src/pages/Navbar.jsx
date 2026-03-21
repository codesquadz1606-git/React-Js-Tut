import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
        <h1>Logo</h1>
        <ul style={{display:"flex",gap:"30px"}}>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none"}} to="/">Home</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none"}} to="/about">About</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none"}} to="/services">Services</Link></li>
            <li style={{listStyle:"none"}}><Link style={{textDecoration:"none"}} to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
