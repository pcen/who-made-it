import React from 'react';
import { Grid, Button } from '@material-ui/core';
import '../styles/incorrectguess.css';
import marge from '../assets/marge.png';


const IncorrectGuess = (props) => {
  return (
    <React.Fragment>
      <div className="background">
        <div className="white-card">
            <div className="title">So close! The killer was Margaret</div>
            <br></br>
            <div className="subtitle">Margaret got away with the murder</div>
            <br></br>
            <br></br>

            <div className="itemBoxOnePerson">
              <img className="itemImage" src={marge}></img>
              <p class="personName">Margaret</p>
              <p class="foodName">Scotch Rickey</p>
            </div>

            <div className="storyConclusion">The esteemed Mr. Robert Hughes once had a secret affair with none other than
            Margaret. After a brutal separation, Margaret was quick to get her revenge. She added a drop of poison
            to her Scotch Tom Collins and served it to Mr. Hughes on the night of the murder. She skipped town and escaped!
            Click play again to solve another mystery. Better luck next time!</div>

            <Button variant="contained" className="buttonRedLong">
              Play Again
            </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default IncorrectGuess;