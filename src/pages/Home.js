import React from "react";
import {Grid} from '@material-ui/core';

import drink from "../assets/drink.jpg";
import burger from "../assets/burger.png";
import background from "../assets/background.png";
import "../styles/home.css";
const Home = (props) => {
  return (
    <div className="home">
      <h1>Who made it</h1>
      <h2>What would you like to make today? </h2>
      {/*<div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>*/}

      <Grid container 
            direction="row" 
            alignItems="center"
            justify="middle"
      >
        <Grid item xs={3} className="homeOptionCard homeOptionCardDrink">
          <img class="homeOptionCardImage homeOptionCardDrink" src={drink}></img>
          <div class="homeOptionCardText">Drink</div>
        </Grid>
        <Grid item xs={3} className="homeOptionCard">
          <img class="homeOptionCardImage" src={burger}></img>
          <div class="homeOptionCardText">Food</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
