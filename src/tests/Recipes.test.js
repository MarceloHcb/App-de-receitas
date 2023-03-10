import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../helpers/renderWith';
import Provider from '../context/Provider';
import fetch from '../../cypress/mocks/fetch';

describe('Testa componente Recipes', () => {
  beforeEach(() => {
    global.fetch = jest.fn(fetch);
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
      history.push('/meals');
    });

    const chickenBtn = await screen.findByRole('button', {
      name: /chicken/i,
    });
    expect(chickenBtn).toBeInTheDocument();
    userEvent.click(chickenBtn);

    const chickenHandi = await screen.findByRole('img', {
      name: /chicken handi/i,
    });
    expect(chickenHandi).toBeInTheDocument();

    const allBtn = screen.getByRole('button', {
      name: /all/i,
    });
    expect(allBtn).toBeInTheDocument();

    userEvent.click(allBtn);

    const corbaBtn = await screen.findByRole('button', {
      name: /corba corba/i,
    });
    expect(corbaBtn).toBeInTheDocument();
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

    const cockTailsBtn = await screen.findByRole('button', {
      name: /cocktail/i,
    });
    expect(cockTailsBtn).toBeInTheDocument();

    userEvent.click(cockTailsBtn);

    const a1Btn = await screen.findByRole('button', {
      name: /a1/i,
    });
    expect(a1Btn).toBeInTheDocument();

    const allBtn = screen.getByRole('button', {
      name: /all/i,
    });
    expect(allBtn).toBeInTheDocument();

    userEvent.click(allBtn);

    const b52Btn = await screen.findByRole('button', {
      name: /b-52/i,
    });
    expect(b52Btn).toBeInTheDocument();
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

    const shakeBtn = await screen.findByRole('button', {
      name: /shake/i,
    });
    expect(shakeBtn).toBeInTheDocument();

    userEvent.click(shakeBtn);

    const avalancheBtn = await screen.findByRole('button', {
      name: /avalanche/i,
    });
    expect(avalancheBtn).toBeInTheDocument();

    userEvent.click(shakeBtn);

    const aceBtn = await screen.findByRole('button', {
      name: /ace/i,
    });

    expect(aceBtn).toBeInTheDocument();
  });
});
