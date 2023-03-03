import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function Drinks({ match }) {
  return (
    <div>
      <Header name={ match.path } search />
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Drinks;
