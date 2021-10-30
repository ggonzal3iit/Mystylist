import React from 'react';
import {Switch, Route} from "react-router-dom";

import GlobalNavBar from './components/AllAccess/GlobalNavBar';
import Home from './components/AllAccess/Home';
import Login from './components/AllAccess/Login';
import Signup from './components/AllAccess/Signup';

function App() {
  return (
      <div>
        <GlobalNavBar/>

        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup}/>
          </Switch>
      </div>
      );
}

      export default App;
