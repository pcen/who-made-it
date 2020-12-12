import React, { useState } from 'react';
import { Button } from '@material-ui/core';

//Import suspect pictures
import beth from '../assets/beth.png';
import marge from '../assets/marge.png';
import ray from '../assets/ray.png';

//import history for page linking
import { useHistory, useLocation } from 'react-router-dom';

import { getURLInt, getURLStr } from '../logic/utils';

//Import css styles
import '../styles/guesskiller.css';
import '../styles/buttons.css';

//Function formats each suspect's image, name, and dish
const KillerProfile = props => {
  const { image, name, item, onSelect, selected } = props;

  const handleClick = (event) => {
    onSelect(name);
  };

  return (
    <div className='killer-profile'>
      <img className="itemImage" src={image}></img>
      {
        selected === name ?
          <div class="personNameSelected">{name}</div> :
          <div onClick={handleClick} class="personName">{name}</div>
      }
      <br></br>
      <div class="foodName">{item}</div>
    </div>
  );
}

//This is the main function for the guess killer page
const GuessKiller = props => {
  const { recipe, suspects } = props;
  const [guess, setGuess] = useState('');

  const step = getURLInt('step', useLocation());
  const guessed = getURLStr('guessed', useLocation());

  console.log('guess: ' + guess);

  const history = useHistory();

  {/* Link the go back button to the previous page */ }
  const toSteps = () => {
    history.push(`/recipe-steps?step=${step}&guessed=${guessed}`);
  };

  {/* Link the submit button to go back to the steps with guessed true*/}
  const toResults = () => {
    history.push(`/recipe-steps?step=${step}&guessed=${guessed}`);
  };

  return (
    <div className="guess-killer-container">
      <div className="white-card">
        <div>
          <div className="title">Select the Killer</div>
          <br></br>
          <div className="subtitle">Be careful because you only get one try!</div>
        </div>
        <br></br>
        <br></br>

        {/* Potential Suspects */}
        <div className='killer-profiles'>
          <KillerProfile image={beth} name='Elizabeth' item={suspects.Elizabeth.recipe} onSelect={setGuess} selected={guess} />
          <KillerProfile image={marge} name='Margaret' item={suspects.Margaret.recipe} onSelect={setGuess} selected={guess} />
          <KillerProfile image={ray} name='Raymond' item={suspects.Raymond.recipe} onSelect={setGuess} selected={guess} />
        </div>
        <br></br><br></br>

        {/* Button group to go back or submit your answer */}
        <div className='guess-killer-buttons'>
          <Button variant="contained" className="buttonBlack" onClick={toSteps}>
            Go Back
          </Button>
          <Button variant="contained" className="buttonRed" onClick={toResults}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GuessKiller;
