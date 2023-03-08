import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Profile from './pages/Profile';
import FavoriteRecipes from './pages/FavoritesRecipes';
import DoneRecipes from './pages/DoneRecipes';
import RecipeInProgress from './pages/RecipeInProgress';
import Drinks from './pages/Drinks';
import RecipeDetails from './components/RecipeDetails';
import DrinksInProgress from './pages/DrinksInProgress';
import DrinksDetails from './pages/DrinksDetails';
import Meals from './pages/Meals';

function App() {
  return (
    <div>
      {/* <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object> */}
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/meals" component={ Meals } />
        <Route
          exact
          path="/meals/:id-da-receita/in-progress"
          component={ RecipeInProgress }
        />
        <Route exact path="/meals/:id-da-receita" component={ RecipeDetails } />
        <Route
          exact
          path="/drinks/:id-da-receita/in-progress"
          component={ DrinksInProgress }
        />
        <Route exact path="/drinks/:id-da-receita" component={ DrinksDetails } />
        <Route exact path="/drinks" component={ Drinks } />
      </Switch>
    </div>
  );
}

export default App;
