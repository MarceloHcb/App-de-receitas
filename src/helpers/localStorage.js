export const LocalStorage = (
  currentFavoriteRecipe,
  id,
  setIsFavorite,
) => {
  const obj = {
    alcoholicOrNot: currentFavoriteRecipe.strAlcoholic || '',
    id: currentFavoriteRecipe.idMeal || currentFavoriteRecipe.idDrink,
    type: currentFavoriteRecipe.strAlcoholic ? 'drink' : 'meal',
    name: currentFavoriteRecipe.strMeal || currentFavoriteRecipe.strDrink,
    nationality: currentFavoriteRecipe.strArea || '',
    category: currentFavoriteRecipe.strCategory,
    image: currentFavoriteRecipe.strMealThumb || currentFavoriteRecipe.strDrinkThumb,
  };
  const localFavoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const localDuplicateId = localFavoritesRecipes
    ?.some((el) => (el.id === id));
  if (localFavoritesRecipes && localDuplicateId) {
    if (localFavoritesRecipes.some((el) => el.id === id)) {
      localStorage.setItem('favoriteRecipes', JSON
        .stringify(localFavoritesRecipes.filter((el) => el.id !== id)));
      setIsFavorite(false);
      return;
    }
    localStorage.setItem('favoriteRecipes', JSON
      .stringify(localFavoritesRecipes.filter((el) => el.id !== id)));
    setIsFavorite(false);
    return;
  }
  if (!localFavoritesRecipes) {
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([obj]));
    setIsFavorite(true);
  }
  if (localFavoritesRecipes !== null) {
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([...localFavoritesRecipes, obj]));
    setIsFavorite(true);
  }
};

// export const LocalRecipesInProgress = (data, id) => {
//   const recipeInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
//   if (recipeInProgress === null) {
//     localStorage.setItem('inProgressRecipes', JSON.stringify([{ data, id }]));
//   }
//   if (recipeInProgress) {
//     localStorage
//       .setItem('inProgressRecipes', JSON.stringify([...recipeInProgress, { data, id }]));
//   }
// };
