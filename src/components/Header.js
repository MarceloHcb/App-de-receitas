import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
// import SearchBar from './SearchBar';

function Header() {
  const history = useHistory();

  // const [inputSearch, setInputSearch] = useState('');

  const page = history.location.pathname;
  const pageTitle = page === '/' ? '' : page.replace('/', '');

  const handleClickToProfile = () => {
    history.push('/profile');
  };

  return (
    <header>
      <h1 data-testid="page-title">
        {
          pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
        }
      </h1>
      <button
        onClick={ handleClickToProfile }
      >
        <img
          src={ profileIcon }
          alt=""
          data-testid="profile-top-btn"
        />
      </button>
      {/* {search && (
        <form> */}
      {/* <SearchBar inputSearch={ inputSearch } />
          <input
            data-testid="search-input"
            placeholder="digite aqui"
            value={ inputSearch }
            onChange={ ({ target }) => setInputSearch(target.value) }
          /> */}
      {/* </form>
      )} */}
    </header>
  );
}
export default Header;
