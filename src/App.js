import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Routes, { Default } from './Routes';

import './styles/app.css';

function App() {
  const [recipe, setRecipe] = useState({});
  const [recipeOptions, setRecipeOptions] = useState([]);
  const [suspects, setSuspects] = useState({});
  const [guess, setGuess] = useState({});

  return (
    <div className="App">
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/' component={Default} />
          {Routes.map((route) => {
            return (
              <Route path={route.path}>
                <route.component
                  recipe={recipe}
                  setRecipe={setRecipe}
                  recipeOptions={recipeOptions}
                  setRecipeOptions={setRecipeOptions}
                  suspects={suspects}
                  setSuspects={setSuspects}
                  guess={guess}
                  setGuess={setGuess}
                />
              </Route>
            );
          })}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
