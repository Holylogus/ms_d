import React from 'react'
import logo from '../images/Logo.png'
import '../styles/Header.css'

function Header() {
  return (
    <div>
      <nav className='navbar-expand-lg'>
        <div className='container-fluid'>
            <a className='navbar-brand' href='#'><img src={logo}/></a>
        </div>
      </nav>
    </div>
  )
}

export default Header
