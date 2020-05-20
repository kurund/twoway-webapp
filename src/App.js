import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ContentManager from "./containers/ContentManager/ContentManager";
import Dashboard from "./components/Dashboard/Dasboard";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/content" exact component={ContentManager} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
