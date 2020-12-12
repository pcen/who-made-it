import React from 'react';
import { Grid, Button } from '@material-ui/core';
import '../styles/incorrectguess.css';
import marge from '../assets/marge.png';


const IncorrectGuess = (props) => {
  return (
    <React.Fragment>
      <div className="background">
        <br></br>
        <br></br>
        <div className="white-card">
            <div className="title">So close! The killer was Margaret</div>
            <br></br>
            <div className="subtitle">Check back soon to solve another crime</div>
            <br></br>
            <br></br>

            <div className="itemBoxOnePerson">
              <img className="itemImage" src={marge}></img>
              <p class="personName">Margaret</p>
              <p class="foodName">Scotch Rickey</p>
            </div>

            <Button variant="contained" className="buttonRedLong">
              Continue the Recipe
            </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default IncorrectGuess;