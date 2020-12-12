import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import drink from "../assets/drink.jpg";
import burger from "../assets/burger.png";
import background from "../assets/background.png";
import "../styles/home.css";
const Home = (props) => {
  return (
    <div className="home">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>WHO MADE IT?</h1>
      <h2>What would you like to make today? </h2>
      <br></br>
      <br></br>
      <br></br>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={3} className="homeOptionCard homeOptionCardDrink">
          <img
            class="homeOptionCardImage homeOptionCardDrink"
            src={drink}
          ></img>
          <br></br>
          <Link class="homeOptionCardText" to="/add-ingredients">
            Drink
          </Link>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3} className="homeOptionCard">
          <img class="homeOptionCardImage" src={burger}></img>
          <br></br>
          <Link class="homeOptionCardText" to="/add-ingredients">
            Food
          </Link>
        </Grid>
      </Grid>
      <br></br><br></br>
      <p className="instructions">Choose a Drink or Food item that you would like to make today. Based on the ingredients you have, 
      you will solve a mystery.</p>
    </div>
  );
};

export default Home;
