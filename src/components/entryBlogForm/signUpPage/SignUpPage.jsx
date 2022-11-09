import { useDispatch } from "react-redux";
import { openEntryModal, closeEntryModal } from "../../../slices/entryModal";

import { PageForm } from "../../";

import "./signUpPage.css";

const SignUpPage = (props) => {
  const dispatch = useDispatch();

  const handleLogInEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(closeEntryModal());
    dispatch(openEntryModal({ data: "hzhz", name: "logIn" }));
  };

  return (
    <div className="create-account-form ">
      <div className="login-welcome-header" id="create-account-title">
        <h1 className="login-title">Добро пожаловать!</h1>
        <p className="login-subheader">Давайте создадим вашу учётную запись</p>
      </div>

      <div className="login-form">
        <form>
          <div className="input-group create-account-email">
            <input
              aria-invalid=""
              aria-describedby="account-email-validation"
              name="email"
              autofocus="autofocus"
              id="new-account-email"
              className="ember-text-field ember-view"
              type="email"
            />
            <label className="alt-placeholder" for="new-account-email">
              Эл. почта{" "}
            </label>
            <div
              id="account-email-validation"
              className="tip bad ember-view"
            ></div>
            <span className="more-info">Не будет отображаться.</span>
          </div>

          <div className="input-group create-account__username">
            <input
              aria-invalid=""
              aria-describedby="username-validation"
              name="username"
              autocomplete="off"
              maxlength="20"
              id="new-account-username"
              className="ember-text-field ember-view value-entered"
              type="text"
            />
            <label class="alt-placeholder" for="new-account-username">
              Псевдоним
            </label>

            <span className="more-info">
              Псевдоним должен быть уникальным, не очень длинным и не должен
              содержать пробелов
            </span>
          </div>

          <div className="input-group create-account__password">
            <input
              aria-describedby="password-validation"
              autocomplete="current-password"
              placeholder=""
              id="new-account-password"
              className="value-entered ember-text-field ember-view"
              type="password"
            />
            <label className="alt-placeholder" for="new-account-password">
              Пароль
            </label>
            <span className="more-info">не менее 8 символов</span>
          </div>
        </form>
      </div>

      <div className="modal-footer">
        <button
          id="ember590"
          className="btn-large btn-primary btn btn-text ember-view"
          type="button"
        >
          <span className="d-button-label">Создать учётную запись</span>
        </button>

        <button
          id="login-link"
          className="btn-large btn btn-text ember-view"
          type="button"
          onClick={handleLogInEditClick}
        >
          <span className="d-button-label">Вход</span>
        </button>

        <div className="disclaimer">
          Регистрируясь, вы соглашаетесь с политикой конфиденциальности и
          условиями предоставления услуг.
        </div>
      </div>

      <div className="create-account-login-buttons"></div>
    </div>
  );
};

export default SignUpPage;
