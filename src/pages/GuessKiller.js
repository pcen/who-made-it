import React from 'react';
import { Grid, Button } from '@material-ui/core';
import '../styles/guesskiller.css';
import beth from '../assets/beth.png';
import marge from '../assets/marge.png';
import ray from '../assets/ray.png';

const GuessKiller = (props) => {
    return (
      <React.Fragment>
        <div className="white-background">
          <br></br>
          <br></br>
          <div className="title">Select the Killer</div>
          <br></br>
          <br></br>
          <div className="subtitle">Be careful because you only get one try!</div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
            <Grid item xs={3}>
                <div className="itemBox">
                <img className="itemImage" src={beth}></img>
                <p class="personName">Elizabeth</p>
                <p class="foodName">Scotch Tom Collins</p>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div className="itemBox">
                <img className="itemImageMarge" src={marge}></img>
                <p class="personName">Margaret</p>
                <p class="foodName">Scotch Rickey</p>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div className="itemBox">
                <img className="itemImage" src={ray}></img>
                <p class="personName">Raymond</p>
                <p class="foodName">Whiskey Sour</p>
                </div>
            </Grid>
        </Grid>
        <Button variant="contained" className="buttonBlack">
            Go Back
        </Button>
        <Button variant="contained" className="buttonRed">
            Submit
        </Button>

        </div>
    </React.Fragment>
  );
}

export default GuessKiller;
    