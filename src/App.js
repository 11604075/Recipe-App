import React, {useState} from 'react';
import Header from './components/header/Header';
import RecipeCardWrapper from './components/recipeCards/RecipeCardWrapper';
import RecipeDetails from './components/recipeDetails/RecipeDetails';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'



function App() {
  const [recipe, setRecipe] =useState(null)
  let onRecipeSelect = (recipe)=>{
   setRecipe(recipe)
}                                                                    
  return (
    <Router>
      <div className="App">
      <Header onRecipeSelect={onRecipeSelect }/> 
      <RecipeCardWrapper selectRecipe={recipe}/>
      <Switch>
        <Route path="/recipe/:recipeID">
          <RecipeDetails/> 
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
