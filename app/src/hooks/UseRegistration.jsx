import { ajaxAuthService } from "../services/ajaxservice";

export function UseRegistration ({
  login, password, firstName, lastName,
  setError, email }) {

  const handleRegister = () => {
    if (!login) {
      setError('Введите логин');
      return;
    }

    if (!password) {
      setError('Введите пароль');
      return;
    }

    ajaxAuthService('/user/', {
      method: 'POST',
      body: JSON.stringify({
        username: login,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return { handleRegister };
}

export default UseRegistration;