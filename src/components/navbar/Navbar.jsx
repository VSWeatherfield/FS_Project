import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='wrap'>
      <ul class="custom-header-links">
        <li class="headerLink">
          <a title="Olympiads" href="/olympiads">Olympiads</a>
        </li>
        <li class="headerLink">
          <a title="Scoreboard" href="/scoreboard">Scoreboard</a>
        </li>
        <li class="lastHeaderLink">
          <a title="Profile" href="/profile">Profile</a>
        </li>
      </ul>

      <button class="widget-button btn btn-primary btn-small sign-up-button btn-text">
        <span class="d-button-label">
          Регистрация
        </span>
      </button>

      <button class="widget-button btn btn-primary btn-small login-button btn-icon-text">
        <span class="d-button-label">
          Вход
        </span>
      </button>
      
    </div>
  )
}

export default Navbar;