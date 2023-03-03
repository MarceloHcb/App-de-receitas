const searchApi = async (search, route) => {
  const MEALS_URL = `https://www.themealdb.com/api/json/v1/1/${search}`;
  const DRINKS_URL = `https://www.thecocktaildb.com/api/json/v1/1/${search}`;

  if (route === '/meals') {
    const response = await fetch(MEALS_URL);
    const data = await response.json();
    console.log(data, 'meals');
    return data;
  }

  const response = await fetch(DRINKS_URL);
  const data = await response.json();
  console.log(data, 'drinks');
  return data;
};

export default searchApi;
