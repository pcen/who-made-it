import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import '../styles/finit.css';

import beth from '../assets/beth.png';
import marge from '../assets/marge.png';
import ray from '../assets/ray.png';

const getKiller = (recipe, suspects) => {
  let killer = null;
  Object.keys(suspects).forEach(name => {
    if (suspects[name].recipe === recipe.name) { killer = name; }
  });
  return killer;
}

const getFatalRecipe = (killer, suspects) => {
  console.log(killer);
  console.log(suspects);
  return suspects[killer].recipe;
}

const KillerProfile = props => {
  const { name, recipe } = props;
  const images = { 'Elizabeth': beth, 'Margaret': marge, 'Raymond': ray };
  const image = images[name];

  return (
    <div className="itemBoxOnePerson">
      <img className="itemImage" src={image}></img>
      <p class="killerName">{name}</p>
      <p class="foodName">{recipe}</p>
    </div>
  )
}

const Finit = props => {
  const { recipe, suspects, guess, setRecipe, setRecipeOptions, setSuspects, setGuess } = props;
  const history = useHistory();

  let correct = false;
  if (Object.keys(guess).length !== 0) {
    correct = suspects[guess.suspect].recipe === recipe.name;
  }

  const killer = getKiller(recipe, suspects);
  const fatalRecipe = getFatalRecipe(killer, suspects);

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

  const playAgain = () => {
    setRecipe({});
    setRecipeOptions([]);
    setSuspects({});
    setGuess({});
    history.push('/');
  }

  return (
    <React.Fragment>
      <div className="redBackground">
        <div className="white-card">
          <div className="title">{title}</div>
          <br></br>
          <div className="subtitle">{subtitle}</div>
          <br></br>
          <br></br>

          <KillerProfile name={killer} recipe={fatalRecipe} />

          <div className="storyConclusion">{`The victim once had a secret affair with none other than
            ${killer}. After a brutal separation, ${killer} was quick to get their revenge. They added a drop of poison
            to their ${fatalRecipe} and served it to the victim on the night of the murder. ${conclusion}
            Click play again to solve another mystery.${correct ? '' : ' Better luck next time!'}`}</div>

          <Button variant="contained" className="buttonRedLong"
            onClick={playAgain}
          >
            Play Again
            </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Finit;
