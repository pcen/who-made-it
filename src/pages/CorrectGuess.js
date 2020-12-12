import React from 'react';
import { Grid, Button } from '@material-ui/core';
import '../styles/correctguess.css';
import marge from '../assets/marge.png';

const CorrectGuess = (props) => {
    return (
      <React.Fragment>
        <div className="white-background">
            <br></br>
            <br></br>
          <div className="title">Great job! You'd make a good detective!</div>
          <br></br>
          <div className="subtitle">The killer was Margaret</div>
          <br></br>
          <br></br>

          <div className="itemBoxOnePerson">
                <img className="itemImage" src={marge}></img>
                <p class="personName">Margaret</p>
                <p class="foodName">Scotch Rickey</p>
         </div>

        <Button variant="contained" className="buttonRedLong">
            Continue to the Recipe
        </Button>

        </div>
    </React.Fragment>
  );
}

export default CorrectGuess;
    