import React from "react";

import drink from "../assets/drink.jpg";
import burger from "../assets/burger.png";
import background from "../assets/background.png";
import "../styles/home.css";
const Home = (props) => {
  return (
    <div className="home">
      <h1>Who made it</h1>
      <h2>What would you like to make today? </h2>
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
