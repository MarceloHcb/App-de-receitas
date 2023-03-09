import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CurrentRecipes from './CurrentRecipes';

function RecipeDetails() {
  const history = useHistory();
  const pathname = history.location.pathname.includes('meals') ? 'meals' : 'drinks';
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState({ [pathname]: [{}] });
  const [recommendationsData, setRecommendationsData] = useState({ [pathname]: [{}] });
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [inprogressRecipes, setInprogressRecipes] = useState([]);
  const fetchUrl = async (url, setFunc) => {
    const response = await fetch(url);
    const result = await response.json();
    setFunc(result);
    return result;
  };

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
            <button
              className="button-start"
              data-testid="start-recipe-btn"
              onClick={ () => setInprogressRecipes([...inprogressRecipes, id]) }
            >
              {inprogressRecipes.includes(id) ? 'Start Recipe' : 'Continue Recipe'}
            </button>
          )
      }
    </div>
  );
}

export default RecipeDetails;
