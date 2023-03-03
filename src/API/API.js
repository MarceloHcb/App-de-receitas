const searchApi = async (search) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/${search}`;
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export default searchApi;
