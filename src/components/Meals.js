import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function Meals({ match }) {
  return (
    <div>
      <Header name={ match.path } search />

    </div>
  );
}

Meals.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Meals;
