import PropTypes from 'prop-types';
import React from 'react';
import '../css/currentRecipes.css';

function CurrentRecipes({ data, ingredients, measure, pathname,
  recommendationsData }) {
  const max = 6;

  if (pathname === 'meals') {
    return (
      <div className="container-recipes ">
        {
          ['idMeal'] in data[pathname][0]
          && Object.values(data)[0].map((param) => (
            <div key={ param.idMeal }>
              <img
                className="image"
                src={ param.strMealThumb }
                alt={ param.strMeal }
                data-testid="recipe-photo"
              />
              <h1
                className="title-details"
                data-testid="recipe-title"
              >
                { param.strMeal }

              </h1>
              <p
                className="category-details"
                data-testid="recipe-category"
              >
                { param.strCategory }

              </p>
              <h1 className="deltails-titles">INGREDIENTS</h1>
              <ul>
                {
                  ingredients.map((ingredient, index) => (
                    <li
                      className="ingredients"
                      key={ index }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {`${ingredient} ${measure[index]}`}
                    </li>
                  ))
                }
              </ul>
              <h1 className="deltails-titles">INSTRUCTIONS</h1>

              <p
                className="instructions"
                data-testid="instructions"
              >
                {param.strInstructions}
              </p>
              <h1 className="deltails-titles">VIDEO</h1>
              <iframe
                className="video-details"
                title={ param.strMeal }
                data-testid="video"
                src={ `https://www.youtube.com/embed/${param.strYoutube.replace('https://www.youtube.com/watch?v=', '')}` }
              />
              <div className="carrousel">
                { Object.values(recommendationsData)[0].slice(0, max)
                  .map((recommendations, index) => (
                    <div key={ index } data-testid={ `${index}-recommendation-card` }>
                      <h1
                        data-testid={ `${index}-recommendation-title` }
                      >

                        { recommendations.strDrink }

                      </h1>
                      <img
                        className="image-recommendations"
                        src={ recommendations.strDrinkThumb }
                        alt={ recommendations.strDrink }
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))
        }
      </div>
    );
  }

  return (
    <div className="container-recipes">
      {
        ['idDrink'] in data[pathname][0]
            && Object.values(data)[0].map((param) => (
              <div key={ param.idDrink }>
                <img
                  className="image"
                  src={ param.strDrinkThumb }
                  alt={ param.strDrink }
                  data-testid="recipe-photo"
                />
                <h1
                  className="title-details"
                  data-testid="recipe-title"
                >
                  { param.strDrink }

                </h1>
                <p
                  className="category-details"
                  data-testid="recipe-category"
                >
                  { param.strAlcoholic }

                </p>
                <h1
                  className="deltails-titles"
                >
                  INGREDIENTS

                </h1>
                <ul>
                  {
                    ingredients.map((ingredient, index) => (
                      <li
                        className="ingredients"
                        key={ index }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      >
                        {`${ingredient} ${measure[index]}`}
                      </li>
                    ))
                  }
                </ul>

                <h1 className="deltails-titles">INSTRUCTIONS</h1>
                <p
                  className="instructions"
                  data-testid="instructions"
                >
                  {param.strInstructions}

                </p>

                <div className="carrousel">
                  { Object.values(recommendationsData)[0].slice(0, max)
                    .map((recommendations, index) => (
                      <div
                        key={ index }
                        data-testid={ `${index}-recommendation-card` }
                        className="carrousel-content"
                      >
                        <h1
                          data-testid={ `${index}-recommendation-title` }
                        >

                          { recommendations.strMeal }

                        </h1>
                        <img
                          className="image-recommendations"
                          src={ recommendations.strMealThumb }
                          alt={ recommendations.strMeal }
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))
      }
    </div>
  );
}

CurrentRecipes.propTypes = {
  data: PropTypes.any,
  recommendationsData: PropTypes.any,
  ingredients: PropTypes.any,
  measure: PropTypes.any,
  pathname: PropTypes.string,
}.isRequired;

export default CurrentRecipes;
