import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Context from '../context/Context';
import '../css/recipeinprogress.css';

function RecipeInProgress() {
  const history = useHistory();
  const pathname = history.location.pathname.includes('meals') ? 'meals' : 'drinks';
  const params = useParams();
  const { dataApi } = useContext(Context);
  console.log(dataApi);
  const { id } = params;
  console.log(history.location.pathname);
  const idParam = history.location.pathname.includes('meals') ? 'idMeal' : 'idDrinks';
  const data = dataApi && dataApi[pathname].filter((el) => el[idParam] === id);
  console.log(data);
  console.log(id);

  return (
    <div className="container">
      <img
        src={ data[0].strDrinkThumb || data[0].strMealThumb }
        data-testid="recipe-photo"
        alt="recipe"
      />
      <h1 data-testid="recipe-title">{ data[0].strMeal || data[0].strDrink }</h1>
      <h2 data-testid="recipe-category">{ data[0].strCategory }</h2>
      <h3>Instructions</h3>
      {data[0].strInstructions
        .split(' ')
        .map((el, index) => (el.includes('.')
          ? (<p key={ index }>{el}</p>)
          : (
            <span key={ index }>
              {el}
            </span>
          )
        ))}
      <p data-testid="instructions">{ data[0].strInstructions }</p>
      <button
        type="button"
        data-testid="favorite-btn"
        className="button-start btn-share"
      >
        Favorite

      </button>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        className="button-start"
      >
        Finalizar Receita

      </button>
    </div>
  );
}

export default RecipeInProgress;
