import React from "react";
import { Grid } from "@material-ui/core";
import "../styles/addingredients.css";
import lemon from "../assets/lemon.jpg";
import alcohol from "../assets/alcohol bottle.png";
import soda from "../assets/soda.png";
import sugar from "../assets/sugar.jpg";
import recipes from "../Components/Recipes.js";

var ingredientArray = [];

const AddIngredients = (props) => {
  const onIngredientClick = (prop) => {
    console.log(ingredientArray.push(prop));
    console.log(ingredientArray);
  };


  var potentialRecipies = []

  const Recipes = {
    drinks: {
      // Scotch Tom Collins
      ScotchTomCollins: {
        ingredients: ['lemon', 'scotch', 'ice', 'soda'],
        steps: [
          'step 1',
          'step 2',
          'step 3',
        ],
        name: 'Scotch Tom Colins'
      },
      ScotchRickey: {
        ingredients: ['lemon', 'scotch', 'ice', 'soda', 'lime'],
        steps: [
          'step 1',
          'step 2',
          'step 3',
        ],
        name: 'Scotch Rickey'
      },
    }
  }

  const recipeGenerator = () => {
    console.log("text")

    for (var i in Recipes.drinks) {
      var name = Recipes.drinks[i].name;
      var tmp = Recipes.drinks[i].ingredients;

      if (tmp.every(r => ingredientArray.includes(r))) {
        console.log('Found all of', tmp, 'in', ingredientArray);
        potentialRecipies.push(name)
      } else {
        console.log('Did not find all of', tmp, 'in', ingredientArray);
      }
    }
  }

  return (
    <div className="background">
      <div className="title">What ingredients do you have?</div>
      <br></br>
      <br></br>
      <div className="searchBar">
        {/* <input type="text" className="searchTerm" placeholder="Search for an Ingredient">
          <button type="submit" className="searchButton">Search</button>
        </input> */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={recipeGenerator}
          >
            <p>Lemon</p>
            <img className="foodItemImage" src={lemon}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("sugar")}
          >
            <p>Sugar</p>
            <img className="foodItemImage" src={sugar}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("scotch")}
          >
            <p>Scotch</p>
            <img className="foodItemImage" src={alcohol}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("soda")}
          >
            <p>Soda</p>
            <img className="foodItemImage" src={soda}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("ice")}
          >
            <p>Lemon</p>
            <img className="foodItemImage" src={lemon}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("lemon")}
          >
            <p>Rum</p>
            <img className="foodItemImage" src={alcohol}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("lemon")}
          >
            <p>Soda</p>
            <img className="foodItemImage" src={soda}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("lemon")}
          >
            <p>Lemon</p>
            <img className="foodItemImage" src={lemon}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("lemon")}
          >
            <p>Vodka</p>
            <img className="foodItemImage" src={alcohol}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("lemon")}
          >
            <p>Soda</p>
            <img className="foodItemImage" src={soda}></img>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="foodItemBox"
            onClick={(e) => onIngredientClick("lemon")}
          >
            <p>Lemon</p>
            <img className="foodItemImage" src={lemon}></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddIngredients;
