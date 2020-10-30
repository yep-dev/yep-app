import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Thrust from './pages/machine/thrust';
import MachineThrustSettings from './pages/machine/machineThrustSettings';
import Dashboard from './pages/dashboard';
import GeneralSettings from './pages/generalSettings';

const Routing = () => (
  <Switch>
    <Route path="/machine">
      <Switch>
        <Route path="/machine/thrust">
          <Thrust />
        </Route>
        <Route path="/machine/rotation">rotation</Route>
        <Route path="/machine/settings/thrust">
          <MachineThrustSettings />
        </Route>
        <Route path="/machine">overview</Route>
      </Switch>
    </Route>
    <Route path="/arm">arm</Route>
    <Route path="/general-settings">
      <GeneralSettings />
    </Route>
    <Route path="/">
      <Dashboard />
    </Route>
  </Switch>
);

export default Routing;

export const headerTitles = {
  '/machine/thrust': 'Machine thrust',
  '/machine/rotation': 'Machine rotation',
  '/machine/settings/thrust': 'Machine thrust settings',
  '/machine': 'Machine overview',
  '/general-settings': 'General settings',
};
