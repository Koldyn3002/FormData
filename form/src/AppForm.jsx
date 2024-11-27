import React, { useEffect, useState } from "react";
import "./App.css";

const AppForm = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [mailError, setMailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (mailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [mailError, passwordError]);

  const mailHandler = (e) => {
    setMail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setMailError("Некорректный email");
    } else {
      setMailError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "mail":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Пароль должен содержать не менее 8 символов");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    

    console.log("Email:", mail);
    console.log("Password:", password);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1 className="h1">Регистрация</h1>
        {emailDirty && mailError && (
          <div style={{ color: "red" }}> {mailError} </div>
        )}
        <input
          className="inputMail"
          onChange={mailHandler}
          value={mail}
          onBlur={(e) => blurHandler(e)}
          name="mail"
          tupe="text"
          placeholder="E-mail"
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "red" }}> {passwordError} </div>
        )}
        <input
          onChange={passwordHandler}
          value={password}
          onBlur={(e) => blurHandler(e)}
          name="password"
          tupe="password"
          placeholder="Пароль"
        />
        <button disabled={!formValid} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default AppForm;
console.log("асалам алейкум");
