import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import searchIcon from '../images/searchIcon.svg';

function Header({ search }) {
  console.log(search);
  const history = useHistory();
  const [showBar, setShowBar] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

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
        type="button"
        onClick={ handleClickToProfile }
      >
        <img
          src={ profileIcon }
          alt=""
          data-testid="profile-top-btn"
        />
      </button>
      {search
      && (
        <button
          type="button"
          onClick={ () => setShowBar(!showBar) }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Search Icon"
          />
        </button>
      )}
      {
        showBar
        && (
          <>
            <input
              type="text"
              placeholder="Busque"
              value={ inputSearch }
              data-testid="search-input"
              onChange={ ({ target }) => setInputSearch(target.value) }
            />

            <SearchBar inputSearch={ inputSearch } />

          </>)

      }
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
};
export default Header;
