import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import Provider from '../context/Provider';
import fetch from '../../cypress/mocks/fetch';

const mockLocalStorage = [{
  0: { id: '52771', targetId: '52771' },
}];

const pathMeals = '/meals/52977/in-progress';

describe('Testando Recipes in Progress', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetch);
    global.alert = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(pathMeals);
    });

    const titleH1 = screen.getByRole('heading', {
      name: /recipes in progress/i,
      level: 1,
    });
    expect(titleH1).toBeInTheDocument();

    const recipePhoto = await screen.findByTestId('recipe-photo');
    expect(recipePhoto).toBeInTheDocument();
  });
  it('', async () => {
    const { history, debug } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(pathMeals);
    });
    const checkboxInput = await screen.findAllByRole('checkbox');

    expect(checkboxInput.length).toBe(8);

    const finishRecipe = await screen.findByTestId('finish-recipe-btn');
    expect(finishRecipe).toBeInTheDocument();

    userEvent.click(checkboxInput[0]);
    localStorage.setItem('inProgressRecipes', JSON.stringify(mockLocalStorage));
    expect(JSON.parse(localStorage.getItem('inProgressRecipes'))).toEqual(mockLocalStorage);
    const ingredientStep = await screen.findByTestId('0-ingredient-step');
    expect(ingredientStep.style.textDecoration).toBe('line-through solid rgb(0, 0, 0)');
    userEvent.click(checkboxInput[0]);
    localStorage.setItem('inProgressRecipes', JSON.stringify([]));
    expect(JSON.parse(localStorage.getItem('inProgressRecipes'))).toStrictEqual([]);
    expect(ingredientStep.style.textDecoration).toBe('');
    userEvent.click(checkboxInput[0]);
    userEvent.click(checkboxInput[1]);
    userEvent.click(checkboxInput[2]);
    userEvent.click(checkboxInput[3]);
    userEvent.click(checkboxInput[4]);
    userEvent.click(checkboxInput[5]);
    userEvent.click(checkboxInput[6]);
    userEvent.click(checkboxInput[7]);
    expect(finishRecipe).toBeEnabled();
    userEvent.click(finishRecipe);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/done-recipes');
    });
    debug();
  });
  it('', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: () => {},
      },
    });
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(pathMeals);
    });

    const favBtn = await screen.findByTestId('favorite-btn');
    expect(favBtn).toBeInTheDocument();
    expect(favBtn.src).toBe('http://localhost/whiteHeartIcon.svg');
    userEvent.click(favBtn);
    expect(favBtn.src).toBe('http://localhost/blackHeartIcon.svg');

    const shareBtn = await screen.findByTestId('share-btn');
    expect(shareBtn).toBeInTheDocument();
    userEvent.click(shareBtn);

    const message = await screen.findByText('Link copied!');
    expect(message).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Link copied!')).toBe(null);
    }, { timeout: 4000 });
  });
  it('', async () => {
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/drinks/178319/in-progress');
    });

    const recipeTitle = await screen.findByTestId('recipe-title');
    expect(recipeTitle).toBeInTheDocument();

    const aquamarineDrink = await screen.findByText('Aquamarine');
    expect(aquamarineDrink);

    const checkboxInput = await screen.findAllByRole('checkbox');
    expect(checkboxInput.length).toBe(3);
  });
});
