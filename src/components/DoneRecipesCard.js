import React from 'react';
import shareIcon from '../images/shareIcon.svg';

const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
console.log(doneRecipes);

function DoneRecipesCard() {
  return (
    <div>
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-meal-btn">Meal</button>
      <button type="button" data-testid="filter-by-drink-btn">Drink</button>
      {doneRecipes?.map((el, index) => (
        <div key={ index }>
          <h3 data-testid={ `${index}-horizontal-name` }>{el.name}</h3>
          <img src={ el.image } alt="" data-testid={ `${index}-horizontal-image` } />
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

          >
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
