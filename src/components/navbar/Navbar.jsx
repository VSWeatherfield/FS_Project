import React from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='panel'>
      <ul class="custom-header-links">
        <li class="headerLink">
          <Link title="Olympiads" to="/olympiads">Olympiads</Link>
        </li>
        <li class="headerLink">
          <Link title="Scoreboard" to="/scoreboard">Scoreboard</Link>
        </li>
        <li class="headerLink">
          <Link title="Profile" to="/profile">Profile</Link>
        </li>
      </ul>

      <button class="sign-up-button btn btn-primary btn-small">
        <span class="d-button-label">
          Регистрация
        </span>
      </button>

      <button class="login-button btn btn-primary btn-small">
        <span class="d-button-label">
          Вход
        </span>
      </button>
      
    </div>
  )
}

export default Navbar;