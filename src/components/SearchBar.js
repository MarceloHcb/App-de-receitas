import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

function SearchBar({ inputSearch }) {
  const MEALS_URL = 'https://www.themealdb.com/api/json/v1/1/';
  const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

  const { setUrl, dataApi } = useContext(Context);
  const history = useHistory();

  const [results, setResults] = useState('');
  console.log(results);
  const handleChange = ({ target }) => {
    const { value } = target;
    setResults(value);
    // setSearchValue('');
  };
  // if (dataApi[page] === null) {
  //     global.alert('Sorry, we haven\'t found any recipes for these filters.');
  //     return true;
  //   }
  //   const renderRoute = (route) => {
  //   const page = route.replace('/', '');
  //   if (dataApi && dataApi?.meals.length === 1 && route === '/meals') {
  //     const id = dataApi.meals[0].idMeal;
  //     const redirection = `${route}/${id}`;
  //     return history.push(redirection);
  //   }
  //   if (dataApi && dataApi?.drinks.length === 1 && route === '/drinks') {
  //     const id = dataApi.drinks[0].idDrink;
  //     const redirection = `${route}/${id}`;
  //     return history.push(redirection);
  //   }
  // };

  const handleSearch = async (route) => {
    let url;
    if (route === '/meals') {
      url = MEALS_URL;
    }
    if (route === '/drinks') {
      url = DRINKS_URL;
    }

    switch (results) {
    case 'Ingredient':
      setUrl(`${url}filter.php?i=${inputSearch}`);
      //  renderRoute();
      break;
    case 'Name':
      setUrl(`${url}search.php?s=${inputSearch}`);
      //  renderRoute();
      break;
    case 'First letter':
      if (inputSearch.length !== 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      setUrl(`${url}search.php?f=${inputSearch}`);
      //  renderRoute();
      break;
    default:
      return true;
    }
  };
  console.log(dataApi);
  // if (!loading) {
  //   const route = history.location.pathname;
  //   const page = route.replace('/', '');
  //   if (dataApi[page] === null) {
  //     global.alert('Sorry, we haven\'t found any recipes for these filters.');
  //     return true;
  //   }
  //   if (dataApi.meals.length === 1 && route === '/meals') {
  //     const id = dataApi.meals[0].idMeal;
  //     const redirection = `${route}/${id}`;
  //     return history.push(redirection);
  //   }
  //   if (route === '/drinks' && dataApi.drinks.length === 1) {
  //     const id = dataApi.drinks[0].idDrink;
  //     const redirection = `${route}/${id}`;
  //     return history.push(redirection);
  //   }
  // }
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
