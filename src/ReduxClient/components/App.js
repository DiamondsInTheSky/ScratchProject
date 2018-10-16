import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Error from './Error';
import HomePage from './HomePage';
import Navigation from './Navigationbar'


const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile/:username" component={HomePage} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;