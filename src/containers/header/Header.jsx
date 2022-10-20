import React from 'react'
import { Navbar } from '../../components'
import logo from '../../Capture.png'

import './header.css'

const Header = () => {
  return (
  <header className="d-header">
      <span class="title">
        <a href="/" data-auto-route="true">
          <img src={logo} alt="Logo" id='site-logo'/>
        </a>
      </span>

      <div className="navbar">
        <Navbar />
      </div>
  </header>
  )
}

export default Header