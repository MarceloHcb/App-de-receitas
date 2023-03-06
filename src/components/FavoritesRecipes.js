import React from 'react';

import Header from './Header';

function FavoriteRecipes() {
  // const getFavRecipesFromLS = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const getFavRecipesFromLS = [{ // Esse aqui é um mock - descomentar acima para pegar do loclStorage. Posteriormente apagar esse mock.
    id: 0,
    type: 'Canja',
    nationality: 'Brasileira',
    category: 'Sopa',
    alcoholicOrNot: false,
    name: 'Canja de Galinha',
    image: 'teste de imagem',
  }];

  const { id } = getFavRecipesFromLS;
  const index = id;

  return (
    <div>
      <Header />
      <h1 data-testid="page-title">Favorite Recipes</h1>
      <button data-testid="filter-by-all-btn">All</button>
      <button data-testid="filter-by-meal-btn">Meals</button>
      <button data-testid="filter-by-drink-btn">Drinks</button>
      <img data-testid={ `${index}-horizontal-top-text` } alt="" />
      <p data-testid={ `${index}-horizontal-top-text` }>Categoria</p>
      <p data-testid={ `${index}-horizontal-name` }>Nome da Receita</p>
      <button data-testid={ `${index}-horizontal-share-btn` }>Compartilhar</button>
      <button data-testid={ `${index}-horizontal-favorite-btn` }>Favoritar</button>
    </div>
  );
}

export default FavoriteRecipes;
