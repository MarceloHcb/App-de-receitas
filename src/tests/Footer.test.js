import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Provider from '../context/Provider';
import Profile from '../pages/Profile';
import { renderWithRouter } from '../helpers/renderWith';

describe('', () => {
  test('', () => {
    const { history } = renderWithRouter(
      <Provider>
        <Profile />
      </Provider>,
      { initialEntries: ['/profile'] },
    );
    const drinksBottomBtn = screen.getByTestId('drinks-bottom-btn');
    const mealsBottomBtn = screen.getByTestId('meals-bottom-btn');
    expect(drinksBottomBtn).toBeInTheDocument();
    expect(mealsBottomBtn).toBeInTheDocument();
    userEvent.click(drinksBottomBtn);
    const currentLocation = history.location.pathname;
    expect(currentLocation).toBe('/drinks');
  });
  test('', () => {
    const { history } = renderWithRouter(
      <Provider>
        <Profile />
      </Provider>,
      { initialEntries: ['/profile'] },
    );
    const mealsBottomBtn = screen.getByTestId('meals-bottom-btn');
    expect(mealsBottomBtn).toBeInTheDocument();
    userEvent.click(mealsBottomBtn);
    const currentLocation = history.location.pathname;
    expect(currentLocation).toBe('/meals');
  });
});
