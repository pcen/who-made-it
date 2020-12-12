import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Routes, { Default } from './Routes';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/' component={Default} />
          {
            Routes.map((route) => {
              return (<Route path={route.path} component={route.component} />);
            })
          }
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
