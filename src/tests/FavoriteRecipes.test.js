import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import Provider from '../context/Provider';

const favoriteRecipeMock = [{
  alcoholicOrNot: 'Alcoholic',
  category: 'Cocktail',
  id: '178319',
  image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  name: 'Aquamarine',
  nationality: '',
  type: 'drink',
},
{
  id: '52775',
  alcoholicOrNot: '',
  category: 'Vegan',
  image: 'https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg',
  name: 'Vegan Lasagna',
  nationality: 'Italian',
  type: 'meal',
}];

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});
const path = '/favorite-recipes';
const drinkPath = '/drinks/15997';
const favoriteBtn = 'favorite-btn';
const name0 = '0-horizontal-name';
// const element0 =
const title0 = '0-recommendation-title';
const btn0 = '0-horizontal-share-btn';
describe('', () => {
  beforeEach(() => {
    jest.spyOn(navigator.clipboard, 'writeText').mockReturnValue({
      writeText: jest.fn(),
    });
    localStorage.clear();
  });
  afterEach(() => jest.resetAllMocks());
  it('', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(drinkPath);
    });
    await waitFor(() => {
      screen.getByTestId(title0);
    });
    const shakeBtn = screen.getByTestId('share-btn');
    userEvent.click(shakeBtn);

    const message = screen.getByText(/link copied!/i);
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    await waitFor(() => {
      expect(message).toHaveTextContent('');
    }, { timeout: 4000 });
    const local = localStorage.getItem('favoriteRecipes');
    expect(local).toBeNull();
    userEvent.click(screen.getByTestId(favoriteBtn));
    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toHaveLength(1);
    });
    console.log(history.location.pathname);
    userEvent.click(screen.getByTestId(favoriteBtn));
    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toHaveLength(0);
    });
    userEvent.click(screen.getByTestId(favoriteBtn));
  });
  it('', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(drinkPath);
    });
    await waitFor(() => {
      screen.getByTestId(title0);
    });
    const favoriteButn = screen.getByTestId(favoriteBtn);
    userEvent.click(favoriteButn);
    act(() => {
      history.push(path);
    });
    expect(screen.getByTestId(btn0)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(btn0));

    const message = screen.getByText(/link copied!/i);
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    await waitFor(() => {
      expect(message).toHaveTextContent('');
    }, { timeout: 4000 });
    expect(screen.getByTestId(name0)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(name0));
    expect(history.location.pathname).toBe(drinkPath);

    // expect(screen.getByTestId('profile-top-btn')).toBeInTheDocument();
  });

  it('', async () => {
    // localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeMock));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('meals/52844');
    });
    await waitFor(() => {
      screen.getByTestId('0-recommendation-title');
    });
    const favoriteBtnn = screen.getByTestId('favorite-btn');
    userEvent.click(favoriteBtnn);
    act(() => {
      history.push(path);
    });
    expect(screen.getByTestId(btn0)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(btn0));

    const message = screen.getByText(/link copied!/i);
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    await waitFor(() => {
      expect(message).toHaveTextContent('');
    }, { timeout: 4000 });
    expect(screen.getByTestId(name0)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(name0));
    expect(history.location.pathname).toBe('/meals/52844');
  });
  it('', () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeMock));

    act(() => {
      history.push(path);
    });

    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual(favoriteRecipeMock);
  });
  it('', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeMock));

    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(path);
    });

    expect(screen.getByTestId('filter-by-all-btn')).toBeInTheDocument();
  });
  it('', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeMock));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(path);
    });

    userEvent.click(screen.getByTestId(`${0}-horizontal-favorite-btn`));
    userEvent.click(screen.getByTestId(`${0}-horizontal-favorite-btn`));
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });
  it('', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeMock));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(path);
    });

    userEvent.click(screen.getByTestId('filter-by-meal-btn'));
    expect(screen.getAllByRole('img')).toHaveLength(4);
  });
  it('', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeMock));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(path);
    });

    userEvent.click(screen.getByTestId('filter-by-drink-btn'));
    expect(screen.getAllByRole('img')).toHaveLength(4);
  });
  it('', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeMock));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(path);
    });

    userEvent.click(screen.getByTestId('filter-by-all-btn'));
    expect(screen.getAllByRole('img')).toHaveLength(7);
  });
  it('', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeMock));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(path);
    });

    expect(screen.getByRole('button', {
      name: /aquamarine/i,
    })).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', {
      name: /aquamarine/i,
    }));

    expect(history.location.pathname).toBe('/drinks/178319');
  });
  it('', () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeMock));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(path);
    });

    expect(screen.getByRole('button', {
      name: /vegan lasagna/i,
    })).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', {
      name: /vegan lasagna/i,
    }));

    expect(history.location.pathname).toBe('/meals/52775');
  });
});
