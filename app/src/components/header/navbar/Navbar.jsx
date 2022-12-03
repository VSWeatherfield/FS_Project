import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ajaxService } from "../../../services/ajaxservice";
import { openEntryModal } from "../../../slices/entryModal";
import { isLogin } from "../../../utils/isLogin";
import { setUser } from "../../../slices/user";
import { setProfile } from "../../../slices/profile";

import VSImage from "../../../images/VSWeatherfield.png";
import defaultUser from "../../../images/default-user.jpg";
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

  useEffect(() => {
    if (isLogin()) {
      ajaxService("/user/current").then((data) => {
        dispatch(setUser(data));
      });
    }
  }, []);

  const profile = useSelector((state) => state.profile.profile);

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
          <li id="current-user" className="header-dropdown-toggle current-user">
            <Link
              to="/profile"
              aria-haspopup="true"
              aria-expanded="false"
              data-auto-route="true"
              className="header-icon"
            >
              {profile ? (
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
