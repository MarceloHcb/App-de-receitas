import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';
import RecipesCards from '../components/RecipesCards';
import Recipes from '../components/Recipes';

function Drink({ match }) {
  const { dataApi } = useContext(Context);
  return (
    <div>
      <Header name={ match.path } search />
      <RecipesCards dataApi={ dataApi } selectedOption="drinks" />
      <Recipes />
      <Footer />
    </div>
  );
}

Drink.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Drink;
