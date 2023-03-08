import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

function Recipes() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setUrl } = useContext(Context);
  const history = useHistory();
  let url = '';

  const rote = history.location.pathname;
  const page = rote.replace('/', '');
  if (history.location.pathname === '/meals') {
    url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  }
  if (history.location.pathname === '/drinks') {
    url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  }
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      const NUMBER_OF_CATEGORIES = 5;
      setCategories(data[page]
        .filter((_, index) => index >= 0 && index < NUMBER_OF_CATEGORIES));
      setLoading(false);
    };
    fetchCategories();
  }, [url, page]);

  const handleClick = (category) => {
    if (history.location.pathname === '/meals') {
      setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      history.push('/meals');
    }
    if (category === 'Goat') {
      setUrl('https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat');
    }
    if (history.location.pathname === '/drinks') {
      setUrl(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    }
    if (category === 'All') {
      setUrl('');
    }
  };

  return (
    <div>
      {!loading && categories.map((category, index) => (
        <button
          type="button"
          data-testid={ `${category.strCategory}-category-filter` }
          key={ index }
          onClick={ () => handleClick(category.strCategory) }
        >
          {category.strCategory}
        </button>

      ))}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleClick('All') }
      >
        All
      </button>
    </div>

  );
}

export default Recipes;
