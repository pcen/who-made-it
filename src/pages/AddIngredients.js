import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

import "../styles/addingredients.css";
import "../styles/buttons.css";
import lemon from "../assets/lemon.jpg";
import alcohol from "../assets/alcohol bottle.png";
import soda from "../assets/soda.png";
import sugar from "../assets/sugar.jpg";
import Recipes from "../Components/Recipes.js";
import { Button } from "@material-ui/core";
import { getURLStr, arrayInSet } from '../logic/utils';
import { useLocation } from "react-router-dom";

const IngredientCard = props => {
  const { value, image, onClick } = props;

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    onClick(value, !selected);
    setSelected(!selected);
  }
  const currentClassName = selected ? 'foodItemBoxSelected' : 'foodItemBox';

  return (
    <Grid item xs={2}>
      <div className={currentClassName} onClick={handleClick}>
        <p style={{userSelect: 'none'}}>{value}</p>
        <img alt={value} className="foodItemImage" src={image}></img>
      </div>
    </Grid>
  );
}

const AddIngredients = (props) => {
  const [selected, setSelected] = useState(new Set());
  const type = getURLStr('type', useLocation());
  const recipes = type === 'drink' ? Recipes.drinks : Recipes.food;

  const onIngredientClick = (value, adding) => {
    if (adding) {
      selected.add(value);
    } else {
      selected.delete(value);
    }

    console.log(selected);
  };

  const onGenerateRecipes = () => {
    console.log(recipes);
    Object.keys(recipes).forEach(key => {
      let ings = recipes[key].ingredients;
      if (arrayInSet(ings, selected)) {

      }
    })
  }

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
        <Button className='buttonBlackWide' variant="contained" size="large"
          onClick={onGenerateRecipes}
        >
          Generate Recipes
        </Button>
      </div>
    </div>
  );
};

export default AddIngredients;
