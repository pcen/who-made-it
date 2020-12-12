import React, { createContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Routes, { Default } from './Routes';
import Recipes from './Components/Recipes';

import './styles/app.css';

const RecipeContext = createContext({});

function App() {

  return (
    <div className="App">
      <RecipeContext.Provider value={Recipes.drinks.ScotchTomCollins}>
        <HashRouter basename='/'>
          <Switch>
            <Route exact path='/' component={Default} />
            {
              Routes.map((route) => {
                return (
                  <Route
                    path={route.path}
                    component={route.component}
                  />
                );
              })
            }
          </Switch>
        </HashRouter>
      </RecipeContext.Provider>
    </div>
  );
}

export { RecipeContext };
export default App;
