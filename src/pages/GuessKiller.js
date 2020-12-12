import React from 'react';
import { Grid } from '@material-ui/core';
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
        </div>
    </React.Fragment>
  );
}

export default GuessKiller;
    