import React, { useContext } from 'react';
import Context from '../context/context';

function SearchBar() {
  const { setResults, handleFilter } = useContext(Context);

  return (
    <div>
      <label>
        Ingredient
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="input-radio"
          id="Ingredient"
          onChange={ (e) => setResults(e.target.id) }
        />
      </label>
      <label>
        Name
        <input
          type="radio"
          data-testid="name-search-radio"
          name="input-radio"
          id="Name"
          onChange={ (e) => setResults(e.target.id) }
        />
      </label>
      <label>
        First letter
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="input-radio"
          id="First letter"
          onChange={ (e) => setResults(e.target.id) }
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleFilter }
      >
        Buscar

      </button>
    </div>
  );
}

export default SearchBar;
