import React from 'react';

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
          <h4 data-testid={ `${index}-horizontal-top-text` }>{el.area || el.category}</h4>
          <h4 data-testid={ `${index}-horizontal-done-date` }>{el.doneDate}</h4>
          <h4 data-testid={ `${index}-horizontal-tags` }>{el.tags}</h4>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
          >
            share

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
