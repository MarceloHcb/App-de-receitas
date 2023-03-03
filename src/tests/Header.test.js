import { screen } from '@testing-library/react';
import Header from '../components/Header';
import { renderWithRouter } from '../helpers/renderWith';

describe('Efetua testes no component Header', () => {
  beforeEach(() => {
    renderWithRouter(<Header />);
  });
  it('Verifica se o titulo é renderizado', () => {
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
  });
  it('Verifica se o icone de perfil é renderizado', () => {
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
});
