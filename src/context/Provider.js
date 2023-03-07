import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from './Context';
import useFetch from '../hooks/useFetch';

function Provider({ children }) {
  const history = useHistory();
  const pathnames = history.location.pathname;
  console.log(pathnames);
  const [route, setRoute] = useState('/meals');
  const [url, setUrl] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  console.log(inputSearch);
  const { dataApi, setDataApi, loading } = useFetch(url);
  console.log(dataApi);

  useEffect(() => {
    if (route === '/meals' || pathnames === '/meals') {
      setUrl('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }
    if (route === '/drinks' || pathnames === '/drinks') {
      setUrl('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    }
  }, [route, url, pathnames]);

  const contextValue = useMemo(() => ({
    url,
    inputSearch,
    dataApi,
    loading,
    setUrl,
    setRoute,
    setInputSearch,
    setDataApi,
  }), [url, inputSearch, dataApi, setDataApi, setUrl, loading]);

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
