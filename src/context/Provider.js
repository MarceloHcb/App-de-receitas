import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useFetch from '../hooks/useFetch';
// import SearchBar from '../components/SearchBar';

function Provider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [url, setUrl] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  console.log(inputSearch);
  const { dataApi, setDataApi, loading } = useFetch(url);
  console.log(dataApi);

  const contextValue = useMemo(() => ({
    recipes,
    setRecipes,
    url,
    setUrl,
    inputSearch,
    setInputSearch,
    dataApi,
    setDataApi,
    loading,
  }), [recipes, url, inputSearch, dataApi, setDataApi, setUrl, loading]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
