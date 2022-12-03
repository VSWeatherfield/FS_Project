import { ajaxAuthService } from "../services/ajaxservice";

export function UseRegistration({
  login,
  password,
  firstName,
  lastName,
  setError,
  email,
}) {
  const handleRegister = () => {
    if (!email) {
      setError("Введите почту");
      return;
    }

    if (!login) {
      setError("Введите псевдоним");
      return;
    }

    if (!login) {
      setError("Введите логин");
      return;
    }

    if (!password) {
      setError("Введите пароль");
      return;
    }

    if (!firstName) {
      setError("Введите ваше имя");
      return;
    }

    if (!lastName) {
      setError("Введите вашу фамилию!!");
      return;
    }

    ajaxAuthService("/user/", {
      method: "POST",
      body: JSON.stringify({
        username: login,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        setError("Неверный логин или пароль");
      });
  };

  return { handleRegister };
}

export default UseRegistration;
