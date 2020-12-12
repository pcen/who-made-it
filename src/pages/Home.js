import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

//Import images
import drink from "../assets/drink.jpg";
import burger from "../assets/burger.png";
import background from "../assets/background.png";

//Import styles
import "../styles/home.css";

//Home page to welcome users and ask them to select whether they are craving a drink or some food
const Home = (props) => {
  return (
    <div className="home">

      <h1>WHO MADE IT?</h1>
      <h2>What would you like to make today? </h2>

      <Grid container direction="row" alignItems="center" justify="center">
        {/* Card to display drink option */}
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
        {/* Forced spacing between the card options */}
        <Grid item xs={1}></Grid>
        {/* Card to display food option */}
        <Grid item xs={3} className="homeOptionCard">
          <img class="homeOptionCardImage" src={burger}></img>
          <br></br>
          <Link class="homeOptionCardText" to="/add-ingredients">
            Food
          </Link>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      {/* Instructions to make sure we don't confuse everyone too much */}
      <p className="instructions">
        Choose whether you want to make a delicious Drink or fantastic Food item today.
        Based on the ingredients you have in your kitchen, you will get the chance to solve a mystery!
        </p>
    </div>
  );
};

export default Home;
