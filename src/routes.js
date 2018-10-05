import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

export default(
    <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/wizard' component={Wizard} />
    </Switch>
)