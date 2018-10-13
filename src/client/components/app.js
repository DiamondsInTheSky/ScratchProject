import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import login from './login';
import register from './register';
import error from './error';
import profileCard from './profileCard';
import Navigation from './navigationbar'


const App = () => (

    
      <BrowserRouter>
      
      <div>
        <Navigation />
          <Switch>
            <Route path="/" component={login} exact />
            <Route path="/login" component={login} />
            <Route path="/register" component={register} />
            <Route path="/profileCard" component={profileCard} />
            <Route component={error} />
          </Switch>
       </div>
     </BrowserRouter>    
    
);

export default App;