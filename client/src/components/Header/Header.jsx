import React from 'react'
import NavBar from './NavBar'

import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
        <img src="../images/logo-yoTeAlquilo.png" alt="logo_YoTeAlquilo" />
        <NavBar />
        <Login />
    </div>
  )
}

export default Header