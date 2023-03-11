import { act, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import Provider from '../context/Provider';
import fetch from '../../cypress/mocks/fetch';

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
      history.push('/meals/52977/in-progress');
    });

    const titleH1 = screen.getByRole('heading', {
      name: /recipes in progress/i,
    });
    expect(titleH1).toBeInTheDocument();

    const recipePhoto = await screen.findByTestId('recipe-photo');
    expect(recipePhoto).toBeInTheDocument();
  });
});
