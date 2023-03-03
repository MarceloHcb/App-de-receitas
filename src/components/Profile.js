import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Profile() {
  const history = useHistory();
  return (
    <div>
      <Header />
      <p data-testid="profile-email" />
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
      <button type="button" data-testid="profile-logout-btn">Logout</button>
      <Footer />
    </div>
  );
}
