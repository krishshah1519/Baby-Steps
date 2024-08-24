import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
const Navbar = () => {
  return (    
    <nav className='container'>
      <img src={logo} className='logo' alt="" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>About Us</li>
        <li ><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
      
  )
}

export default Navbar

