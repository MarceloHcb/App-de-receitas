import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  const page = history.location.pathname;
  const pageTitle = page === '/' ? '' : page.replace('/', '');
  return (
    <header>
      <h1 data-testid="page-title">
        {
          pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
        }
      </h1>
      <img
        src="/images/profileIcon.svg"
        alt=""
        data-testid="profile-top-btn"
      />
    </header>
  );
}
export default Header;
