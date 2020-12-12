import React from 'react';
import { Grid } from '@material-ui/core';
import '../styles/addingredients.css';
import lemon from '../assets/lemon.jpg';
import alcohol from '../assets/alcohol bottle.png';
import soda from '../assets/soda.png';
import sugar from '../assets/sugar.jpg';
import ingredientsJson from '../Components/Data/data.json'

var ingredientArray = []

const AddIngredients = (props) => {

  const onIngredientClick = (prop) => {
    console.log(ingredientArray.push(prop))
    console.log(ingredientArray)
   }

  return (
    <React.Fragment>

      <div className="background">
        <div className="title">What ingredients do you have?</div>
        <br></br>
        <br></br>
        <div className="searchBar"> Search an ingredient... </div>
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
          <Grid item xs={2}>
            <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Lemon</p>
              <img className="foodItemImage" src={lemon}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("sugar")}>
              <p>Sugar</p>
              <img className="foodItemImage" src={sugar}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Scotch</p>
              <img className="foodItemImage" src={alcohol}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Soda</p>
              <img className="foodItemImage" src={soda}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Lemon</p>
              <img className="foodItemImage" src={lemon}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Rum</p>
              <img className="foodItemImage" src={alcohol}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Soda</p>
              <img className="foodItemImage" src={soda}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Lemon</p>
              <img className="foodItemImage" src={lemon}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Vodka</p>
              <img className="foodItemImage" src={alcohol}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Soda</p>
              <img className="foodItemImage" src={soda}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="foodItemBox" onClick={e => onIngredientClick("lemon")}>
              <p>Lemon</p>
              <img className="foodItemImage" src={lemon}></img>
            </div>
          </Grid>

        </Grid>
      </div>
    </React.Fragment>
  );
}

export default AddIngredients;