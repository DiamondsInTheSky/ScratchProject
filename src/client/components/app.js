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
            {/* <Route path="/" component={profileCard} exact /> */}
            <Route path="/login" component={login} />
            <Route path="/register" component={register} />
<<<<<<< HEAD
            <Route path="/profileCard" component={profileCard} />
=======
            <Route path="/profile/:username" component={profileCard} />
>>>>>>> 42014cb6dd15136d5093d33ca3f3de973ce2ac8b
            <Route component={error} />
          </Switch>
       </div>
     </BrowserRouter>    
    
);

export default App;