import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  openEntryModal,
  closeEntryModal,
  submitEntryModal,
} from "../../../slices/entryModal";
import wavingHand from "../../../images/wavingHand.png";

import "./logInPage.css";

const LogInPage = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUpEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(closeEntryModal());
    dispatch(openEntryModal({ data: "hzhzhz", name: "signUp" }));
  };

  const handleSubmitClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(submitEntryModal({ username: { userName } }));
    dispatch(closeEntryModal());
  };

  return (
    <div className="login-modal">
      <div
        tabindex="-1"
        id="ember455"
        className="login-modal-body has-alt-auth modal-body ember-view"
      >
        <div className="login-left-side">
          <div className="login-welcome-header">
            <h1 className="login-title">С возвращением!</h1>
            <img src={wavingHand} alt className="waving-hand" />
            <p className="login-subheader">Войдите в свою учётную запись</p>
          </div>

          <form id="login-form" method="post">
            <div id="credentials">
              <div className="input-group">
                <input
                  autocomplete="username"
                  tabindex="1"
                  autofocus="autofocus"
                  autocorrect="off"
                  autocapitalize="off"
                  id="login-account-name"
                  className="ember-text-field ember-view value-entered"
                  type="email"
                  value={userName}
                  onChange={handleChangeUserName}
                />
                <label className="alt-placeholder" for="login-account-name">
                  Эл. почта / Псевдоним
                </label>
              </div>

              <div className="input-group">
                <input
                  autocomplete="current-password"
                  tabindex="1"
                  placeholder=""
                  maxlength="200"
                  id="login-account-password"
                  className="ember-text-field ember-view value-entered"
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                />
                <label className="alt-placeholder" for="login-account-password">
                  Пароль
                </label>
              </div>
            </div>
          </form>

          <div className="modal-footer">
            <button
              tabindex="2"
              form="login-form"
              id="login-button"
              className="btn btn-large btn-primary btn btn-icon-text ember-view"
              type="button"
              onClick={handleSubmitClick}
            >
              <span className="d-button-label">Войти</span>
            </button>

            <button
              tabindex="3"
              id="new-account-link"
              className="btn-large btn btn-text ember-view"
              type="button"
              onClick={handleSignUpEditClick}
            >
              <span className="d-button-label">Создать учётную запись</span>
            </button>
            <div
              id="ember431"
              className="loading-container inline-spinner ember-view"
            ></div>
          </div>
        </div>

        <div className="login-right-side"></div>
      </div>
    </div>
  );
};

export default LogInPage;
