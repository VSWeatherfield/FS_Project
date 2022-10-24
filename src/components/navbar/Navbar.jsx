import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="panel">
      <ul className="custom-header-links">
        <li className="headerLink">
          <Link title="Olympiads" to="/olympiads">
            Olympiads
          </Link>
        </li>
        <li className="headerLink">
          <Link title="Scoreboard" to="/scoreboard">
            Scoreboard
          </Link>
        </li>
        <li className="headerLink">
          <Link title="Profile" to="/profile">
            Profile
          </Link>
        </li>
      </ul>

      <button className="sign-up-button btn btn-primary btn-small">
        <span className="d-button-label">Регистрация</span>
      </button>

      <button className="login-button btn btn-primary btn-small">
        <span className="d-button-label">Вход</span>
      </button>
    </div>
  );
};

export default Navbar;
