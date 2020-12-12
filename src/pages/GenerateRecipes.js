import React from 'react';
import Recipes from '../Components/Recipes';
import { Button } from "@material-ui/core";
import drink from '../assets/drink2.png';

import '../styles/generaterecipes.css';

const GenerateRecipes = (props) => {
  
    return (
        <React.Fragment>
          <div className="background">
            <br></br>
            <br></br>
            <div className="white-card">
                <div className="title">Generating recipes...</div>
                <br></br>
                <div className="selectedIngredients">You selected: lemon, scotch, soda, ice</div>
                <img className="drinkImage" src={drink}></img>
                <br></br>
                <div className="descriptiveText">You will be making one of the following recipes:</div>
                <br></br>
                <div className="drinkName">Scotch Tom Collins</div>
                <div className="drinkName">Scotch Rickey</div>
                <div className="drinkName">Whiskey Sour</div>
                <br></br>
                <br></br>
                <div className="descriptiveText">ADD MORE INSTRUCTIONS!!!!!!!!!!!!!!!!!!!!!!!!</div>
    
                
    
                <Button variant="contained" className="buttonRedLong">
                  Continue to the Mystery
                </Button>
    
            </div>
            
          </div>
        </React.Fragment>
      );
}

export default GenerateRecipes;
