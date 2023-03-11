import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import '../css/searchBar.css';

function SearchBar({ inputSearch }) {
  const MEALS_URL = 'https://www.themealdb.com/api/json/v1/1/';
  const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

  const { setUrl } = useContext(Context);
  const history = useHistory();
  const [results, setResults] = useState('');
  const handleChange = ({ target }) => {
    const { value } = target;
    setResults(value);
  };

  const handleSearch = async (route) => {
    let url;
    if (route === '/meals') {
      url = MEALS_URL;
    }
    if (route === '/drinks') {
      url = DRINKS_URL;
    }

    if (results === 'Ingredient') {
      return setUrl(`${url}filter.php?i=${inputSearch}`);
    }
    if (results === 'Name') {
      return setUrl(`${url}search.php?s=${inputSearch}`);
    }
    if (inputSearch.length !== 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    return setUrl(`${url}search.php?f=${inputSearch}`);
    // switch (results) {
    // case 'Ingredient':
    //   setUrl(`${url}filter.php?i=${inputSearch}`);
    //   console.log(results);

    //   break;
    // case 'Name':
    //   setUrl(`${url}search.php?s=${inputSearch}`);

    //   break;
    // case 'First letter':
    //   if (inputSearch.length !== 1) {
    //     global.alert('Your search must have only 1 (one) character');
    //   }
    //   setUrl(`${url}search.php?f=${inputSearch}`);

    //   break;
    // default:
    //   return true;
    // }
  };

  return (
    <div>
      <form className="form">
        <label htmlFor="Ingredient" className="text-label">
          <input
            className="input-text"
            data-testid="ingredient-search-radio"
            type="radio"
            name="results"
            id="Ingredient"
            value="Ingredient"
            onChange={ handleChange }
          />
          Ingrediente
        </label>

        <label htmlFor="Name">
          <input
            className="input-text"
            type="radio"
            name="results"
            id="Name"
            value="Name"
            onChange={ handleChange }
            data-testid="name-search-radio"
          />
          Nome
        </label>

        <label htmlFor="First letter">
          <input
            className="input-text"
            type="radio"
            name="results"
            id="First letter"
            value="First letter"
            onChange={ handleChange }
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>

        <button
          className="btn btn-warning search_btn"
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => handleSearch(history.location.pathname) }
        >
          Buscar

        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  inputSearch: PropTypes.string.isRequired,
};

export default SearchBar;
