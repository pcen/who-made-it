import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import beth from '../assets/beth.png';
import marge from '../assets/marge.png';
import ray from '../assets/ray.png';

import { useHistory } from 'react-router-dom';

import '../styles/guesskiller.css';
import '../styles/buttons.css';

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

const GuessKiller = props => {
  const { recipe, suspects } = props;
  const [guess, setGuess] = useState('');

  console.log('guess: ' + guess);

  const history = useHistory();

  const toSteps = () => {
    history.push('/recipe-steps');
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

        <div className='killer-profiles'>
          <KillerProfile image={beth} name='Elizabeth' item={suspects.Elizabeth.recipe} onSelect={setGuess} selected={guess} />
          <KillerProfile image={marge} name='Margaret' item={suspects.Margaret.recipe} onSelect={setGuess} selected={guess} />
          <KillerProfile image={ray} name='Raymond' item={suspects.Raymond.recipe} onSelect={setGuess} selected={guess} />
        </div>
        <br></br><br></br>

        <div className='guess-killer-buttons'>
          <Button variant="contained" className="buttonBlack" onClick={toSteps}>
            Go Back
          </Button>
          <Button variant="contained" className="buttonRed">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GuessKiller;
