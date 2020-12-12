import React from "react";

import drink from "../drink.jpg";
import burger from "../burger.png";
import "../styles/home.css";
const Home = (props) => {
  return (
    <div className="home">
      <h1>Who made it</h1>
      <h2>What would you like to make today? </h2>
      <div className="Card_drink">
        <img src={drink}></img>
        <h1>Drink</h1>
      </div>

      <div className="Card_burger">
        <img src={burger}></img>
        <h1>Food</h1>
      </div>
    </div>
  );
};

export default Home;
