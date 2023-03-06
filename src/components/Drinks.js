import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Context from '../context/Context';
import Recipes from './Recipes';

function Drink({ match }) {
  const { dataApi, loading } = useContext(Context);
  return (
    <div>
      <Header name={ match.path } search />
      <Footer />
      {!loading && <Recipes dataApi={ dataApi } selectedOption="drinks" />}
    </div>
  );
}

Drink.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Drink;
