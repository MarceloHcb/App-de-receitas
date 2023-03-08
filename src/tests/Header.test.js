import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import Provider from '../context/Provider';
import { renderWithRouter } from '../helpers/renderWith';

describe('Efetua testes no component Header', () => {
  it('Verifica se o titulo é renderizado', () => {
    renderWithRouter(<Header search />);
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
  });
  it('Verifica se o icone de perfil é renderizado', () => {
    renderWithRouter(<Header search />);
    expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });
  it('Verifica se o icone de busca é renderizado', () => {
    renderWithRouter(<Header search />);
    expect(screen.getByTestId('search-top-btn')).toBeInTheDocument();
  });
  it('Verifica se ao clicar no icone de perfil a rota é modificada para "/profile"', () => {
    const { history } = renderWithRouter(<Header search />);
    const profile = screen.getByTestId('profile-top-btn');
    expect(profile).toBeInTheDocument();
    userEvent.click(profile);
    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });
  it('Verifica se ao clicar no icone de busca e digitar o valor é inserido corretamente', async () => {
    renderWithRouter(
      <Provider>
        <Header search />
      </Provider>,
    );
    userEvent.click(screen.getByTestId('search-top-btn'));
    await waitFor(() => expect(screen.getByRole('textbox')).toBeInTheDocument());
    userEvent.type(screen.getByRole('textbox'), 'abc');
    expect(screen.getByRole('textbox')).toHaveValue('abc');
  });
});
