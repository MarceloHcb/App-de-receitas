import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import renderWithRouter from './helper/renderWithRouter';

const emailDataTestid = 'email-input';
const passwordDataTestid = 'password-input';
const loginButtonDataTestid = 'login-submit-btn';

describe('Testa a pagina Login', () => {
  it('testa se os inputs e o botão existem', () => {
    render(<Login />);
    const emailInput = screen.getByTestId(emailDataTestid);
    const passwordInput = screen.getByTestId(passwordDataTestid);
    const loginButton = screen.getByTestId(loginButtonDataTestid);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  it('testa se é possível digitar nos inputs e se os mesmos foram validados corretamente (email valido e senha não menor que 6 caracteres)', () => {
    render(<Login />);
    const emailInput = screen.getByTestId(emailDataTestid);
    const passwordInput = screen.getByTestId(passwordDataTestid);
    const loginButton = screen.getByTestId(loginButtonDataTestid);
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '1234567');
    expect(loginButton).toBeEnabled();
  });
  it('testa o redirecionamento apos o click do botão', () => {
    const { history } = renderWithRouter(<Login />);
    const emailInput = screen.getByTestId(emailDataTestid);
    const passwordInput = screen.getByTestId(passwordDataTestid);
    const loginButton = screen.getByTestId(loginButtonDataTestid);
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(loginButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
  });
});
