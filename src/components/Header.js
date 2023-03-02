import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function Header() {
  const history = useHistory();

  const page = history.location.pathname;
  const pageTitle = page === '/' ? '' : page.replace('/', '');

  const handleClickToProfile = () => {
    history.push('/profile');
  };

  return (
    <header>
      <h1 data-testid="page-title">
        {
          pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
        }
      </h1>
      <button
        onClick={ handleClickToProfile }
      >
        <img
          src={ profileIcon }
          alt=""
          data-testid="profile-top-btn"
        />
      </button>
    </header>
  );
}
export default Header;
