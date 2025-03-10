import React from 'react'
import logo from '../../assets/images/homelogo.png'

function NavBar() {
  return (
    <nav className='container'>
        <img src={logo} alt='' className='logo' />
        <ul>
            <li>Home</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default NavBar