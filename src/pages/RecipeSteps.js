import React from 'react';


//This page will provide the user with the steps to follow along with the poisoned recipe (minus the poison of coruse)
//To help them figure out who the killer is, as soon as they find out what they are making
const RecipeSteps = (props) => {
  return (
    <React.Fragment>
      {/* The Title */}
      <div>Follow along with the recipe (minus the poison) to solve the mystery and find out who the killer is</div>

      {/* The Recipe Steps */}
      {/* Step 1 */}
      <div>Step 1</div>
      <div>
        {/* Ingredients required for step 1 */}
        <div>Ingredients Needed</div>
        <ul>
          <li>1 glass</li>
          <li>2 - 3 Lumps of Ice</li>
        </ul>
        <br></br>
        {/* Instructions for step 1 */}
        <div>Find a glass and add the ice</div>
      </div>
      

      {/* The Suspects */}

      {/* The Menu Options */}
    </React.Fragment>
  );
}

export default RecipeSteps;