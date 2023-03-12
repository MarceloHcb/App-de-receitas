import React from 'react';
import DoneRecipesCard from '../components/DoneRecipesCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

function DoneRecipes() {
  return (
    <div>
      <h1 data-testid="page-title">Done Recipes</h1>
      <Header />
      <DoneRecipesCard />
      <Footer />
    </div>
  );
}

export default DoneRecipes;
