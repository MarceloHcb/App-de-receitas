import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import Context from '../context/context';

function Meals({ match }) {
  const [showBar, setShowBar] = useState(false);
  const { handleLetterFilter } = useContext(Context);

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
              onChange={ ({ target }) => handleLetterFilter({ target }) }
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
