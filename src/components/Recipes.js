import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

function Recipes() {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const { setUrl } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    let url = '';

    const rote = history.location.pathname;
    const page = rote.replace('/', '');
    if (history.location.pathname === '/meals') {
      url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    }
    if (history.location.pathname === '/drinks') {
      url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    }
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
  }, [history]);
  const handleAllclick = () => {
    setUrl('');
    setCurrentCategory([]);
  };
  const handleClick = (category) => {
    if (history.location.pathname === '/meals') {
      if (category === currentCategory) {
        setUrl('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setCurrentCategory([]);
      } else {
        setCurrentCategory(category);
        setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      }
    }

    if (history.location.pathname === '/drinks') {
      if (category === currentCategory) {
        setUrl('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        setCurrentCategory([]);
      } else {
        setCurrentCategory(category);
        setUrl(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      }
    }
  };
  return (
    <div>
      {!loading && categories?.map((category, index) => (
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
        onClick={ () => handleAllclick() }
      >
        All
      </button>
    </div>

  );
}

export default Recipes;
