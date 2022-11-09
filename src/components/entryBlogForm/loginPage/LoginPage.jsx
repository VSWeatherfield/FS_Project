import { useDispatch } from "react-redux";
import { openEntryModal, closeEntryModal } from "../../../slices/entryModal";

import "./loginPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSignUpEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(closeEntryModal());
    dispatch(openEntryModal({ data: "hzhzhz", name: "signUp" }));
  };

  return (
    <div className="ember-view">
      <div
        tabindex="-1"
        id="ember455"
        className="login-modal-body has-alt-auth modal-body ember-view"
      >
        <div className="login-left-side">
          <div className="login-welcome-header">
            <h1 className="login-title">С возвращением!</h1>
            {/*<img src={wavingHand} alt="" className="waving-hand"></img>*/}
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

export default LoginPage;
