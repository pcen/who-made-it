import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { commaAndAndSeparate } from '../logic/utils';

//Import images
import drink from '../assets/drink2.png';

//Import css styles
import '../styles/generaterecipes.css';


//Page content
const GenerateRecipes = (props) => {
  const { recipeOptions, recipe, suspects } = props;
  const history = useHistory();

  {/* Navigate to the next page: the murder mystery story */}
  const toStory = () => {
    history.push('/story');
  };

  return (
    <div className="background">
      <div className="white-card-generate-recipes">
        <div className="title">Your Unknown Drink</div>
        <br></br>

        {/* List the ingredients required for the recipe */}
        <div className="selectedIngredients">
          {`Ingredients required: ${commaAndAndSeparate(recipe.ingredients).toLowerCase()}`}
        </div>

        {/* Decorative Image for a nice UI */}
        <img className="drinkImage" src={drink}></img>
        <br></br><br></br>
        <div className="descriptiveText">Your unknown drink will be one of these 3:</div>
        <br></br><br></br>

        {/* Three potential recipe options */}
        {recipeOptions.map(r => {
          return (<div className="drinkName">{r.name}</div>)
        })}
        <br></br><br></br>
        
        {/* Instructions to help explain how the game works and what can be expected */}
        <div className="descriptiveText">
          The drink that you will make is the same one that was poisoned to kill the victim in the murder mystery.
          Guessing the drink correctly based on the recipe will lead you to the killer!
          So put your detective hat on and solve the mystery!
          </div>
        <br></br><br></br>

        {/* Button to link to the next page and begin the murder mystery story */}
        <Button variant="contained" className="buttonRedLong" onClick={toStory}>
          Read the Mystery
          </Button>

      </div>
    </div>
  );
}

export default GenerateRecipes;
