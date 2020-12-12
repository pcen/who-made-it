import React from 'react';
import "../styles/steps.css";
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
                Elizabeth
                 <br></br>
                 Scotch Tom Collins
              </Grid>
              <Grid item xs={4}>
                Elizabeth
                 <br></br>
                 Scotch Tom Collins
              </Grid>
              <Grid item xs={4}>
                Elizabeth
                 <br></br>
                 Scotch Tom Collins
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {/* The Menu Options */}
              Random text so I can see the background color :)
            </Grid>

          </Grid>
          
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default RecipeSteps;