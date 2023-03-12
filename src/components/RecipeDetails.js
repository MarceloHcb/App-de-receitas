import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CurrentRecipes from './CurrentRecipes';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
// import { LocalRecipesInProgress, LocalStorage } from '../helpers/localStorage';
import { LocalStorage } from '../helpers/localStorage';

function RecipeDetails() {
  const history = useHistory();
  const pathname = history.location.pathname.includes('meals') ? 'meals' : 'drinks';
  const params = useParams();
  const { id } = params;
  const localFavoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const isFavorite = localFavoritesRecipes
    ?.some((el) => (el.id === id));
  const [message, setMessage] = useState('');
  const [data, setData] = useState({ [pathname]: [{}] });
  const [favorite, setIsFavorite] = useState(isFavorite);
  const [recommendationsData, setRecommendationsData] = useState({ [pathname]: [{}] });
  const [doneRecipes, setDoneRecipes] = useState([]);
  const timeNumber = 3000;
  const fetchUrl = async (url, setFunc) => {
    const response = await fetch(url);
    const result = await response.json();
    setFunc(result);
    return result;
  };
  if (message) {
    setTimeout(() => setMessage(''), timeNumber);
  }
  useEffect(() => {
    const updatingInformat = async () => {
      if (history.location.pathname.includes('meals')) {
        await fetchUrl(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, setData);
        await fetchUrl('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', setRecommendationsData);
      }
      if (history.location.pathname.includes('drinks')) {
        await fetchUrl(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, setData);
        await fetchUrl('https://www.themealdb.com/api/json/v1/1/search.php?s=', setRecommendationsData);
      }
    };

    updatingInformat();
    const getDoneRecipes = localStorage.getItem('doneRecipes');
    const localDoneRecipes = getDoneRecipes ? JSON.parse(getDoneRecipes) : [];
    setDoneRecipes(localDoneRecipes);
  }, [history.location.pathname, id, pathname]);

  const ingredientsKeys = Object.keys(data[pathname][0])
    .filter((el) => el.includes('strIngredient'));
  const ingredients = ingredientsKeys.map((el) => data[pathname][0][el])
    .filter((el) => el !== null && el !== '');
  const measureKeys = Object.keys(data[pathname][0])
    .filter((el) => el.includes('strMeasure'));
  const measure = measureKeys.map((el) => data[pathname][0][el])
    .filter((el) => el !== null && el !== '');
  // const inprogressRecipes = JSON.parse(localStorage
  //   .getItem('inProgressRecipes'));
  // { inprogressRecipes?.some(({ targetId }) => Number(targetId)
  //    === Number(id)) ? 'Continue Recipe' : 'Start Recipe'; }
  return (
    <div>
      <div className="container-recipes">
        <CurrentRecipes
          data={ data }
          ingredients={ ingredients }
          measure={ measure }
          pathname={ pathname }
          recommendationsData={ recommendationsData }
        />
      </div>
      {
        doneRecipes.some((el) => (el.id === id))
          ? '' : (
            <>
              <button
                className="button-start"
                data-testid="start-recipe-btn"
                onClick={ () => {
                  history.push({
                    pathname: `${id}/in-progress`,
                    state: data,
                  });
                } }
              >
                {/* { inprogressRecipes?.some((el) => Number(el.id)
     === Number(id)) ? 'Continue Recipe' : 'Start Recipe'} */}
                {'Continue Recipe' || 'Start Recipe'}
              </button>
              <button
                className="btn-share"
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
                onClick={ () => LocalStorage(...data[pathname], id, setIsFavorite) }
                className="btn-favorite"
              >
                <img
                  data-testid="favorite-btn"
                  src={ favorite ? blackHeartIcon : whiteHeartIcon }
                  alt="favorite"
                />

              </button>

            </>
          )
      }
    </div>
  );
}

export default RecipeDetails;
