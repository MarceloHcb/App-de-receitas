import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import unFavoriteIcon from '../images/blackHeartIcon.svg';
import '../css/favRecipeImg.css';

function FavoriteRecipesCard({ index, favorite, removeFavRecipes }) {
  const history = useHistory();
  const { image, category, name, nationality, type, alcoholicOrNot, id } = favorite;
  const [message, setMessage] = useState('');

  const path = type === 'meal' ? 'meals' : 'drinks';

  const sharedButton = () => {
    if (type === 'drink') {
      navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
      setMessage('Link copied!');
    } else {
      navigator.clipboard.writeText(`http://localhost:3000/meals/${id}`);
      setMessage('Link copied!');
    }
  };

  const timeNumber = 3000;
  if (message) {
    setTimeout(() => setMessage(''), timeNumber);
  }

  return (
    <div>
      <button
        onClick={ () => history.push(`${path}/${id}`) }
      >
        <img
          className="favRecipeImg"
          src={ image }
          alt=""
          data-testid={ `${index}-horizontal-image` }
        />
      </button>
      <button
        onClick={ () => history.push(`${path}/${id}`) }
      >
        <h2
          data-testid={ `${index}-horizontal-name` }
        >
          { name }
        </h2>
      </button>

      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        {
          type === 'meal'
            ? `${nationality} - ${category}`
            : alcoholicOrNot
        }
      </p>
      <button
        onClick={ sharedButton }
      >
        <img
          src={ shareIcon }
          alt="share"
          data-testid={ `${index}-horizontal-share-btn` }
        />
        <p style={ { color: 'red' } }>{message}</p>
      </button>
      <button
        onClick={ () => removeFavRecipes(id) }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ unFavoriteIcon }
          alt="favorite"
        />
      </button>
    </div>
  );
}

FavoriteRecipesCard.propTypes = {
  favorite: PropTypes.shape({
    category: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  index: PropTypes.number,
}.isRequired;

export default FavoriteRecipesCard;
