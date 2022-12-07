import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";

import CSRFToken from '../../../components';
import { register } from "../../../actions/auth";
import { UseRegistration } from "../../../hooks";
import { openEntryModal, closeEntryModal } from "../../../slices/entryModal";

import "./signUpPage.css";
import wavingHand from "../../../images/wavingHand.png";

const SignUpPage = ({ register, isAuthenticated }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    re_password: '',
    first_name: '',
    last_name: '',
  });

  const [accountCreated, setAccountCreated] = useState(false);
  const { username, password, re_password, 
          email, first_name, last_name } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("aa;a;");
    if (password === re_password) {
        register(username, password, re_password);
        setAccountCreated(true);
    }
  };

  //const { onSubmit } = register(formData.username, formData.password, formData.re_password)

  const handleLogInEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(closeEntryModal());
    dispatch(openEntryModal({ data: "hzhz", name: "logIn" }));
  };
  
  //if (accountCreated) {
  //  window.location.reload();
  //} 


    {/*
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

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

  */}

  return (
    <div className="create-account">
      <div className="create-account-form ">
        <div className="login-welcome-header" id="create-account-title">
          <h1 className="login-title">Добро пожаловать!</h1>
          <img src={wavingHand} className="waving-hand" alt="" />
          <p className="login-subheader">
            Давайте создадим вашу учётную запись
          </p>
        </div>

        <div className="login-form">
          <form>
            <div className="input-group create-account-email">
            <input
                aria-invalid="не более 30 символов"
                maxLength='30'
                name="email"
                autoFocus="autofocus"
                id="new-account-email"
                className="ember-text-field"
                type="email"
                onChange={e => onChange(e)}
                value={email}
                required
              />
              <label className="alt-placeholder">
                Эл. почта
              </label>
              <div id="account-email-validation" className="tip bad"></div>
              <span className="more-info">Не будет отображаться.</span>
            </div>

            <div className="input-group create-account__username">
              <input
                maxLength="20"
                name="username"
                id="new-account-username"
                type="text"
                //value={login}
                //onChange={handleChangeLogin}
                onChange={e => onChange(e)}
                value={username}
                required
              />
              <label className="alt-placeholder">
                Псевдоним
              </label>

              <span className="more-info">
                Псевдоним должен быть уникальным, не очень длинным и не должен
                содержать пробелов
              </span>
            </div>

            <div className="input-group create-account__password">
              <input
                placeholder=""
                id="new-account-password"
                name="password"
                type="password"
                //value={password}
                //onChange={handleChangePassword}
                onChange={e => onChange(e)}
                value={password}
                minLength='6'
                required
              />
              <label className="alt-placeholder">
                Пароль
              </label>
              <span className="more-info">не менее 8 символов</span>
            </div>

            <div className="input-group create-account__password">
              <input
                id="new-account-re_password"
                name="re_password"
                type="password"
                //value={password}
                //onChange={handleChangePassword}
                onChange={e => onChange(e)}
                value={re_password}
                minLength='6'
                required
              />
              <label className="alt-placeholder">
                Пароль x2
              </label>
              <span className="more-info">Подтвердите пароль</span>
            </div>

            <div className="input-group create-account__username">
              <input
                maxLength="20"
                name="first_name"
                id="new-account-fistname"
                type="text"
                //value={firstName}
                //onChange={handleChangeFirstName}
                onChange={e => onChange(e)}
                value={first_name}
              />
              <label className="alt-placeholder">
                Имя
              </label>
            </div>

            <div className="input-group create-account__username">
              <input
                maxLength="20"
                name="last_name"
                id="new-account-lastname"
                type="text"
                //value={lastName}
                //onChange={handleChangeLastName}
                onChange={e => onChange(e)}
                value={last_name}
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
            //onClick={handleRegister}
            onClick={onSubmit}
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

          {/*
          <div className="signup-error">{error}</div>
          */}

          <div className="disclaimer">
            Регистрируясь, вы соглашаетесь с моей политикой конфиденциальности
          </div>
        </div>

        <div className="create-account-login-buttons"></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(SignUpPage);

//export default SignUpPage;
