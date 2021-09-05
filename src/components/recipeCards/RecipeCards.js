import React from 'react'
import {Time,Group} from '../../asset/index'
import {Link} from 'react-router-dom'

 let RecipeCard = (props )=>{
    let {recipe} = props
    return(
         <div className="recipeCard">
            <Link to={{
               pathname:`/recipe/${recipe.id}`,
               state:{
                  hasDetails:true
               }
            }}>
             <img src={recipe.image} className="recipeImage"></img>
             <h1 className="recipeName">{recipe.title}</h1>
             <div className="recipeInfo">
                <Time />
                <span>{recipe.readyInMinutes}<span>min</span></span>
                <Group className="group"/>
                <span>{recipe.servings}</span>
             </div>
            </Link>
           
         </div>)
   
 }
 export default RecipeCard