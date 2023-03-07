import { screen } from '@testing-library/react';
import { renderWithRouter } from '../helpers/renderWith';
import App from '../App';

describe('Testa o componente Meals.js', () => {
  it('Verifica se os itens são renderizados na tela', () => {
    renderWithRouter(<App />, { initialEntries: ['/meals'] });

    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('drinks-bottom-btn')).toBeInTheDocument();
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(screen.getByTestId('drinks-bottom-btn')).toBeInTheDocument();
  });
});
