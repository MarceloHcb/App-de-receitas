import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from './Context';
import useFetch from '../hooks/useFetch';

function Provider({ children }) {
  const history = useHistory();
  const pathnames = history.location.pathname;
  const [route, setRoute] = useState('/meals');
  const [url, setUrl] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  let url1;
  if (route === '/meals' || pathnames === '/meals') {
    url1 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  }
  if (route === '/drinks' || pathnames === '/drinks') {
    url1 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  }
  const result = url === '' ? url1 : url;
  const { dataApi, setDataApi, loading } = useFetch(result);

  const contextValue = useMemo(() => ({
    url,
    inputSearch,
    dataApi,
    loading,
    setUrl,
    setRoute,
    setInputSearch,
    setDataApi,
  }), [url, inputSearch, dataApi, loading, setDataApi, setUrl, setRoute]);
  console.log(dataApi);
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
