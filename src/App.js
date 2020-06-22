import React from "react";
import Dashboard from "views/Dashboard";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Route path="/dashboard" component={Dashboard} />
      <Redirect from="/" to="/dashboard" />
    </React.Fragment>
  );
}

export default App;
