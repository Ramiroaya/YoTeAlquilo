import React from 'react'
import NavBar from './NavBar'
import Login from '../Login/Login';

import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
        <img src="../images/logo-yoTeAlquilo.png" alt="logo_YoTeAlquilo" />
        
        <Login />
    </div>
  )
}

export default Headerg