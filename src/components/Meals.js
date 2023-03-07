import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Context from '../context/Context';
import RecipesCards from './RecipesCards';

function Meals({ match }) {
  const { dataApi, loading } = useContext(Context);
  return (
    <div>
      <Header name={ match.path } search />
      <Footer />
      {!loading && <RecipesCards dataApi={ dataApi } selectedOption="meals" />}
    </div>
  );
}

Meals.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Meals;
