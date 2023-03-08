import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import { renderWithRouter } from '../helpers/renderWith';

describe('', () => {
  test('Verifica se os elementos estão na tela', () => {
    const { history } = renderWithRouter(<Profile search />);

    act(() => {
      history.push('/profile');
    });

    const ProfileH1 = screen.getByTestId('page-title');
    expect(ProfileH1).toBeInTheDocument();

    const ProfileBtn = screen.getByTestId('profile-top-btn');
    expect(ProfileBtn).toBeInTheDocument();

    const DoneRecipesBtn = screen.getByTestId('profile-done-btn');
    expect(DoneRecipesBtn).toBeInTheDocument();

    const favRecipesBtn = screen.getByTestId('profile-favorite-btn');
    expect(favRecipesBtn).toBeInTheDocument();

    const logoutBtn = screen.getByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();
  });
  test('Verifica se ao clicar no botão de receitas feitas, ele muda de tela', () => {
    const { history } = renderWithRouter(<Profile search />);

    act(() => {
      history.push('/profile');
    });

    const DoneRecipesBtn = screen.getByTestId('profile-done-btn');
    userEvent.click(DoneRecipesBtn);

    const doneRecipes = history.location;
    expect(doneRecipes.pathname).toBe('/done-recipes');
  });
  test('Verifica se ao clicar no botão de receitas favoritas, ele muda de tela', () => {
    const { history } = renderWithRouter(<Profile search />);

    act(() => {
      history.push('/profile');
    });

    const favRecipesBtn = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favRecipesBtn);

    const favRecipes = history.location;
    expect(favRecipes.pathname).toBe('/favorite-recipes');
  });
  test('', () => {
    const { history } = renderWithRouter(<Profile search />);

    act(() => {
      history.push('/profile');
    });

    const logoutBtn = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutBtn);

    const loginPage = history.location;
    expect(loginPage.pathname).toBe('/');
  });
});
