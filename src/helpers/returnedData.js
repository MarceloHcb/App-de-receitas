import { useHistory } from 'react-router-dom';

export const ReturnedData = (data) => {
  const history = useHistory();
  // console.log(data);
  if (Object.keys(data).length === 1) {
    const route = history.location.pathname;
    if (route === '/meals') {
      const id = data.meals[0].idMeal;
      const redirection = `${route}/${id}`;
      history.push(redirection);
    } else {
      const id = data.drinks[0].idDrink;
      const redirection = `${route}/${id}`;
      history.push(redirection);
    }
  }
};
