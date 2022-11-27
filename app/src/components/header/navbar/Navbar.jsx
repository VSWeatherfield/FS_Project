import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { openEntryModal } from "../../../slices/entryModal";
import { isLogin } from "../../../utils/isLogin";

import VSImage from "../../../images/VSWeatherfield.png";
import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogInEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(openEntryModal({ data: "hzhz", name: "logIn" }));
  };

  const handleSignUpEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(openEntryModal({ data: "hzhzhz", name: "signUp" }));
  };

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
        {/*
        <li className="headerLink">
          <Link title="Profile" to="/profile">
            Profile
          </Link>
        </li>
        */}
        {isLogin() ? (
          <li id="current-user" className="header-dropdown-toggle current-user">
            <Link
              to="/profile"
              aria-haspopup="true"
              aria-expanded="false"
              data-auto-route="true"
              className="header-icon"
            >
              <img
                title="профиль"
                width="35"
                height="35"
                src={VSImage}
                loading="lazy"
                className="avatar header-avatar"
              />
            </Link>
          </li>
        ) : (
          <li className="headerLink">
            <button
              className="sign-up-button btn btn-primary btn-small"
              onClick={handleSignUpEditClick}
            >
              <span className="d-button-label">Регистрация</span>
            </button>

            <button
              className="login-button btn btn-primary btn-small"
              onClick={handleLogInEditClick}
            >
              <span className="d-button-label">Вход</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
