import React from 'react';
import { Grid } from '@material-ui/core';
import '../styles/addingredients.css';
import lemon from '../assets/lemon.jpg';
import alcohol from '../assets/alcohol bottle.png';
import soda from '../assets/soda.png';
import sugar from '../assets/sugar.jpg';

const AddIngredients = (props) => {
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
            <div className="itemBox">
              <p>Lemon</p>
              <img className="itemImage" src={lemon}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Sugar</p>
              <img className="itemImage" src={sugar}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Scotch</p>
              <img className="itemImage" src={alcohol}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Soda</p>
              <img className="itemImage" src={soda}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Lemon</p>
              <img className="itemImage" src={lemon}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Rum</p>
              <img className="itemImage" src={alcohol}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Soda</p>
              <img className="itemImage" src={soda}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Lemon</p>
              <img className="itemImage" src={lemon}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Vodka</p>
              <img className="itemImage" src={alcohol}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Soda</p>
              <img className="itemImage" src={soda}></img>
            </div>
          </Grid>
          <Grid item xs={2}>
          <div className="itemBox">
              <p>Lemon</p>
              <img className="itemImage" src={lemon}></img>
            </div>
          </Grid>
          
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default AddIngredients;
