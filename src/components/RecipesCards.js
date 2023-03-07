import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import '../css/recipes.css';

function RecipesCards({ dataApi, selectedOption }) {
  const { loading } = useContext(Context);
  const history = useHistory();
  console.log(history.location);
  const pathnames = history.location.pathname;
  const max = 12;
  if (loading) {
    return (<h2>Loading...</h2>);
  }

  const page = pathnames.replace('/', '');
  if (dataApi && dataApi[page] === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return;
  }
  if (Number(dataApi?.meals?.length) === 1 && pathnames === '/meals') {
    const id = dataApi?.meals[0].idMeal;
    history.push(`${history.location.pathname}/${id}`);
    return;
  }
  if (Number(dataApi?.drinks?.length) === 1 && pathnames === '/drinks') {
    const id = dataApi?.drinks[0].idDrink;
    history.push(`${history.location.pathname}/${id}`);
    return;
  }
  const recipes = selectedOption === 'drinks' ? dataApi?.drinks : dataApi?.meals;

  return (
    <div className="meals">
      {recipes && recipes.slice(0, max).map((recipe, index) => (
        <div
          key={ recipe === 'meals' ? recipe.idMeal : recipe.idDrink }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            className="recipe-card-img"
            src={ selectedOption === 'meals'
              ? recipe.strMealThumb : recipe.strDrinkThumb }
            alt={ recipe.strMeal }
            data-testid={ `${index}-card-img` }
          />
          <p data-testid={ `${index}-card-name` }>
            {selectedOption === 'drinks' && recipe.strDrink }
            {selectedOption === 'meals' && recipe.strMeal }
          </p>
        </div>
      ))}
    </div>
  );
}

RecipesCards.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  dataApi: PropTypes.shape({
    slice: PropTypes.func,
    map: PropTypes.func,
    meals: PropTypes.arrayOf(
      PropTypes.shape({
        idMeal: PropTypes.string,
        strMealThumb: PropTypes.string,
        strMeal: PropTypes.string,
      }),
    ),
    drinks: PropTypes.arrayOf(
      PropTypes.shape({
        idDrink: PropTypes.string,
        strDrinkThumb: PropTypes.string,
        strDrink: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default RecipesCards;
