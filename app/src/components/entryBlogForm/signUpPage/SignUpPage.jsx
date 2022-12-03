import { useState } from "react";
import { useDispatch } from "react-redux";

import { UseRegistration } from "../../../hooks";
import { openEntryModal, closeEntryModal } from "../../../slices/entryModal";

import "./signUpPage.css";
import wavingHand from "../../../images/wavingHand.png";

const SignUpPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleLogInEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(closeEntryModal());
    dispatch(openEntryModal({ data: "hzhz", name: "logIn" }));
  };

  const handleChangeLogin = (event) => {
    if (event.target.value.length <= 28) {
      setError("");
      setLogin(event.target.value);
    } else {
      setError("username должен быть меньше 29 символов");
    }
  };

  const handleChangePassword = (event) => {
    setError("");
    setPassword(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setError("");
    setEmail(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setError("");
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setError("");
    setLastName(event.target.value);
  };

  const { handleRegister } = UseRegistration({
    login,
    password,
    firstName,
    lastName,
    email,
    setError,
  });

  return (
    <div className="create-account">
      <div className="create-account-form ">
        <div className="login-welcome-header" id="create-account-title">
          <h1 className="login-title">Добро пожаловать!</h1>
          <img src={wavingHand} className="waving-hand" />
          <p className="login-subheader">
            Давайте создадим вашу учётную запись
          </p>
        </div>

        <div className="login-form">
          <form>
            <div className="input-group create-account-email">
              <input
                aria-invalid=""
                aria-describedby="account-email-validation"
                name="email"
                autoFocus="autofocus"
                id="new-account-email"
                className="ember-text-field"
                type="email"
                value={email}
                onChange={handleChangeEmail}
              />
              <label className="alt-placeholder" htmlFor="new-account-email">
                Эл. почта
              </label>
              <div id="account-email-validation" className="tip bad"></div>
              <span className="more-info">Не будет отображаться.</span>
            </div>

            <div className="input-group create-account__username">
              <input
                aria-describedby="username-validation"
                name="username"
                autoComplete="off"
                maxLength="20"
                id="new-account-username"
                className="ember-text-field"
                type="text"
                value={login}
                onChange={handleChangeLogin}
              />
              <label className="alt-placeholder" htmlFor="new-account-username">
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
                autoComplete="current-password"
                placeholder=""
                id="new-account-password"
                className="ember-text-field"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
              <label className="alt-placeholder" htmlFor="new-account-password">
                Пароль
              </label>
              <span className="more-info">не менее 8 символов</span>
            </div>

            <div className="input-group create-account__username">
              <input
                aria-describedby="username-validation"
                name="username"
                autoComplete="off"
                maxLength="20"
                id="new-account-fistname"
                className="ember-text-field"
                type="text"
                value={firstName}
                onChange={handleChangeFirstName}
              />
              <label className="alt-placeholder" htmlFor="new-account-username">
                Имя
              </label>
            </div>

            <div className="input-group create-account__username">
              <input
                aria-describedby="username-validation"
                name="username"
                autoComplete="off"
                maxLength="20"
                id="new-account-lastname"
                className="ember-text-field"
                type="text"
                value={lastName}
                onChange={handleChangeLastName}
              />
              <label className="alt-placeholder" htmlFor="new-account-username">
                Фамилия
              </label>
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button
            className="btn-large btn-primary btn btn-text"
            type="button"
            onClick={handleRegister}
          >
            <span className="d-button-label">Создать учётную запись</span>
          </button>

          <button
            id="login-link"
            className="btn-large btn btn-text"
            type="button"
            onClick={handleLogInEditClick}
          >
            <span className="d-button-label">Вход</span>
          </button>

          <div className="signup-error">{error}</div>

          <div className="disclaimer">
            Регистрируясь, вы соглашаетесь с моей политикой конфиденциальности
          </div>
        </div>

        <div className="create-account-login-buttons"></div>
      </div>
    </div>
  );
};

export default SignUpPage;
