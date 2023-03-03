import { useState } from 'react';
import PropTypes from 'prop-types';
import searchApi from '../API/API';

function SearchBar({ inputSearch }) {
  const [results, setResults] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;

    setResults(value);
  };

  const handleSearch = () => {
    switch (results) {
    case 'Ingredient':
      searchApi(`filter.php?i=${inputSearch}`);
      break;
    case 'Name':
      searchApi(`search.php?s=${inputSearch}`);
      break;

    default:
      if (inputSearch.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        searchApi(`search.php?f=${inputSearch}`);
      }
      break;
    }
  };

  return (
    <form>
      <label htmlFor="Ingredient">
        Ingrediente
        <input
          type="radio"
          name="results"
          id="Ingredient"
          value="Ingredient"
          onChange={ handleChange }
          data-testid="ingredient-search-radio"
        />
      </label>

      <label htmlFor="Name">
        Nome
        <input
          type="radio"
          name="results"
          id="Name"
          value="Name"
          onChange={ handleChange }
          data-testid="name-search-radio"
        />
      </label>

      <label htmlFor="First letter">
        Primeira letra
        <input
          type="radio"
          name="results"
          id="First letter"
          value="First letter"
          onChange={ handleChange }
          data-testid="first-letter-search-radio"
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Buscar

      </button>
    </form>
  );
}

SearchBar.propTypes = {
  inputSearch: PropTypes.string.isRequired,
};

export default SearchBar;
