import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import '../css/recipeinprogress.css';

const data = JSON.parse(localStorage.getItem('doneRecipes'));

function DoneRecipesCard() {
  const [message, setMessage] = useState('');
  const [doneRecipes, setRecipesDone] = useState(data);
  const timeNumber = 3000;
  if (message) {
    setTimeout(() => setMessage(''), timeNumber);
  }

  const handleClick = (param) => {
    if (param === 'All') {
      setRecipesDone(data);
    }
    if (param === 'Meals') {
      setRecipesDone(doneRecipes?.filter(({ type }) => type === 'meal'));
    }
    if (param === 'Drinks') {
      setRecipesDone(doneRecipes?.filter(({ type }) => type === 'drink'));
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => handleClick('All') }
      >
        All

      </button>
      <button
        type="button"
        data-testid="filter-by-meal-btn"
        onClick={ () => handleClick('Meals') }
      >
        Meals

      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => handleClick('Drinks') }
      >
        Drinks

      </button>
      {doneRecipes?.map((el, index) => (
        <div key={ index }>
          <Link to={ `/${el.type}s/${el.id}` }>
            <h3 data-testid={ `${index}-horizontal-name` }>{el.name}</h3>
            <img
              src={ el.image }
              className="img"
              alt=""
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
          {el.alcoholicOrNot
          && <h4 data-testid={ `${index}-horizontal-top-text` }>{el.alcoholicOrNot}</h4>}
          <h4 data-testid={ `${index}-horizontal-done-date` }>{el.doneDate}</h4>
          <h4 data-testid={ `${index}-horizontal-tags` }>{el.tags}</h4>
          <h4 data-testid={ `${index}-horizontal-top-text` }>
            {' '}
            {el.nationality}
            {' '}
            -
            {' '}
            {el.category}
            {' '}
          </h4>
          <h4>{el.doneDate}</h4>

          <button
            type="button"
            onClick={ () => {
              navigator.clipboard.writeText(`http://localhost:3000/${el.type}s/${el.id}`)
                .then(() => setMessage('Link copied!'));
            } }
          >
            <p style={ { color: 'red' } }>{message}</p>
            <img
              src={ shareIcon }
              alt="share"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          </button>
          <ul>
            {el.tags?.map((tag, keys) => (
              <li key={ keys } data-testid={ `${index}-${tag}-horizontal-tag` }>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  );
}

export default DoneRecipesCard;
