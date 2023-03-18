import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Provider from '../context/Provider';
import { renderWithRouter } from '../helpers/renderWith';

const obj = {
  alcoholicOrNot: '',
  category: 'Goat',
  doneDate: '2023-03-14T23:56:58.546Z',
  id: '52968',
  image: 'https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg',
  name: 'Mbuzi Choma (Roasted Goat)',
  nationality: 'Kenyan',
  tags: ['BBQ', 'Meat'],
  type: 'meal',
};
const drinkObj = {
  alcoholicOrNot: 'Alcoholic',
  category: 'Shot',
  doneDate: '2023-03-18T22:02:19.257Z',
  id: '14610',
  image: 'https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg',
  name: 'ACID',
  nationality: '',
  tags: [],
  type: 'drink',
};

const doneRecipes = '/done-recipes';
describe('Testa a páginia de receitas prontas', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(obj),
    }));
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Verifica se a página renderiza corretamente o título', () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
      { initialEntries: [doneRecipes] },
    );
    const { pathname } = history.location;
    expect(pathname).toBe(doneRecipes);
    expect(screen.getByRole('heading', { name: /done recipes/i })).toBeInTheDocument();
  });
  it('Verifica se a página renderiza corretamente os botões', async () => {
    localStorage.setItem('doneRecipes', JSON.stringify([obj]));
    renderWithRouter(
      <Provider>
        <App />
      </Provider>,
      { initialEntries: [doneRecipes] },
    );

    const profileBtn = screen.getByTestId('profile-top-btn');
    const allFilterBtn = screen.getByTestId('filter-by-all-btn');
    const mealsFilterBtn = screen.getByTestId('filter-by-meal-btn');
    const drinkFilterBtn = screen.getByTestId('filter-by-drink-btn');
    expect(profileBtn).toBeInTheDocument();
    expect(allFilterBtn).toBeInTheDocument();
    expect(mealsFilterBtn).toBeInTheDocument();
    expect(drinkFilterBtn).toBeInTheDocument();
    expect(screen.getByTestId('drinks-bottom-btn')).toBeInTheDocument();
    expect(screen.getByTestId('meals-bottom-btn')).toBeInTheDocument();
    userEvent.click(allFilterBtn);
    userEvent.click(mealsFilterBtn);
    userEvent.click(drinkFilterBtn);
    expect(JSON.parse(localStorage.getItem('doneRecipes'))).toEqual([obj]);
  });
  it('Verifica se a página renderiza corretamente os botões', async () => {
    localStorage.setItem('doneRecipes', JSON.stringify([drinkObj]));
    renderWithRouter(
      <Provider>
        <App />
      </Provider>,
      { initialEntries: [doneRecipes] },
    );

    // expect(screen.getByTestId('0-horizontal-image')).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('doneRecipes'))).toEqual([drinkObj]);
  });
});
