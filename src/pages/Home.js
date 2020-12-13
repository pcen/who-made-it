import React from "react";

/*Link to add ingredients page*/
import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";
import drink from "../assets/drink.jpg";
import "../styles/home.css";

//This is the main function for the home page
const Home = (props) => {
  return (
    <React.Fragment>
      <div class="homeBackground"></div>

      {/* Game Title */}
      <div class="home">
        <br></br>
        <br></br>
        <h1>WHO MIXED IT?</h1>
        <br></br>

        {/* Drink Card */}
        <Grid container direction="row" alignItems="center" justify="center">
          {/* Card option to select drink */}
          <Grid item xs={3} className="homeOptionCard homeOptionCardDrink">
            <img
              class="homeOptionCardImage homeOptionCardDrink"
              src={drink}
            ></img>
            <br></br>

            {/* Link to start the game - add ingredients page */}
            <Link class="homeOptionCardText" to="/add-ingredients">
              Make a Drink
            </Link>
          </Grid>
        </Grid>

        <br></br>
        <br></br>

        {/* Brief Game Instructions*/}
        <p className="instructions">
          In Who Mixed It, you select drink ingredients that you have in your
          kitchen. Based on these ingredients, you will follow an unknown recipe
          to create a delicious drink. Figuring out what drink you are mixing
          will help you solve a murder mystery.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
