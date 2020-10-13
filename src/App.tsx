import React from 'react';
import Layout from "./layout";
import "antd/dist/antd.dark.less"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Thrust from "./pages/machine/thrust";


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/machine">
            <Switch>
              <Route path="/machine/thrust">
                <Thrust />
              </Route>
              <Route path="/machine/rotation">
                rotation
              </Route>
              <Route path="/machine">overview</Route>
            </Switch>
          </Route>
          <Route path="/arm">arm</Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;