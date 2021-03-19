import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Recipe from "./Recipes";
import "../css/Header.css"

function TestSearch() {


//States
const [search, setSearch] = useState('');//used in searchInput function to enter text in the search box
const [recipes, setRecipes] = useState([]);
const [query, setQuery] = useState("chicken")//to set real time search value to the search 

const getData = async () => {//created a function to fetch data from api
const recipeData = await Axios.get(`${process.env.REACT_APP_API_URL}?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`)
//url recieved//variable ${query} is wriiten here to change the input text to real time text); 
 console.log(recipeData);
setRecipes (recipeData.data.hits)//data fetched is strored in setRecipe state 
    };
  
const searchInput= (e) => {
          setSearch(e.target.value)//to type on search box value       
        }
  
const updateQuery = (e) => {//to update search value for search query
      e.preventDefault();//prevent refreshing the page when search
      setQuery(search);//to set the query with input entered and stored in the search state
      setSearch("");
    }
    
    useEffect(() => {    
      getData();
      
    }, [query])
  
    
    //to run this useEffect only ones ---give empty array [] or give [count]
    //[query] is written here in this usestate because to rerender the app when the query change //query is search input made for search query
  // console.log(process.env);
  
    return (
      <div >
       <form onSubmit={updateQuery}>
          <input type="text" onChange={searchInput} value={search} />
          <button type="submit">Search</button>
        </form>
        
    
       
  
  <div style={{width:"100%"}}>


  
    {recipes.map((getRecipe) => (
    
    <Recipe 
    title={getRecipe.recipe.label}
    calories={getRecipe.recipe.calories}
    healthLabel={getRecipe.recipe.healthLabels}
    dietLabel={getRecipe.recipe.dietLabels}
    image={getRecipe.recipe.image}
    ingredients={getRecipe.recipe.ingredients}/>
  
    ))}

    
  
  </div>
 
        
  </div>
    )
  }
  
  export default TestSearch
  