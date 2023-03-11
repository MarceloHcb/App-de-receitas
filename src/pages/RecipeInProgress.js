import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../css/recipeinprogress.css';
import { LocalRecipesInProgress, LocalStorage } from '../helpers/localStorage';

function RecipeInProgress() {
  const history = useHistory();
  const params = useParams();
  const pathname = history.location.pathname.includes('meals') ? 'meals' : 'drinks';

  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'))
    ?.filter(({ id }) => id === params.id).map(({ targetId }) => targetId) || [];
  const [checkeds, setChecked] = useState([...getLocal]);
  const [loading, setLoading] = useState(true);

  const { id } = params;
  const localFavoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favorite = localFavoritesRecipes
    ?.some((el) => (el.id === id));
  const [isFavorite, setIsFavorite] = useState(favorite);
  const timeNumber = 3000;
  if (message) {
    setTimeout(() => setMessage(''), timeNumber);
  }
  const resultData = data[pathname];

  const handleIngredientsChange = ({ target }) => {
    const { checked } = target;
    if (checkeds?.includes(target.id)) {
      setChecked(checkeds.filter((el) => el !== target.id));
      LocalRecipesInProgress(checked, target.id, id);
      return;
    }
    setChecked([...checkeds, target.id]);
    LocalRecipesInProgress(checked, target.id, id);
  };
  useEffect(() => {
    const progressFetch = async () => {
      setLoading(true);
      const url = pathname === 'meals' ? 'https://www.themealdb.com' : 'https://www.thecocktaildb.com';
      const response = await fetch(`${url}/api/json/v1/1/lookup.php?i=${id}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    progressFetch();
  }, [id, pathname]);
  console.log(resultData);
  console.log(history.location.pathname.replace('/in-progress', ''));
  const isChecked = (el) => checkeds?.includes(el) || false;
  return (
    <div className="container-progress">
      <h1 className="title-progress">RECIPES IN PROGRESS</h1>
      {!loading
        && (
          <div className="container">
            <h1 data-testid="recipe-title" className="recipe-title">
              { resultData[0].strMeal
        || resultData[0].strDrink }
            </h1>
            <img
              className="img"
              src={ pathname === 'meals'
                ? resultData[0].strMealThumb : resultData[0].strDrinkThumb }
              data-testid="recipe-photo"
              alt="recipe"
            />
            <h2 className="deltails-titles">INGREDIENTS</h2>
            <ul className="ingredients-progress">
              {Object.keys(resultData[0])
                .filter((el) => el.includes('Ingredient'))
                .map((el, index) => {
                  if (resultData[0][el] !== '' && resultData[0][el] !== null) {
                    return (
                      <li
                        key={ index }
                      >
                        <label
                          htmlFor={ el }
                          style={ { textDecoration: isChecked(el)
                            ? 'line-through solid rgb(0, 0, 0)' : '' } }
                          data-testid={ `${index}-ingredient-step` }

                        >
                          <input
                            type="checkbox"
                            id={ el }
                            checked={ isChecked(el) }
                            className="input-checkbox"
                            onChange={ handleIngredientsChange }
                          />

                          { resultData[0][el]}

                        </label>
                      </li>
                    );
                  }
                  return null;
                })}

            </ul>

            <h2
              data-testid="recipe-category"
              className="deltails-titles"
            >
              { resultData[0].strCategory }

            </h2>
            <h3 className="deltails-titles">INSTRUCTIONS</h3>
            {resultData[0].strInstructions
              .split('  ')
              .map((el, index) => (el.includes('.')
                ? (<p key={ index }>{el}</p>)
                : (
                  <span key={ index }>
                    {el}
                  </span>
                )
              ))}
            <p data-testid="instructions">{ resultData[0].strInstructions }</p>
            <button
              className="btn-share"
              data-testid="share-btn"
              onClick={ () => {
                navigator.clipboard.writeText(`http://localhost:3000${history.location.pathname.replace('/in-progress', '')}`)
                  .then(() => setMessage('Link copied!'));
              } }
            >
              <img src={ shareIcon } alt="share" />
              <p style={ { color: 'red' } }>{message}</p>
            </button>
            <button
              type="button"
              data-testid="finish-recipe-btn"
              className="button-start"
            >
              Finalizar Receita

            </button>
            <button
              onClick={ () => LocalStorage(...data[pathname], id, setIsFavorite) }
              className="btn-favorite"
            >
              <img
                data-testid="favorite-btn"
                src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
                alt="favorite"
              />

            </button>
          </div>
        )}

    </div>
  );
}

export default RecipeInProgress;
