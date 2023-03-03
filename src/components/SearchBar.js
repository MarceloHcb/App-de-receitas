import { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import searchApi from '../API/API';

function SearchBar({ inputSearch }) {
  const [results, setResults] = useState('');
  const history = useHistory();

  const handleChange = ({ target }) => {
    const { value } = target;

    setResults(value);
  };

  const returnedData = (data) => {
    if (Object.keys(data).length === 1) {
      const route = history.location.pathname;
      if (route === '/meals') {
        const id = data.meals[0].idMeal;
        const redirection = `${route}/${id}`;
        history.push(redirection);
      } else {
        const id = data.drinks[0].idDrink;
        const redirection = `${route}/${id}`;
        history.push(redirection);
      }
    }
  };

  const handleSearch = async (route) => {
    let data;
    switch (results) {
    case 'Ingredient':
      data = await searchApi(`filter.php?i=${inputSearch}`, route);
      returnedData(data);
      break;
    case 'Name':
      data = await searchApi(`search.php?s=${inputSearch}`, route);
      returnedData(data);
      break;

    default:
      if (inputSearch.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        data = await searchApi(`search.php?f=${inputSearch}`, route);
        returnedData(data);
      }
      break;
    }
  };

  return (
    <form>
      <label htmlFor="Ingredient">
        Ingrediente
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="results"
          id="Ingredient"
          value="Ingredient"
          onChange={ handleChange }
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
        onClick={ () => handleSearch(history.location.pathname) }
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
