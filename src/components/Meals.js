import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Meals({ match }) {
  const [showBar, setShowBar] = useState(false);

  const history = useHistory();
  const page = history.location.pathname;

  return (
    <div>
      <Header name={ match.path } />
      {
        (page.pathname === '/meals') && <Meals />
      }
      <button
        onClick={ () => setShowBar(!showBar) }
      >
        <img
          src={ searchIcon }
          alt=""
          data-testid="search-top-btn"
        />
      </button>
      {
        showBar
        && (
          <>
            <input
              type="text"
              placeholder="Busque"
              data-testid="search-input"
            />
            <SearchBar />

          </>)

      }

    </div>
  );
}

Meals.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Meals;
