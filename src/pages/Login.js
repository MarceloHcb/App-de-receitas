import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo.png';
import recipes from '../images/recipes.png';
import '../css/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const passwordMinLength = 6;
    const emailIsValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i);

    if (password.length > passwordMinLength && emailIsValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const saveUserLocalStorage = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  const handleClick = () => {
    saveUserLocalStorage();
    history.push('/meals');
  };

  const handleEmail = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handlePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  return (
    <div className="login_container">
      <div className="bg_container" />
      <img className="logo" src={ logo } alt="logo" />
      <h1 className="descricao">As melhores receitas</h1>
      <img className="receitas" src={ recipes } alt="recipesy" />

      <form className="form_login">
        <h1 className="title">LOGIN</h1>
        <label htmlFor="email" className="itemInputLogin">
          <input
            placeholder="Digite seu email"
            type="email"
            className="input_login item_login"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ handleEmail }
          />
        </label>

        <label htmlFor="email" className="itemInputLogin">
          <input
            placeholder="Digite sua senha"
            className="input_login item_login"
            type="password"
            value={ password }
            onChange={ handlePassword }
            data-testid="password-input"
          />
        </label>

        <button
          className="submit_buttom item_login"
          data-testid="login-submit-btn"
          type="button"
          disabled={ disabled }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>

  );
}

export default Login;
