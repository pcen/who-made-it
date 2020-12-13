import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { commaAndAndSeparate } from '../logic/utils';
import drink from '../assets/drink2.png';

import '../styles/generaterecipes.css';

const GenerateRecipes = (props) => {
  const { recipeOptions, recipe, suspects } = props;
  const history = useHistory();

  const toStory = () => {
    history.push('/story');
  };

  return (
    <div className="background">
      <div className="white-card-generate-recipes">
        <div className="title">Your Unknown Drink</div>
        <br></br>
        <div className="selectedIngredients">
          {`Ingredients required: ${commaAndAndSeparate(recipe.ingredients).toLowerCase()}`}
        </div>
        <img className="drinkImage" src={drink}></img>
        <br></br><br></br>
        <div className="descriptiveText">Your unknown drink will be one of these 3:</div>
        <br></br><br></br>
        {/* Three potential recipe options */}
        {recipeOptions.map(r => {
          return (<div className="drinkName">{r.name}</div>)
        })}
        <br></br><br></br>
        <div className="descriptiveText">
          The drink that you will make is the same one that was poisoned to kill the victim in the murder mystery.
          Guessing the drink correctly based on the recipe will lead you to the killer!
          So put your detective hat on and solve the mystery!
          </div>
        <br></br><br></br>

        <Button variant="contained" className="buttonRedLong" onClick={toStory}>
          Read the Mystery
          </Button>

      </div>
    </div>
  );
}

export default GenerateRecipes;
