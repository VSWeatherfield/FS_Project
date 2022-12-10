import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { UseUser } from "../../../hooks";
import { openEntryModal } from "../../../slices/entryModal";
import { isLogin } from "../../../utils/isLogin";
import UseProfiles from "../../../hooks/UseProfiles";

import "./navbar.css";

const Navbar = () => {
  UseUser();
  const dispatch = useDispatch();
  UseProfiles();

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
        {isLogin() ? (
          <li className="headerLink">
            <Link title="Profile" to="/profile">
              Profile
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

{
  /*
          <li id="current-user" className="header-dropdown-toggle current-user">
            <Link
              to="/profile"
              aria-haspopup="true"
              aria-expanded="false"
              data-auto-route="true"
              className="header-icon"
            >
            <Link title="Profile" to="/profile">
              Profile
            </Link>
              
              {user && profile ? (
                <img
                  title="профиль"
                  width="35"
                  height="35"
                  src={profile.user_image}
                  loading="lazy"
                  className="avatar header-avatar"
                />
              ) : (
                <img
                  title="профиль"
                  width="35"
                  height="35"
                  src={defaultUser}
                  loading="lazy"
                  className="avatar header-avatar"
                />
              )}
            </Link>
          </li>
              */
}