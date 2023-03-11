import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import searchIcon from '../images/searchIcon.svg';
import '../css/header.css';

function Header({ search }) {
  const history = useHistory();
  const [showBar, setShowBar] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  // const [conditional, setConditional] = useState(false);
  const page = history.location.pathname;
  const pageTitle = page === '/' ? '' : page.replace('/', '');

  // const handleClickToProfile = () => {
  //   history.push('/profile');
  // };

  return (
    <header>

      <div className="header">
        <div className="title">
          <h1 data-testid="page-title">
            {
              pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
            }
          </h1>

        </div>
        <div className="hearder-icons">
          <button
            type="button"
            className="header-button"
            onClick={ handleClickToProfile }
          >
            <img
              className="search-icon"
              src={ profileIcon }
              alt=""
              data-testid="profile-top-btn"
            />
          </button>
          {search
      && (
        <button
          type="button"
          className="header-button"
          onClick={ () => setShowBar(!showBar) }
        >
          <img
            className="search-icon"
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Search Icon"
          />
        </button>
      )}
        </div>
      </div>
      {
        showBar
        && (
          <>
            <input
              type="text"
              className="search-busque"
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
