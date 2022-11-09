import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { openEntryModal } from "../../../slices/entryModal";

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
        <li className="headerLink">
          <Link title="Profile" to="/profile">
            Profile
          </Link>
        </li>
      </ul>

      <button className="sign-up-button btn btn-primary btn-small">
        <span className="d-button-label" onClick={handleSignUpEditClick}>
          Регистрация
        </span>
      </button>

      <button className="login-button btn btn-primary btn-small">
        <span className="d-button-label" onClick={handleLogInEditClick}>
          Вход
        </span>
      </button>
    </div>
  );
};

export default Navbar;
