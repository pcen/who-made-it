import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Routes, { Default } from './Routes';
import Recipes from './Components/Recipes';
import Suspects from './Components/Suspects';

import './styles/app.css';

function App() {
  const [recipe, setRecipe] = useState(Recipes.drinks.ScotchTomCollins);
  const [suspects, setSuspects] = useState(Suspects);

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
                  suspects={suspects}
                  setSuspects={setSuspects}
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
