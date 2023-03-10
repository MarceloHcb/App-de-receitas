import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../css/recipeinprogress.css';
import { LocalStorage } from '../helpers/localStorage';

function RecipeInProgress() {
  const history = useHistory();
  const params = useParams();
  const pathname = history.location.pathname.includes('meals') ? 'meals' : 'drinks';
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = params;
  console.log(pathname);
  const localFavoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favorite = localFavoritesRecipes
    ?.some((el) => (el.id === id));
  const [isFavorite, setIsFavorite] = useState(favorite);
  const timeNumber = 3000;
  if (message) {
    setTimeout(() => setMessage(''), timeNumber);
  }
  const resultData = data[pathname];
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
  return (
    <div>

      {loading
        ? <h1>Loading...</h1> : (
          <div className="container">
            <img
              src={ pathname === 'meals'
                ? resultData[0].strMealThumb : resultData[0].strDrinkThumb }
              data-testid="recipe-photo"
              alt="recipe"
            />
            <h1 data-testid="recipe-title">
              { resultData[0].strMeal
        || resultData[0].strDrink }
            </h1>
            <h2>Ingredients</h2>
            <ul>
              {Object.keys(resultData[0])
                .filter((el) => el.includes('Ingredient'))
                .map((el, index) => {
                  if (resultData[0][el] !== '' && resultData[0][el] !== null) {
                    return (
                      <li
                        key={ index }
                        data-testid={ `${index}-ingredient-step` }
                      >
                        <label htmlFor={ `checkbox${index}` }>
                          <input
                            type="checkbox"
                            id={ `checkbox${index}` }
                            className="input-checkbox"
                          />
                          { resultData[0][el]}
                        </label>
                      </li>
                    );
                  }
                  return null;
                })}

            </ul>

            <h2 data-testid="recipe-category">{ resultData[0].strCategory }</h2>
            <h3>Instructions</h3>
            {resultData[0].strInstructions
              .split(' ')
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
              className="button-start btn-share"
              data-testid="share-btn"
              onClick={ () => {
                navigator.clipboard.writeText(`http://localhost:3000${history.location.pathname}`)
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
              className="button-start btn-favorite"
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
