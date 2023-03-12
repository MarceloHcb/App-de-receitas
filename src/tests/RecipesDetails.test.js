import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import Provider from '../context/Provider';

const mockedDrinkTest = {
  idDrink: '178319',
  strDrink: 'Aquamarine',
  strCategory: 'Cocktail',
  strAlcoholic: 'Alcoholic',
  strInstructions: 'Shake well in a shaker with ice.\r\nStrain in a martini glass.',
  strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  strIngredient1: 'Hpnotiq',
  strIngredient2: 'Pineapple Juice',
  strIngredient3: 'Banana Liqueur',
  strMeasure1: '2 oz',
  strMeasure2: '1 oz',
  strMeasure3: '1 oz',
};
const mockedMealTest = {
  idMeal: '52775',
  strMeal: 'Vegan Lasagna',
  strCategory: 'Vegan',
  strInstructions: '1) Preheat oven to 180 degrees celcius. \r\n2) Boil vegetables for 5-7 minutes, until soft. Add lentils and bring to a gentle simmer, adding a stock cube if desired. Continue cooking and stirring until the lentils are soft, which should take about 20 minutes. \r\n3) Blanch spinach leaves for a few minutes in a pan, before removing and setting aside. \r\n4) Top up the pan with water and cook the lasagne sheets. When cooked, drain and set aside.\r\n5) To make the sauce, melt the butter and add the flour, then gradually add the soya milk along with the mustard and the vinegar. Cook and stir until smooth and then assemble the lasagne as desired in a baking dish. \r\n6) Bake in the preheated oven for about 25 minutes.',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg',
  strYoutube: 'https://www.youtube.com/watch?v=VU8cXvlGbvc',
  strIngredient1: 'green red lentils',
  strIngredient2: 'carrot',
  strIngredient3: 'onion',
  strIngredient4: 'zucchini',
  strIngredient5: 'coriander',
  strIngredient6: 'spinach',
  strIngredient7: 'lasagne sheets',
  strIngredient8: 'vegan butter',
  strIngredient9: 'flour',
  strIngredient10: 'soya milk',
  strIngredient11: 'mustard',
  strIngredient12: 'vinegar',
  strMeasure1: '1 cups',
  strMeasure2: '1',
  strMeasure3: '1',
  strMeasure4: '1 small',
  strMeasure5: 'sprinking',
  strMeasure6: '150g',
  strMeasure7: '10',
  strMeasure8: '35g',
  strMeasure9: '4 tablespoons',
  strMeasure10: '300ml',
  strMeasure11: '1.5 teaspoons',
  strMeasure12: '1 teaspoon',
};
const recipesSaveinLocalStorage = [{
  alcoholicOrNot: 'Alcoholic',
  category: 'Cocktail',
  id: '178319',
  image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  name: 'Aquamarine',
  nationality: '',
  type: 'drink',
  doneDate: '03/03/2023',
  tags: [1, 2, 3, 4, 5],
}];
const pathDrinks = '/drinks/178319';
const favBtnId = 'favorite-btn';

describe('Testa component Recipe Details', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => ({ drinks: [mockedDrinkTest] }),
    }));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(pathDrinks);
    });

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /aquamarine/i })).toBeInTheDocument();
      expect(screen.getByTestId('0-ingredient-name-and-measure')).toBeInTheDocument();
      expect(screen.getByTestId('1-ingredient-name-and-measure')).toBeInTheDocument();
      expect(screen.getByTestId('2-ingredient-name-and-measure')).toBeInTheDocument();
      expect(screen.getByTestId('instructions')).toBeInTheDocument();
      expect(screen.getByText(
        /shake well in a shaker with ice\. strain in a martini glass\./i,
      )).toBeInTheDocument();
    });
  });
  it('', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => ({ meals: [mockedMealTest] }),
    }));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals/52775');
    });

    await waitFor(() => {
      expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
      expect(screen.getByTestId('0-ingredient-name-and-measure')).toBeInTheDocument();
      expect(screen.getByTestId('instructions')).toBeInTheDocument();
      expect(screen.getByTestId('video')).toBeInTheDocument();
      expect(screen.getByTestId('0-recommendation-card')).toBeInTheDocument();
      expect(screen.getByTestId('share-btn')).toBeInTheDocument();
      expect(screen.getByTestId('start-recipe-btn')).toBeInTheDocument();
      expect(screen.getByTestId(favBtnId)).toBeInTheDocument();
    });
  });
  it('', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => ({ meals: [mockedMealTest] }),
    }));
    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push('/meals/52775');
    });

    const favRecipe = screen.getByTestId(favBtnId);
    expect(favRecipe).toBeInTheDocument();
    expect(favRecipe.src).toBe('http://localhost/whiteHeartIcon.svg');
    userEvent.click(screen.getByTestId(favBtnId));
    expect(favRecipe.src).toBe('http://localhost/blackHeartIcon.svg');
    const shareBtn = screen.getByTestId('share-btn');
    expect(shareBtn).toBeInTheDocument();
    // expect(shareBtn.src).toBe('http://localhost:3000/static/media/shareIcon.87def1bd1dff9af9263f046c3b9bd31a.svg');
    userEvent.click(shareBtn);

    //  await waitFor(() => {
    //    const linkCopied = screen.getByText('link copied!');
    //    expect(linkCopied).toBeInTheDocument();
    //  });
  });
  it('', () => {
    global.fetch = jest.fn(async () => ({
      json: async () => ({ meals: [mockedDrinkTest] }),
    }));
    localStorage.setItem('doneRecipes', JSON.stringify(recipesSaveinLocalStorage));
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipesSaveinLocalStorage));
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipesSaveinLocalStorage));

    const { history } = renderWithRouter(
      <Provider>
        <App />
      </Provider>,
    );
    act(() => {
      history.push(pathDrinks);
    });
    expect(JSON.parse(localStorage.getItem('doneRecipes'))).toEqual(recipesSaveinLocalStorage);
    expect(JSON.parse(localStorage.getItem('inProgressRecipes'))).toEqual(recipesSaveinLocalStorage);
    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual(recipesSaveinLocalStorage);
  });
});
