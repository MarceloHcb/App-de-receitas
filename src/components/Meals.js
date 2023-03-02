import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from './Header';
// import Drinks from '../pages/Drinks';

function Meals({ match }) {
  const history = useHistory();
  const page = history.location.pathname;

  return (
    <div>
      <Header name={ match.path } />
      {
        (page.pathname === '/meals') && <Meals />
      }
      <img
        src="/images/searchIcon.svg"
        alt=""
        data-testid="search-top-btn"
      />
    </div>
  );
}

Meals.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Meals;
