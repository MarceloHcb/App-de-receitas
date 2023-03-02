import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { renderWithRouterAndRedux } from '../helpers/renderWith';

const button = 'login-submit-btn';

describe('Testa a página de login', () => {
  test('Verifica se a tela de login é renderizada na rota correta', () => {
    const { history } = renderWithRouterAndRedux(<Login />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('Verifica se renderiza os campos de email e senha', () => {
    renderWithRouterAndRedux(<Login />);
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
    const passWord = screen.getByTestId('password-input');
    expect(passWord).toBeInTheDocument();
  });
  test('Verifica se renderiza o botão desativado de entrar', () => {
    renderWithRouterAndRedux(<Login />);
    const buttonLogin = screen.getByTestId(button);
    expect(buttonLogin).toBeInTheDocument();
    expect(buttonLogin).toBeDisabled();
  });
  test('Verifica se o botão é habilitado após o preenchimento e se redireciona para "/meals" após clicado', () => {
    const { history } = renderWithRouterAndRedux(<Login />);
    const passWord = screen.getByTestId('password-input');
    const emailInput = screen.getByTestId('email-input');
    const buttonLogin = screen.getByTestId(button);
    userEvent.type(emailInput, 'email@test.com');
    userEvent.type(passWord, '1234567');
    expect(buttonLogin).not.toBeDisabled();
    userEvent.click(screen.getByTestId(button));
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
    const userEmail = JSON.parse(localStorage.getItem('user')).email;
    expect(userEmail).toBe('email@test.com');
  });
});
