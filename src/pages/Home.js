import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";

import drink from "../assets/drink.jpg";
import burger from "../assets/burger.png";
import background from "../assets/background.png";
import "../styles/home.css";
const Home = (props) => {
  return (
    <div className="home">
      <Grid container direction="row" alignItems="center" justify="center">
        <div class="area">
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
        </div>
        <h1>Who made it</h1>
        <br></br>
        <h2>What would you like to make today? </h2>
        <Grid item xs={3} className="homeOptionCard homeOptionCardDrink">
          <img
            class="homeOptionCardImage homeOptionCardDrink"
            src={drink}
          ></img>
          <Link class="homeOptionCardText" to='/add-ingredients'>Drink</Link>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3} className="homeOptionCard">
          <img class="homeOptionCardImage" src={burger}></img>
          <Link class="homeOptionCardText" to='/add-ingredients'>Food</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
