import { useState } from "react";
import { useDispatch } from "react-redux";

import { openEntryModal, closeEntryModal } from "../../../slices/entryModal";
import { ajaxAuthService } from "../../../services/ajaxservice";
import wavingHand from "../../../images/wavingHand.png";

import "./logInPage.css";

const LogInPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeLogin = (event) => {
    setError("");
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setError("");
    setPassword(event.target.value);
  };

  const handleSignUpEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(closeEntryModal());
    dispatch(openEntryModal({ data: "hzhzhz", name: "signUp" }));
  };

  const handleSubmitClick = (event) => {
    if (!login) {
      setError("Введите Логин");
      return;
    }

    if (!password) {
      setError("Введите Пароль!");
      return;
    }

    ajaxAuthService("/token/", {
      method: "POST",
      body: JSON.stringify({ username: login, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        window.localStorage.setItem("ACCESS", data.access);
        window.localStorage.setItem("REFRESH", data.refresh);

        //dispatch(closeEntryModal());
        window.location.reload();
      })
      .catch((error) => {
        setError("Неверный логин или пароль");
      });

    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className="login-modal">
      <div
        tabIndex="-1"
        id="ember455"
        className="login-modal-body has-alt-auth modal-body"
      >
        <div className="login-left-side">
          <div className="login-welcome-header">
            <h1 className="login-title">С возвращением!</h1>
            <img src={wavingHand} className="waving-hand" />
            <p className="login-subheader">Войдите в свою учётную запись</p>
          </div>

          <form id="login-form" method="post">
            <div id="credentials">
              <div className="input-group">
                <input
                  autoComplete="username"
                  tabIndex="1"
                  autoFocus="autofocus"
                  autoCorrect="off"
                  autoCapitalize="off"
                  id="login-account-name"
                  className="ember-text-field value-entered"
                  type="email"
                  value={login}
                  onChange={handleChangeLogin}
                />
                <label className="alt-placeholder" htmlFor="login-account-name">
                  Эл. почта / Псевдоним
                </label>
              </div>

              <div className="input-group">
                <input
                  autoComplete="current-password"
                  tabIndex="1"
                  placeholder=""
                  maxLength="200"
                  id="login-account-password"
                  className="ember-text-field value-entered"
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                />
                <label
                  className="alt-placeholder"
                  htmlFor="login-account-password"
                >
                  Пароль
                </label>
              </div>
            </div>
          </form>

          <div className="login-error">{error}</div>

          <div className="modal-footer">
            <button
              tabIndex="2"
              form="login-form"
              id="login-button"
              className="btn btn-large btn-primary btn btn-icon-text"
              type="button"
              onClick={handleSubmitClick}
            >
              <span className="d-button-label">Войти</span>
            </button>

            <button
              tabIndex="3"
              id="new-account-link"
              className="btn-large btn btn-text"
              type="button"
              onClick={handleSignUpEditClick}
            >
              <span className="d-button-label">Создать учётную запись</span>
            </button>
            <div
              id="ember431"
              className="loading-container inline-spinner"
            ></div>
          </div>
        </div>

        <div className="login-right-side"></div>
      </div>
    </div>
  );
};

export default LogInPage;
