// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function Recipes({ dataApi }) {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   console.log(categories);
//   const history = useHistory();
//   let url = '';
//   if (history.location.pathname === '/meals') {
//     url = `https://www.themealdb.com/api/json/v1/1/list.php?c=${dataApi}`;
//   }
//   if (history.location.pathname === '/drinks') {
//     url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=${dataApi}`;
//   }

//   useEffect(() => {
//     const fetchCategories = async () => {
//       setLoading(true);
//       const response = await fetch(url);
//       const data = await response.json();
//       const NUMBER_OF_CATEGORIES = 5;
//       setCategories(data
//         .filter((_, index) => index >= 0 && index < NUMBER_OF_CATEGORIES));
//       setLoading(false);
//     };
//     fetchCategories();
//   }, [url]);

//   return (
//     <div>
//       {!loading && categories?.map((category, index) => () => {
//         <button
//           type="button"
//           data-testid={ `${category.strCategory}-category-filter` }
//         >
//           {category?.strCategory}

//         </button>;
//       })}

//     </div>

//   );
// }

// export default Recipes;

// // useEffect(() => {
// //     const request = async () => {
// //       const response = await fetchMeals();
// //       setMealsApi(response);

// //       const data = await fetchCategoriesMeals();
// //       const NUMBER_OF_CATEGORIES = 5;
// //       setCategories(data
// //         .filter((_, index) => index >= 0 && index < NUMBER_OF_CATEGORIES));
// //     };
// //     request();
// //     setCategoryON(false);
// //     setSearchON(false);
// //   }, []);

// //   const handleClick = async (category) => {
// //     if (nameCategory !== category) {
// //       const response = await fetchCategoryMeal(category);
// //       setCategoryComida(response);
// //       setSearchON(false);
// //       setCategoryON(true);
// //       setNameCategory(category);
// //     } else {
// //       setNameCategory('all');
// //       setCategoryON(false);
// //     }
// //   };
// //   const allMeals = () => {
// //     setCategoryON(false);
// //     setSearchON(false);
// //   };
