import React from 'react';
import Recipes from '../Components/Recipes';
import { Button } from "@material-ui/core";
import drink from '../assets/drink2.png';

import { useHistory } from 'react-router-dom';

import '../styles/generaterecipes.css';

const GenerateRecipes = (props) => {

  const { recipeOptions, recipe, suspects } = props;
  console.log('Recipe options:');
  console.log(recipeOptions);
  console.log('Suspects:');
  console.log(suspects);
  console.log('Your recipe:');
  console.log(recipe);

  const history = useHistory();

  const toStory = () => {
    history.push('/story');
  };

  return (
    <React.Fragment>
      <div className="background">
        <div className="white-card">
          <div className="title">Generating recipes...</div>
          <br></br>
          <div className="selectedIngredients">Your ingredients: lemon, scotch, soda, ice</div>
          <img className="drinkImage" src={drink}></img>
          <br></br>
          <div className="descriptiveText">Without knowing which, you will be making one of the following recipes:</div>
          <br></br>
          {/* Three potential recipe options */}
          {recipeOptions.map(r => {
            return (<div className="drinkName">{r.name}</div>)
          })}
          <br></br>
          <div className="descriptiveText">
            Put your detective hat on and prepre to follow along with one of these delicious recipes to help you solve the mystery!
          </div>

          <Button variant="contained" className="buttonRedLong" onClick={toStory}>
            Continue to the Mystery
          </Button>

        </div>
      </div>
    </React.Fragment>
  );
}

export default GenerateRecipes;
