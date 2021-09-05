import React from 'react'

function Ingredients(props) {
let {ingredients} =props
    return (
        <div>
         {
          ingredients.map(ingredient=>{
              return(
                  <div>
                   {ingredient.name}
                  </div>
              )
          })
         }
        </div>
    )
}

export default Ingredients
