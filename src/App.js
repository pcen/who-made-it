import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Routes, { Default } from './Routes';
import Recipes from './Components/Recipes';

import './styles/app.css';

function App() {
  const [recipe, setRecipe] = useState(Recipes.drinks.ScotchTomCollins);

  return (
    <div className="App">
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/' component={Default} />
          {
            Routes.map((route) => {
              return (
                <Route path={route.path}>
                  <route.component
                    recipe={recipe}
                    setRecipe={setRecipe}
                  />
                </Route>
              );
            })
          }
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
