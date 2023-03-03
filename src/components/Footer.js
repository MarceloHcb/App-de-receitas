import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../css/footer.css';

export default function Footer() {
  const history = useHistory();
  return (
    <div
      data-testid="footer"
      className="footer"
    >
      <button onClick={ () => history.push('/drinks') }>
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Drink"
        />
      </button>
      <button onClick={ () => history.push('/meals') }>
        <img
          data-testid="meals-bottom-btn"
          src={ mealIcon }
          alt="Meal"
        />
      </button>
    </div>
  );
}
