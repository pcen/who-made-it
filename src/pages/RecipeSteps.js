import React from 'react';
import '../styles/steps.css';
import '../styles/buttons.css';
import { Grid, Button } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import { getURLInt, getURLStr } from '../logic/utils';

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
  const { recipe, suspects, guess } = props;
  const history = useHistory();
  const step = getURLInt('step', useLocation());
  const guessed = getURLStr('guessed', useLocation());

  console.log('current guess:');
  console.log(guess);

  const nextStep = () => {
    if (step < recipe.steps.length) {
      console.log(step + 1);
      history.push(`/recipe-steps?step=${step + 1}&guessed=${guessed}`);
    } else {
      history.push('/finit');
    }
  };

  const previousStep = () => {
    if (step > 1) {
      history.push(`/recipe-steps?step=${step - 1}&guessed=${guessed}`);
    }
  };

  const toGuess = () => {
    history.push(`/guess-killer?step=${step}&guessed=${guessed}`);
  };

  return (
    <div className='steps'>
      <br></br><br></br>
      {/* The Title */}
      <h1>Follow the recipe (without poison) to find out which drink you're making and solve the mystery</h1>
      <br></br>
      <Grid container direction='row'>
      <div class="white-card-row1">
      <Grid container direction='row'>
        <Grid item xs={6}>
          <div className='ingredientsContainer'>
            {/* The Ingredients List */}
            {/* <Grid className='stepNumber'> */}
              <h2>{`Ingredients`}</h2>
            {/* </Grid> */}
            <ul className='ingredientsList'>
              {
                recipe.ingredients.map(ingredient => {
                  return <li>{ingredient}</li>
                })
              }
            </ul>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='stepsPanel'>
            {/* The Recipe Steps */}
            {/* <Grid className='stepNumber'> */}
              <h2>{`Step ${step}`}</h2>
            {/* </Grid> */}
            <div className='stepsDetails'>
              {/* Instructions */}
              <div>{recipe.steps[step - 1]}</div>
            </div>
          </div>
        </Grid>
        </Grid>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Button variant='contained' className='buttonBlack' onClick={previousStep}>
              Prior Step
            </Button>
            <Button variant='contained' className='buttonGrey' onClick={nextStep}>
              {step === recipe.steps.length ? 'Et Fini!' : 'Next Step'}
            </Button>
        </div>

        <div class="white-card-suspects">
        <Grid container item xs={12}>
          <Grid item xs={12}>

            {/* The Suspects */}
            <br></br><br></br>
            <h2 class='stepsSubtitleSuspects'>The Suspects</h2>
            <br></br>
          </Grid>
          <Grid container item xs={12}>
            <SuspectProfile name='Elizabeth' item={suspects.Elizabeth.recipe} image={Elizabeth} />
            <SuspectProfile name='Margaret' item={suspects.Margaret.recipe} image={Margaret} />
            <SuspectProfile name='Raymond' item={suspects.Raymond.recipe} image={Raymond} />
          </Grid>
          <Grid item xs={12}>
            {/* The Menu Options */}
            <Button variant='contained' className='buttonRed' onClick={toGuess}>
              {guessed === 'false' ? 'Solved It?' : 'Change Guess'}
            </Button>
            
          </Grid>
        </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default RecipeSteps;
