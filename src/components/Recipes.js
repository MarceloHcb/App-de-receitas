import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Recipes() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
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
  console.log(categories);

  return (
    <div>
      {!loading && categories.map((category, index) => (
        <button
          type="button"
          data-testid={ `${category.strCategory}-category-filter` }
          key={ index }
        >
          {category.strCategory}
        </button>
      ))}
    </div>

  );
}

export default Recipes;
