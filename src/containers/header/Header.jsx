import React from 'react'
import {Link} from 'react-router-dom'

import { Navbar } from '../../components'
import logo from '../../images/Capture.png'

import './header.css'

const Header = () => {
  return (
    <header className="d-header">
      <div className='wrap'>
        <Link to="/" data-auto-route="true" className='menuref'>
        </Link>

        <span class="title">
          <Link to="/" data-auto-route="true">
            <img src={logo} alt="Logo" id='site-logo'/>
          </Link>
        </span>

        <span className='d-navbar'>
          <Navbar />
        </span>
      </div>
    </header>
  )
}

export default Header;