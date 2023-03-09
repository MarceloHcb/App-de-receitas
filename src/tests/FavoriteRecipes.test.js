import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import Provider from '../context/Provider';

const path = '/favorite-recipes';
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

describe('', () => {
  afterEach(() => jest.resetAllMocks());
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
