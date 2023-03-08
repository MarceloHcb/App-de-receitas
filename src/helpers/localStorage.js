export const LocalStorage = (
  localFavoritesRecipes,
  currentFavoriteRecipe,
  id,
  setIsFavorite,
) => {
  if (localFavoritesRecipes.some((el) => el.id === id)) {
    setIsFavorite(false);
    localStorage.setItem('favoriteRecipes', JSON
      .stringify(localFavoritesRecipes.filter((el) => el.id !== id)));
  } else {
    localStorage.setItem('favoriteRecipes', JSON
      .stringify([...localFavoritesRecipes, currentFavoriteRecipe]));
    setIsFavorite(true);
  }
};
