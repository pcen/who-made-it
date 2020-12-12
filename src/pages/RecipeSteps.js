import React from 'react';
import "../styles/steps.css";
import '../styles/guesskiller.css';
import { Grid } from '@material-ui/core';

// Import Suspect Images
import Elizabeth from '../assets/beth.png';
import Margaret from '../assets/marge.png';
import Raymond from '../assets/ray.png';


//This page will provide the user with the steps to follow along with the poisoned recipe (minus the poison of coruse)
//To help them figure out who the killer is, as soon as they find out what they are making
const RecipeSteps = (props) => {
  return (
    <React.Fragment>
      <div className="steps">
        {/* The Title */}
        <h1>Follow along with the recipe (minus the poison) to solve the mystery and find out who the killer is</h1>

        <Grid container
              direction="row"
        >

          <Grid container item xs={4}>
            <div className="stepsPanel">
              {/* The Recipe Steps */}
              {/* Step 1 */}
              <Grid item xs={12} className="stepNumber">
                <h2>Step 1</h2>
              </Grid>
              <div className="stepsDetails">
                {/* Ingredients required for step 1 */}
                <div>Ingredients Needed</div>
                <ul>
                  <li>1 glass</li>
                  <li>1 Lump of Ice</li>
                </ul>
                <br></br>
                {/* Instructions for step 1 */}
                <div>Find a glass and add the lump of ice</div>
                {/* Progress Tracker */}
                <div className="stepsProgress"># Steps Remaining</div>
              </div>
            </div>
          </Grid>
          
          <Grid container item xs={8} style={{height: 'calc(100vh - 200px)', marginTop: '1em',}}>
            <Grid item xs={12}>
              {/* The Suspects */}
              <h2 class="stepsSubtitle">Suspects</h2>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <img className="itemImageSmall" src={Elizabeth}></img>
                <br></br>
                <p class="personNameSmall">Elizabeth</p>
                <p  class="foodNameSmall">Scotch Tom Collins</p>
              </Grid>
              <Grid item xs={4}>
                <img className="itemImageSmallMarge" src={Margaret}></img>
                <br></br>
                <p class="personNameSmall">Margaret</p>
                <p  class="foodNameSmall">Scotch Rickey</p>
              </Grid>
              <Grid item xs={4}>
                <img className="itemImageSmall" src={Raymond}></img>
                <br></br>
                <p class="personNameSmall">Raymond</p>
                <p  class="foodNameSmall">Whiskey Sour</p>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {/* The Menu Options */}
              Buttons Will Go Here
            </Grid>

          </Grid>
          
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default RecipeSteps;