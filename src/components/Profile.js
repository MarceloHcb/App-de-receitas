import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Profile() {
  const history = useHistory();

  const { email } = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />
      <p data-testid="profile-email">
        { email }
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
        onClick={ () => history.push('/favorite-recipes') }
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
