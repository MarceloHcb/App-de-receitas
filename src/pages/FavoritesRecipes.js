import React from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';
import unFavoriteIcon from '../images/whiteHeartIcon.svg';
import Header from '../components/Header';

function FavoriteRecipes() {
  const history = useHistory();
  const favoriteURL = `localhost:3000${history.location.pathname}`;
  // const getFavRecipesFromLS = () => {
  //   const data = JSON.parse(localStorage.getItem('favoriteRecipes'));
  //   return data;
  // };

  const getFavRecipesFromLS = { // Esse aqui é um mock - descomentar acima para pegar do loclStorage. Posteriormente apagar esse mock.
    id: 0,
    type: 'Canja',
    nationality: 'Brasileira',
    category: 'Sopa',
    alcoholicOrNot: true,
    name: 'caipirinha',
    image: 'teste de imagem',
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(favoriteURL);
    console.log('testando botão compartilhar');
  };

  const unFavoriteRecipe = () => {
    if (getFavRecipesFromLS.alcoholicOrNot === true) {
      // localStorage.removeItem(); // verificar se é esse mesmo o comando
      console.log('testando botão desfavoritar');
    }
  };

  return (
    getFavRecipesFromLS.alcoholicOrNot === false
      ? (
        <div>
          <Header />
          <h1 data-testid="page-title">Favorite Recipes</h1>
          <button data-testid="filter-by-all-btn">All</button>
          <button data-testid="filter-by-meal-btn">Meals</button>
          <button data-testid="filter-by-drink-btn">Drinks</button>
          <img
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-image` }
            src={ getFavRecipesFromLS.image }
            alt=""
          />
          <p
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-top-text` }
          >
            {getFavRecipesFromLS.nationality}
            -
            {getFavRecipesFromLS.category }

          </p>
          <p
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-name` }
          >
            {getFavRecipesFromLS.name}
          </p>
          <button
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-share-btn` }
          >
            <img src={ shareIcon } alt="" />
          </button>
          <button
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-favorite-btn` }
          >
            <img src={ favoriteIcon } alt="" />
          </button>
        </div>
      )
      : (
        <div>
          <Header />
          <h1 data-testid="page-title">Favorite Recipes</h1>
          <button data-testid="filter-by-all-btn">All</button>
          <button data-testid="filter-by-meal-btn">Meals</button>
          <button data-testid="filter-by-drink-btn">Drinks</button>
          <img
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-image` }
            src={ getFavRecipesFromLS.image }
            alt=""
          />
          <p
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-top-text` }
          >
            {getFavRecipesFromLS.alcoholicOrNot}
          </p>
          <p
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-name` }
          >
            {getFavRecipesFromLS.name}
          </p>
          <button
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-share-btn` }
            onClick={ copyUrlToClipboard }
          >
            <img src={ shareIcon } alt="" />
          </button>
          <button
            data-testid={ `${getFavRecipesFromLS.id}-horizontal-favorite-btn` }
          >
            <img src={ favoriteIcon } alt="" />
          </button>
          <button
            onClick={ unFavoriteRecipe }
          >
            <img src={ unFavoriteIcon } alt="" />
          </button>
        </div>
      )
  );
}

export default FavoriteRecipes;
