import React from 'react';
import "../styles/steps.css";

import { Grid } from '@material-ui/core';


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
                  <li>2 - 3 Lumps of Ice</li>
                </ul>
                <br></br>
                {/* Instructions for step 1 */}
                <div>Find a glass and add the lumps of ice</div>
              </div>
            </div>
          </Grid>
          
          <Grid container item xs={8}>
              <div className="stepsSuspectsMenu">
                {/* The Suspects */}
                <h2>Suspects</h2>
                <Grid item xs={4}>
                  Elizabeth
                  <br></br>
                  Food Item 1
                </Grid>
                <Grid item xs={4}>
                  Margaret
                </Grid>
                <Grid item xs={4}>
                  Raymond
                </Grid>
                {/* The Menu Options */}
                Random text so I can see the background color :)
              </div>
          </Grid>
          
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default RecipeSteps;