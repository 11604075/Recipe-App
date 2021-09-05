import RecipeCard from "./RecipeCards";
import React,{useEffect, useState} from 'react'
import "./RecipeCards.css"
import {useLocation} from 'react-router-dom'



let RecipeCardWrapper = (props) => {
  
  let API_KEY = "17ca3fb6cf074b6fb41dca7d6264eee0";
  const [recipes, setRecipes] = useState([])
  let urlState = useLocation().state

  useEffect(() => {
    if(props.selectRecipe)
    fetchRecipe()
  }, [props.selectRecipe])

  let fetchRecipe= async ()=>{
    let response =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisines=${props.selectRecipe}&addRecipeInformation=true&number=10`)
    let recipeData = await response.json()
   
    setRecipes(recipeData.results)
  }
 
  
  return(
      <div className="recipeWrapper" style={{width:urlState && urlState.hasDetails ? '60%' : '100%'}}>
        {
          recipes.map(recipe=>
          <RecipeCard key={recipe.id} recipe={recipe}/>)
        }
      </div>
  )
}
export default RecipeCardWrapper;