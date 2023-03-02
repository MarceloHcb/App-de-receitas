import React from 'react';

function SearchBar() {
  return (
    <div>
      <label>
        Ingredient
        <input type="radio" data-testid="ingredient-search-radio" name="input-radio" />
      </label>
      <label>
        Name
        <input type="radio" data-testid="name-search-radio" name="input-radio" />
      </label>
      <label>
        First letter
        <input type="radio" data-testid="first-letter-search-radio" name="input-radio" />
      </label>

      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </div>
  );
}

export default SearchBar;
