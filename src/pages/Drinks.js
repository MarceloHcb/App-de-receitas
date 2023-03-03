import PropTypes from 'prop-types';
import Header from '../components/Header';

function Drinks({ match }) {
  return (
    <div>
      <Header name={ match.path } search />
    </div>
  );
}

Drinks.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Drinks;
