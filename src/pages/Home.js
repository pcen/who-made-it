import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import drink from "../assets/drink.jpg";

import "../styles/home.css";

const Home = (props) => {
  return (
    <React.Fragment>
      <div class="homeBackground"></div>
      <div class="home">
        <br></br><br></br>
        <h1>WHO MIXED IT?</h1>
        <br></br>

        <Grid container direction="row" alignItems="center" justify="center">
          {/* Card option to select drink */}
          <Grid item xs={3} className="homeOptionCard homeOptionCardDrink">
            <img
              class="homeOptionCardImage homeOptionCardDrink"
              src={drink}
            ></img>
            <br></br>
            {/* Link to start the game */}
            <Link class="homeOptionCardText" to="/add-ingredients?type=drink">
              Make a Drink
            </Link>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        {/* Instructions so we don't confuse everyone too much */}
        <p className="instructions">
          In Who Mixed It, you select drink ingredients that you have in your kitchen.
          Based on these ingredients, you will follow an unknown recipe to create a delicious drink.
          Figuring out what drink you are mixing will help you solve a murder mystery.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
