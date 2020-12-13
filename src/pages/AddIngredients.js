import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import "../styles/addingredients.css";
import "../styles/buttons.css";

import Recipes from "../Components/Recipes.js";
import wine from "../assets/wine.jpg";
import lemon from "../assets/lemon.jpg";
import alcohol from "../assets/alcohol bottle.png";
import soda from "../assets/soda.png";
import whiskey from "../assets/whiskey.png";
import Sparkling from "../assets/sparkling.png";
import orange from "../assets/orange.png";
import tonic from "../assets/tonic.png";
import honey from "../assets/honey.png";
import rum from "../assets/rum.png";
import tequila from "../assets/tequila.png";
import bourbon from "../assets/bourbon.png";
import ginger from "../assets/ginger.png";
import gin from "../assets/gin.png";
import mint from "../assets/mint.png";
import tomato from "../assets/tomato.png";
import cranberry from '../assets/cranberry.jpg';
import vermouth from '../assets/vermouth.jpg';
import champagne from '../assets/champagne.png';

import { Button } from "@material-ui/core";
import { arrayInSet, randFrom } from '../logic/utils';
import { useHistory } from "react-router-dom";

const IngredientCard = (props) => {
  const { value, image, onClick } = props;
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
    onClick(value.toLowerCase(), !selected);
  };
  const currentClassName = selected ? "foodItemBoxSelected" : "foodItemBox";

  return (
    <Grid item xs={2}>
      <div className={currentClassName} onClick={handleClick}>
        <p style={{ userSelect: "none" }}>{value}</p>
        <img alt={value} className="foodItemImage" src={image}></img>
      </div>
    </Grid>
  );
};

const AddIngredients = (props) => {
  const assumedIngredients = ['ice', 'salt', 'sugar'];
  const [selected, setSelected] = useState(new Set(assumedIngredients));
  const recipes = Recipes.drinks;
  const history = useHistory();

  const onIngredientClick = (value, adding) => {
    if (adding) {
      selected.add(value);
    } else {
      selected.delete(value);
    }
  };

  // Set the recipe of each of the suspects as well as the
  // recipe the user will make to deduce who dunit
  const setUpRecipes = (possibilities) => {
    props.setRecipeOptions(possibilities);
    props.setSuspects({
      Elizabeth: { recipe: possibilities[0].name, },
      Margaret: { recipe: possibilities[1].name, },
      Raymond: { recipe: possibilities[2].name, },
    });
    props.setRecipe(randFrom(possibilities));
  }

  const onGenerateRecipes = () => {
    // Find all the possible recipes the user can make
    var possibleRecipes = [];
    Object.keys(recipes).forEach(key => {
      if (arrayInSet(recipes[key].ingredients, selected) === true) {
        possibleRecipes.push(recipes[key]);
      }
    });
    // Enough possible recipes exist to continue
    if (possibleRecipes.length >= 3) {
      setUpRecipes(possibleRecipes.slice(0, 3));
      history.push('/generate-recipes');
    } else {
      console.log('not enough matching recipes');
    }
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
          value="Lime"
          image={lemon}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Tequila"
          image={tequila}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Rum"
          image={rum}
          onClick={onIngredientClick}
        />
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
          value="Red Wine"
          image={wine}
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
          value="Bourbon"
          image={bourbon}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="White Wine"
          image={wine}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Mint"
          image={mint}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Gin"
          image={gin}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Ginger Beer"
          image={ginger}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Rye"
          image={alcohol}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Tomato"
          image={tomato}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Triple Sec"
          image={alcohol}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Cranberry Juice"
          image={cranberry}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Vermouth"
          image={vermouth}
          onClick={onIngredientClick}
        />
        <IngredientCard
          value="Champagne"
          image={champagne}
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
