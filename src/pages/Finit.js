import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import '../styles/finit.css';

import beth from '../assets/beth.png';
import marge from '../assets/marge.png';
import ray from '../assets/ray.png';

// Returns who the killer was based off of the recipe that was assigned
// to the user and the recipe that each of the suspects made
const getKiller = (recipe, suspects) => {
  let killer = null;
  Object.keys(suspects).forEach(name => {
    if (suspects[name].recipe === recipe.name) { killer = name; }
  });
  return killer;
}

// Returns the name of the recipe that was used to poison the victim
const getFatalRecipe = (killer, suspects) => {
  console.log(killer);
  console.log(suspects);
  return suspects[killer].recipe;
}

// Component displaying the killer's name, recipe, and image
const KillerProfile = props => {
  const { name, recipe } = props;
  const images = { 'Elizabeth': beth, 'Margaret': marge, 'Raymond': ray };
  const image = images[name];

  return (
    <div className="itemBoxOnePerson">
      <img className="itemImage" src={image}></img>
      <div class="killerName">{name}</div>
      <div class="mixed">mixed the</div>
      <div class="drinkName">{recipe}</div>
    </div>
  )
}

// Final page component upon completing the recipe
// Reveals if the user's guess was correct or not and describes the
// aftermath of the murder
const Finit = props => {
  const { recipe, suspects, guess, setRecipe, setRecipeOptions, setSuspects, setGuess } = props;
  const history = useHistory();

  // Determine if the user's guess was correct
  let correct = false;
  if (Object.keys(guess).length !== 0) {
    correct = suspects[guess.suspect].recipe === recipe.name;
  }

  // Get the killer and the recipe they used when poisoning the victim
  const killer = getKiller(recipe, suspects);
  const fatalRecipe = getFatalRecipe(killer, suspects);

  // Conditional text based off of whether or not the user's guess was correct
  const title = correct ?
    'Great job! You\'d make a good detective!'
    : `So close! The killer was ${killer}`;
  const subtitle = correct ?
    `The killer was ${killer}`
    : `${killer} got away with the murder`;
  const conclusion = correct ?
    `${killer} skipped town, thinking they had escaped. Luckily, and keen detective such as
    yourself rose to the challenge and solved the mystery!`
    : `${killer} skipped town and escaped!`;

  // Resets the game state and returns the user to the home page
  const playAgain = () => {
    setRecipe({});
    setRecipeOptions([]);
    setSuspects({});
    setGuess({});
    history.push('/');
  }

  return (
      <div className="redBackground">
        <div className="white-card">
          {/* Title */}
          <div className="title">{title}</div>
          <br></br>
          <div className="subtitle">{subtitle}</div>
          <br></br>
          <br></br>
          {/* The Killer's Profile */}
          <KillerProfile name={killer} recipe={fatalRecipe} /><br></br>
          {/* Concluding Story */}
          <div className="storyConclusion">{`The victim once had a secret affair with none other than
            ${killer}. After a brutal separation, ${killer} was quick to get their revenge. They added a drop of poison
            to their ${fatalRecipe} and served it to the victim on the night of the murder. ${conclusion}
            Click play again to solve another mystery.${correct ? '' : ' Better luck next time!'}`}</div>
          {/* Play Again */}
          <Button variant="contained" className="buttonRedLong"
            onClick={playAgain}
          >
            Play Again
          </Button>
        </div>
      </div>
  );
}

export default Finit;
