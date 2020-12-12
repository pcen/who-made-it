import React, { useState } from 'react';
import '../styles/steps.css';
import '../styles/buttons.css';
import { Grid, Button } from '@material-ui/core';

// Import Suspect Images
import Elizabeth from '../assets/beth.png';
import Margaret from '../assets/marge.png';
import Raymond from '../assets/ray.png';

const SuspectProfile = props => {
  const { name, item, image } = props;
  return (
    <Grid item xs={4}>
      <img alt='Elizabeth' className='itemImageSmall' src={image}></img>
      <br></br>
      <p class='personNameSmall'>{name}</p>
      <p class='foodNameSmall'>{item}</p>
    </Grid>
  );
}

// This page will provide the user with the steps to follow along with the poisoned recipe (minus the poison of coruse)
// To help them figure out who the killer is, as soon as they find out what they are making
const RecipeSteps = (props) => {
  const { recipe, suspects } = props;
  console.log(recipe);

  const [stepNumber, setStepNumber] = useState(1);
  const stepsRemaining = recipe.steps.length - stepNumber;

  const nextStep = () => {
    if (stepNumber < recipe.steps.length) { setStepNumber(stepNumber + 1); }
  };

  const previousStep = () => {
    if (stepNumber > 1) { setStepNumber(stepNumber - 1); }
  };

  return (
    <div className='steps'>
      {/* The Title */}
      <h1>Follow along with the recipe (minus the poison) to solve the mystery and find out who the killer is</h1>

      <Grid container direction='row'>

        <Grid container item xs={3}>
          <div className='ingredientsContainer'>
            {/* The Ingredients List */}
            <Grid item xs={12} className='stepNumber'>
              <h2>{`Ingredients`}</h2>
            </Grid>
            <ul className='ingredientsList'>
              {
                recipe.ingredients.map(ingredient => {
                  return <li>{ingredient}</li>
                })
              }
            </ul>
          </div>
          {/* Progress Tracker */}
          <div className='stepsProgress'>
            {`Steps Remaining: ${stepsRemaining}`}
          </div>
        </Grid>

        <Grid container item xs={3}>
          <div className='stepsPanel'>
            {/* The Recipe Steps */}
            <Grid item xs={12} className='stepNumber'>
              <h2>{`Step ${stepNumber}`}</h2>
            </Grid>
            <div className='stepsDetails'>
              {/* Instructions */}
              <div>{recipe.steps[stepNumber - 1]}</div>
            </div>
          </div>
        </Grid>

        <Grid container item xs={6} style={{ height: 'calc(100vh - 200px)', marginTop: '1em', }}>
          <Grid item xs={12}>
            {/* The Suspects */}
            <h2 class='stepsSubtitle'>Suspects</h2>
          </Grid>
          <Grid container item xs={12}>
            <SuspectProfile name='Elizabeth' item={suspects.Elizabeth.recipe} image={Elizabeth} />
            <SuspectProfile name='Margaret' item={suspects.Margaret.recipe} image={Margaret} />
            <SuspectProfile name='Raymond' item={suspects.Raymond.recipe} image={Raymond} />
          </Grid>
          <Grid item xs={12} style={{ paddingTop: '20px' }}>
            {/* The Menu Options */}
            <Button variant='contained' className='buttonGrey' onClick={() => { }}>
              Solved It?
            </Button>
            <Button variant='contained' className='buttonBlack' onClick={previousStep}>
              Go Back
            </Button>
            <Button variant='contained' className='buttonRed' onClick={nextStep}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default RecipeSteps;
