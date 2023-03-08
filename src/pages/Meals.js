import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';
import RecipesCards from '../components/RecipesCards';
import Recipes from '../components/Recipes';

function Meals({ match }) {
  const { dataApi } = useContext(Context);
  return (
    <div>
      <Header name={ match.path } search />
      <RecipesCards dataApi={ dataApi } selectedOption="meals" />
      <Recipes />
      <Footer />
    </div>
  );
}

Meals.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Meals;
