import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../css/footer.css';
import Context from '../context/Context';

export default function Footer() {
  const history = useHistory();
  const { setRoute } = useContext(Context);
  const handleClick = (param) => {
    if (param === 'meals') {
      history.push('/meals');
      setRoute('/meals');
    }
    if (param === 'drinks') {
      history.push('/drinks');
      setRoute('/drinks');
    }
  };
  return (
    <div
      data-testid="footer"
      className="footer"
    >
      <button onClick={ () => handleClick('drinks') }>
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Drink"
        />
      </button>
      <button onClick={ () => handleClick('meals') }>
        <img
          data-testid="meals-bottom-btn"
          src={ mealIcon }
          alt="Meal"
        />
      </button>
    </div>
  );
}
