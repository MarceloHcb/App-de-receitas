import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
    <form>
      <label htmlFor="email">
        Email
        <input
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ handleEmail }
        />
      </label>

      <label htmlFor="email">
        Senha
        <input
          type="password"
          value={ password }
          onChange={ handlePassword }
          data-testid="password-input"
        />
      </label>

      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ disabled }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
