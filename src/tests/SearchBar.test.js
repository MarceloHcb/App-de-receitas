import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import Provider from '../context/Provider';
import fetch from '../../cypress/mocks/fetch';

// const filters = ['ingredient-search-radio', 'name-search-radio', 'first-letter-search-radio'];
// const buttonSearch = 'search-top-btn';
// const searchInput = 'search-input';
// const buttonSearch2 = 'exec-search-btn';
// const meal = {
//   idMeal: 1,
// };
const searchButtonId = 'search-top-btn';
const searchInputId = 'search-input';
const submitId = 'exec-search-btn';
const nameRadioId = 'name-search-radio';
const firstLetterID = 'first-letter-search-radio';
const ingredientRadioId = 'ingredient-search-radio';

describe('Testa componente SearchBar', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetch);
    global.alert = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('', () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals');
    });

    const searchTopBtn = screen.getByTestId(searchButtonId);
    expect(searchTopBtn).toBeInTheDocument();
  });
  it('', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals');
    });

    const searchTopBtn = screen.getByTestId(searchButtonId);
    userEvent.click(searchTopBtn);

    const searchBar = screen.getByTestId(submitId);
    expect(searchBar).toBeInTheDocument();
  });
  it('Testando botão de ingrediente', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals');
    });

    const searchTopBtn = screen.getByTestId(searchButtonId);
    userEvent.click(searchTopBtn);

    const searchInput = screen.getByTestId(searchInputId);
    userEvent.type(searchInput, 'beef');

    const ingredientRadioBtn = screen.getByTestId(ingredientRadioId);
    userEvent.click(ingredientRadioBtn);

    const searchBar = screen.getByTestId(submitId);
    userEvent.click(searchBar);

    await waitFor(() => {
      const beefMustard = screen.getByTestId('0-recipe-card');
      expect(beefMustard).toBeInTheDocument();
    });
  });
  it('Testando global alert', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals');
    });

    const searchTopBtn = screen.getByTestId(searchButtonId);
    userEvent.click(searchTopBtn);

    const searchInput = screen.getByTestId(searchInputId);
    userEvent.type(searchInput, 'aa');

    const firstLetterBtn = screen.getByTestId(firstLetterID);
    userEvent.click(firstLetterBtn);

    const searchBar = screen.getByTestId(submitId);
    userEvent.click(searchBar);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled();
    });
  });
  it('Testando name input', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals');
    });

    const searchTopBtn = screen.getByTestId(searchButtonId);
    userEvent.click(searchTopBtn);

    const searchInput = screen.getByTestId(searchInputId);
    userEvent.type(searchInput, 'chicken');

    const nameSearchBtn = screen.getByTestId(nameRadioId);
    userEvent.click(nameSearchBtn);

    const searchBar = screen.getByTestId(submitId);
    userEvent.click(searchBar);

    await waitFor(() => {
      const chickenHandi = screen.getByTestId('0-recipe-card');
      expect(chickenHandi).toBeInTheDocument();
    });
  });
  it('Testando botão primeira letra', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals');
    });

    const searchTopBtn = screen.getByTestId(searchButtonId);
    userEvent.click(searchTopBtn);

    const searchInput = screen.getByTestId(searchInputId);
    userEvent.type(searchInput, 'aa');

    const firstLetterBtn = screen.getByTestId(firstLetterID);
    userEvent.click(firstLetterBtn);

    const searchBar = screen.getByTestId(submitId);
    userEvent.click(searchBar);

    await waitFor(() => {
      const appleCrumble = screen.getByTestId('1-recipe-card');
      expect(appleCrumble).toBeInTheDocument();
    });
  });
  it('', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/drinks');
    });

    const cocoaBtn = screen.getByTestId('page-title');
    expect(cocoaBtn).toBeInTheDocument();

    await waitFor(() => {
      const cocktailBtn = screen.getByRole('button', {
        name: /cocktail/i,
      });
      expect(cocktailBtn).toBeInTheDocument();

      const ggDrink = screen.getByTestId('0-card-img');
      expect(ggDrink).toBeInTheDocument();
    });
  });
  it('', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/drinks');
    });

    const searchTopBtn = screen.getByTestId(searchButtonId);
    expect(searchTopBtn).toBeInTheDocument();
    userEvent.click(searchTopBtn);

    const searchInput = screen.getByTestId(searchInputId);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'water');

    const nameSearchBtn = screen.getByTestId(nameRadioId);
    expect(nameSearchBtn).toBeInTheDocument();
    userEvent.click(nameSearchBtn);

    const searchBar = screen.getByTestId(submitId);
    expect(searchBar).toBeInTheDocument();
    userEvent.click(searchBar);

    // await waitFor(() => {
    //   const currentPath = history.location.pathname;
    //   expect(currentPath).toBe('/drinks/178332');
    // });
  });
  it('', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals');
    });

    const searchTopBtn = await screen.findByTestId(searchButtonId);
    userEvent.click(searchTopBtn);

    const searchInput = await screen.findByTestId(searchInputId);
    userEvent.type(searchInput, 'a');

    const firstLetterBtn = screen.getByTestId(firstLetterID);
    userEvent.click(firstLetterBtn);

    const searchBtn = screen.getByTestId('exec-search-btn');
    userEvent.click(searchBtn);

    const chicken = await screen.findByText('Brown Stew Chicken');
    expect(chicken).toBeInTheDocument();
  });
});
