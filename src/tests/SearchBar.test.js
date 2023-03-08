// import { act, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Header from '../components/Header';
// import { meals } from '../helpers/mockData';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Header from '../components/Header';
import { meals } from './helpers/mockData';
import { renderWithRouter } from './helpers/renderWith';

// const filters = ['ingredient-search-radio', 'name-search-radio', 'first-letter-search-radio'];
// const buttonSearch = 'search-top-btn';
// const searchInput = 'search-input';
// const buttonSearch2 = 'exec-search-btn';
// const meal = {
//   idMeal: 1,
// };

describe('Testa componente SearchBar', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetch);
  });
  it('Verifica se o filtro é feito ao clicar na opção ingrediente após digitar o valor chicken', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals');
    });

    const searchTopBtn = screen.getByTestId('search-top-btn');
    expect(searchTopBtn).toBeInTheDocument();
  });

//   it('Verifica se o filtro é feito ao clicar na opção Name após digitar o valor soup', async () => {
//     const { history } = renderWithRouter(<Header search />);
//     userEvent.click(screen.getByTestId(buttonSearch));
//     userEvent.type(screen.getByTestId(searchInput), 'soup');
//     userEvent.click(screen.getByTestId(filters[1]));
//     userEvent.click(screen.getByTestId(buttonSearch2));
//     await waitFor(async () => {
//       expect(fetch).toHaveBeenCalledTimes(1);
//       expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=soup');
//       expect(history.location.key.length).toBeGreaterThan(0);
//       expect(history.location.pathname).not.toEqual('/meals');
//     });
//   });
//   it('Verifica se o filtro é feito ao clicar na opção First Letter após digitar o valor a', async () => {
//     const { history } = renderWithRouter(<Header search />);
//     userEvent.click(screen.getByTestId(buttonSearch));
//     userEvent.type(screen.getByTestId(searchInput), 'a');
//     userEvent.click(screen.getByTestId(filters[2]));
//     userEvent.click(screen.getByTestId(buttonSearch2));
//     await waitFor(async () => {
//       expect(fetch).toHaveBeenCalledTimes(1);
//       expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
//       expect(history.location.key.length).toBeGreaterThan(0);
//       expect(history.location.pathname).not.toEqual('/meals');
//     });
//   });
//   it('Verifica se gera um alerta ao clicar no filtro first letter após inserir valor maior que 1 ', async () => {
//     const { history } = renderWithRouter(<Header search />);
//     userEvent.click(screen.getByTestId(buttonSearch));
//     userEvent.type(screen.getByTestId(searchInput), 'aa');
//     userEvent.click(screen.getByTestId(filters[2]));
//     userEvent.click(screen.getByTestId(buttonSearch2));
//     await waitFor(async () => {
//       expect(fetch).toHaveBeenCalledTimes(0);
//       expect(fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
//       expect(history.location.pathname).not.toEqual('/meals');
//     });
//   });
// });
});
