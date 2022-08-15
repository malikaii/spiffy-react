import React from 'react'
import "./header.css";

function Header() {
  return (
    <nav className='nav-bar'>
        <h2 className='app-title'>Spiffy</h2>
        <ul className='nav-items'>
            <li className='nav-item'><a href='/feed'>Feed</a></li>
            <li className='nav-item'><a href='/help'>Help</a></li>
            <li className='nav-item'><a href='/'>Log Out</a></li>
        </ul>
    </nav>
  )
}

export default Header;