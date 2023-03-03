import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Context from './context';

function Provider({ children }) {
  const api = 'https://www.themealdb.com/api/json/v1/1';
  const [url, setUrl] = useState();
  let mesage = '';

  const [results, setResults] = useState('');
  let obj = '';
  const { dataApi } = useFetch(url);
  const [data, setData] = useState();
  console.log(dataApi);
  console.log(results);
  const handleLetterFilter = ({ target }) => {
    const { value } = target;
    setData(value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    setUrl(obj);
    if (mesage) {
      global.alert(mesage);
    }
  };

  if (data && results) {
    if (results === 'Ingredient') {
      obj = (`${api}/filter.php?i=${data}`);
    }
    if (results === 'Name') {
      obj = (`${api}/search.php?s=${data}`);
    }
    if (results === 'First letter' && data.length > 1) {
      mesage = ('Your search must have only 1 (one) character');
    }
    if (results === 'First letter') {
      obj = (`${api}/search.php?f=${data}`);
    }
  }

  const values = useMemo(() => ({
    setResults,
    handleFilter,
    handleLetterFilter,
    dataApi,
  }), [dataApi, handleFilter]);

  return (
    <Context.Provider value={ values }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
