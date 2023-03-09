import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const history = useHistory();

  const emailFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.email;
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  const handleClickToFavoritesRecipes = () => {
    history.push('/favorite-recipes');
  };

  return (
    <div>
      <Header />
      <p data-testid="profile-email">
        { emailFromLocalStorage() }
      </p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => handleClickToFavoritesRecipes }
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => handleLogout() }
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}
