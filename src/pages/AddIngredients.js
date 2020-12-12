import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

import "../styles/addingredients.css";
import lemon from "../assets/lemon.jpg";
import alcohol from "../assets/alcohol bottle.png";
import soda from "../assets/soda.png";
import sugar from "../assets/sugar.jpg";
import recipes from "../Components/Recipes.js";
import { Button } from "@material-ui/core";

const IngredientCard = props => {
  const { value, image, onClick } = props;
  const label = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    onClick(value, !selected);
    setSelected(!selected);
  }

  const currentClassName = selected ? 'foodItemBoxSelected' : 'foodItemBox';

  return (
    <Grid item xs={2}>
      <div className={currentClassName} onClick={handleClick}>
        <p style={{userSelect: 'none'}}>{label}</p>
        <img alt={value} className="foodItemImage" src={image}></img>
      </div>
    </Grid>
  );
}

var ingredientArray = [];

const AddIngredients = (props) => {
  const [selected, setSelected] = useState(new Set());

  const onIngredientClick = (value, adding) => {
    if (adding) {
      selected.add(value);
    } else {
      selected.delete(value);
    }

    console.log(selected);
  };

  var potentialRecipies = [];

  const Recipes = {
    drinks: {
      // Scotch Tom Collins
      ScotchTomCollins: {
        ingredients: ["lemon", "scotch", "ice", "soda"],
        steps: ["step 1", "step 2", "step 3"],
        name: "Scotch Tom Colins",
      },
      ScotchRickey: {
        ingredients: ["lemon", "scotch", "ice", "soda", "lime"],
        steps: ["step 1", "step 2", "step 3"],
        name: "Scotch Rickey",
      },
    },
  };

  const recipeGenerator = () => {
    console.log("text");

    for (var i in Recipes.drinks) {
      var name = Recipes.drinks[i].name;
      var tmp = Recipes.drinks[i].ingredients;

      if (tmp.every((r) => ingredientArray.includes(r))) {
        console.log("Found all of", tmp, "in", ingredientArray);
        potentialRecipies.push(name);
      } else {
        console.log("Did not find all of", tmp, "in", ingredientArray);
      }
    }
  };

  return (
    <div className="background">
      <div className="ingredientsTitlePage">What ingredients do you have?</div>
      <div className="ingredientsInstructions">
        Add anything and everything that you have in your kitchen! Based on your
        ingredients, we will generate mysterious recipes for you.
      </div>

      <br></br>
      <br></br>
      <div className="searchBar">
        <SearchBar
        // value={this.state.value}
        // onChange={(newValue) => this.setState({ value: newValue })}
        // onRequestSearch={() => doSomethingWith(this.state.value)}
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container direction="row" justify="center" alignItems="center">
        <IngredientCard value='Lemon' image={lemon} onClick={onIngredientClick} />
        <IngredientCard value='Sugar' image={sugar} onClick={onIngredientClick} />
        <IngredientCard value='Scotch' image={alcohol} onClick={onIngredientClick} />
        <IngredientCard value='Soda Water' image={soda} onClick={onIngredientClick} />
        <IngredientCard value='Ice' image={lemon} onClick={onIngredientClick} />
        <IngredientCard value='Rum' image={alcohol} onClick={onIngredientClick} />
        <IngredientCard value='Whiskey' image={alcohol} onClick={onIngredientClick} />
        <IngredientCard value='Tonic Water' image={soda} onClick={onIngredientClick} />
        <IngredientCard value='Lime' image={lemon} onClick={onIngredientClick} />
        <IngredientCard value='Vodka' image={alcohol} onClick={onIngredientClick} />
        <IngredientCard value='Sparkling Water' image={soda} onClick={onIngredientClick} />
        <IngredientCard value='Wine' image={alcohol} onClick={onIngredientClick} />
      </Grid>
      <div className="generate">
        <Button variant="contained" size="large">
          Generate Recipes
        </Button>
      </div>
    </div>
  );
};

export default AddIngredients;
