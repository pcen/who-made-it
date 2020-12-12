import "./App.css";
import drink from "./drink.jpg";
import burger from "./burger.png";

function App() {
  return (
    <div className="App">
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
}

export default App;
