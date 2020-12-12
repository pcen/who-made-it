import React from 'react';
import './styles/app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes, { Default } from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Default} />
          {
            Routes.map((route) => {
              return (<Route path={route.path} component={route.component} />);
            })
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
