import * as React from 'react';
import Home from './Home';
import {Route, Switch} from 'react-router';
import Login from './Login';

export default () => (
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/login" exact={true} component={Login}/>
    </Switch>
);
