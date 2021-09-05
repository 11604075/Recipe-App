import Recat, { useEffect,useState} from 'react';
import './RecipeDetails.css'
import {Link,useParams} from 'react-router-dom'
import Ingredients from './Ingredients';


function RecipeDetails(props){
    const [details, setDetails] = useState({})
    let {recipeID} = useParams()
    
    let API_KEY = '17ca3fb6cf074b6fb41dca7d6264eee0'

    useEffect(() => {
        fetchRecipeInformation()
    }, [recipeID])

   let fetchRecipeInformation = async () =>{
      let response = await fetch(
            `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`
        )
        let recipeInfoData = await response.json();
        setDetails(recipeInfoData)
       
    }
    return(
        <div className="recipeDetails">
            <div 
            style={{
                backgroundImage:`url(${details.image})`,
                height:'371px',
                width:'557px',
                position:'relative',
                objectFit:'cover'
            }}
            >
                <span className="recipeTitle">{details.title}</span>

            </div>
            <p  className="recipeSummary"    dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <h3>Ingredients</h3>
            <Ingredients ingredients={details.extendedIngredients || []}/>
            <p  dangerouslySetInnerHTML={{ __html: details.instructions }}></p>


    


            <Link to="/">
            <div className="recipeDetailsClose">x</div>
            </Link>
            
        </div>
    )
}


export default RecipeDetails;
