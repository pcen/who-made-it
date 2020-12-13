import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { getURLInt, getURLStr } from '../logic/utils';

// Import suspect pictures
import beth from '../assets/beth.png';
import marge from '../assets/marge.png';
import ray from '../assets/ray.png';

// Import css styles
import '../styles/guesskiller.css';
import '../styles/buttons.css';

// Component for suspect image, name, and dish
const KillerProfile = props => {
  const { image, name, item, onSelect, selected } = props;
  const handleClick = () => { onSelect(name); };

  return (
    <div className='killer-profile'>
      <img className="itemImage" src={image}></img>
      {selected === name ?
        <div class="personNameSelected">{name}</div> :
        <div onClick={handleClick} class="personName">{name}</div>
      }
      <div className="mixed">mixed the</div>
      <div className="drinkName">{item}</div>
    </div>
  );
}

//This is the main function for the guess killer page
const GuessKiller = props => {
  const { recipe, suspects, guess, setGuess } = props;
  const history = useHistory();

  const [selectedSuspect, setSelectedSuspect] = useState('');
  const step = getURLInt('step', useLocation());
  const guessed = getURLStr('guessed', useLocation());

  // Link the go back button to the previous page
  const toSteps = () => {
    history.push(`/recipe-steps?step=${step}&guessed=${guessed}`);
  };

  // Link the submit button to go back to the steps with guessed true
  const makeGuess = () => {
    if (selectedSuspect !== '') {
      let guessedAt = step;
      if (Object.keys(guess).length !== 0) {
        guessedAt = Math.max(guess.step, guessedAt);
      }
      setGuess({
        suspect: selectedSuspect,
        step: guessedAt,
      });
      history.push(`/recipe-steps?step=${step}&guessed=true`);
    }
  };

  return (
    <div className="guess-killer-container">
      <br></br><br></br><br></br><br></br><br></br>
      <div className="white-card">
        <div>
          <div className="title">Who Done It?</div>
        </div>
        <br></br>
        <br></br>

        {/* Potential Suspects */}
        <div className='killer-profiles'>
          <KillerProfile image={beth} name='Elizabeth' item={suspects.Elizabeth.recipe} onSelect={setSelectedSuspect} selected={selectedSuspect} />
          <KillerProfile image={marge} name='Margaret' item={suspects.Margaret.recipe} onSelect={setSelectedSuspect} selected={selectedSuspect} />
          <KillerProfile image={ray} name='Raymond' item={suspects.Raymond.recipe} onSelect={setSelectedSuspect} selected={selectedSuspect} />
        </div>
        <br></br><br></br>

        {/* Button group to go back or submit your answer */}
        <div className='guess-killer-buttons'>
          <Button variant="contained" className="buttonBlack" onClick={toSteps}>
            Go Back
          </Button>
          <Button variant="contained" className="buttonRed" onClick={makeGuess}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GuessKiller;
