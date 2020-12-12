import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

import "../styles/addingredients.css";
import "../styles/buttons.css";

import Recipes from "../Components/Recipes.js";

import lemon from "../assets/lemon.jpg";
import alcohol from "../assets/alcohol bottle.png";
import soda from "../assets/soda.png";
import sugar from "../assets/sugar.jpg";
import whiskey from "../assets/whiskey.png";
import Sparkling from "../assets/sparkling.png";
import orange from "../assets/orange.png";
import tonic from "../assets/tonic.png";
import honey from "../assets/honey.png";
import rum from "../assets/rum.png";
import tequilla from "../assets/tequilla.png";
import rye from "../assets/rye.png";
import bourbon from "../assets/bourbon.png";
import ginger from "../assets/ginger.png";
import gin from "../assets/gin.png";
import mint from "../assets/mint.png";
import tomato from "../assets/tomato.png";

import { Button } from "@material-ui/core";
import { getURLStr, arrayInSet } from '../logic/utils';
import { useLocation } from "react-router-dom";

const IngredientCard = (props) => {
  const { value, image, onClick } = props;
  const label = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onClick(value);
  };

  const currentClassName = selected ? "foodItemBoxSelected" : "foodItemBox";

  return (
    <Grid item xs={2}>
      <div className={currentClassName} onClick={handleClick}>
        <p style={{ userSelect: "none" }}>{label}</p>
        <img alt={value} className="foodItemImage" src={image}></img>
      </div>
    </Grid>
  );
};

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
        <h1>
          Add anything and everything that you have in your kitchen! Based on
          your ingredients, we will generate mysterious recipes for you.
        </h1>
        <br></br>
        <p>Click on each ingredient card to select</p>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="ingredients"
      >
        <IngredientCard
          value="Lemon"
          image={lemon}
          onClick={onIngredientClick}
        />

        <IngredientCard
          value="Sugar"
          image={sugar}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Scotch"
          image={alcohol}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Soda Water"
          image={soda}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Tequilla"
          image={tequilla}
          onClick={onIngredientClick}
        />
        <IngredientCard value="Rum" image={rum} onClick={onIngredientClick} />
        <IngredientCard
          value="Whiskey"
          image={whiskey}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Tonic Water"
          image={tonic}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Honey"
          image={honey}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Vodka"
          image={alcohol}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Sparkling Water"
          image={Sparkling}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Orange"
          image={orange}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="bourbon"
          image={bourbon}
          onClick={onIngredientClick}
        />
        <IngredientCard value="mint" image={mint} onClick={onIngredientClick} />
        <IngredientCard value="gin" image={gin} onClick={onIngredientClick} />
        <IngredientCard
          value="ginger"
          image={ginger}
          onClick={onIngredientClick}
        />
        <IngredientCard value="rye" image={rye} onClick={onIngredientClick} />
        <IngredientCard
          value="tomato"
          image={tomato}
          onClick={onIngredientClick}
        />
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
