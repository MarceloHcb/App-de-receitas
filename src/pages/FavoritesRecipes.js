import React, { useEffect, useState } from 'react';
import FavoriteRecipesCard from '../components/FavoritesRecipesCard';
import Header from '../components/Header';

function FavoriteRecipes() {
  const [favRecipes, setFavRecies] = useState([]);

  const removeFavRecipes = (id) => {
    const getFavRecipes = localStorage.getItem('');
    const localFavRecipes = JSON.parse(getFavRecipes);
    localStorage.setItem('favoriteRecipes', JSON
      .stringify(localFavRecipes.filter((element) => element.id !== id)));
    setFavRecies(localFavRecipes.filter((element2) => element2.id !== id));
  };

  useEffect(() => {
    const getFavRecipes = localStorage.getItem('favoriteRecipes');
    const localFavRecipes = getFavRecipes ? JSON
      .parse(getFavRecipes) : [];
    setFavRecies(localFavRecipes);
  }, []);

  const filterByAll = () => {
    const getFavRecipes = localStorage.getItem('favoriteRecipes');
    setFavRecies(JSON.parse(getFavRecipes));
    console.log('Filtrando tudo');
  };

  const filterByMeal = () => {
    const getFavRecipes = localStorage.getItem('favoriteRecipes');
    const localFavRecipes = JSON.parse(getFavRecipes);
    setFavRecies(localFavRecipes.filter((element) => element.type === 'meals'));
    console.log('Filtrando por comida');
  };

  const filterBydrinks = () => {
    const getFavRecipes = localStorage.getItem('favoriteRecipes');
    const localFavRecipes = JSON.parse(getFavRecipes);
    setFavRecies(localFavRecipes.filter((element) => element.type === 'drinks'));
    console.log('Filtrando por bebida');
  };

  return (
    <div>
      <h1 data-testid="page-title">Favorite Recipes</h1>
      <Header />
      <button
        data-testid="filter-by-all-btn"
        onClick={ filterByAll }
      >
        All
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={ filterBydrinks }
      >
        Drinks
      </button>
      <button
        data-testid="filter-by-meals-btn"
        onClick={ filterByMeal }
      >
        Meals
      </button>
      {favRecipes.map((element, index) => (
        <FavoriteRecipesCard
          key={ index }
          index={ index }
          favorite={ element }
          removeFavRecipes={ removeFavRecipes }
        />
      ))}
    </div>
  );
}

export default FavoriteRecipes;
