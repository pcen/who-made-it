import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import drink from "../assets/drink.jpg";
import burger from "../assets/burger.png";
import background from "../assets/background.png";
import "../styles/home.css";
const Home = (props) => {
  return (
    <React.Fragment>
    <div class="homeBackground"></div>
    <div class="home">

      <h1>WHO MADE IT?</h1>
      <h2>What would you like to make today? </h2>

      <Grid container direction="row" alignItems="center" justify="center">
        {/* Card option to select drink */}
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
        {/* Forced space between cards */}
        <Grid item xs={1}></Grid>
        {/* Card option to select food */}
        <Grid item xs={3} className="homeOptionCard">
          <img class="homeOptionCardImage" src={burger}></img>
          <br></br>
          <Link class="homeOptionCardText" to="/add-ingredients">
            Food
          </Link>
        </Grid>
      </Grid>
      <br></br><br></br>
      {/* Instructions so we don't confuse everyone too much */}
      <p className="instructions">
        Choose whether you would like to make a delicious Drink or fantastic Food item today.
        Based on the ingredients you have in your kitchen, you will solve a mystery!
        </p>
    </div>
    </React.Fragment>
  );
};

export default Home;
