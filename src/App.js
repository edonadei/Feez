import React from "react";
import { Route } from "react-router-dom";
import { Header } from "components/Header";
import HomeLayout from "views/HomeLayout";
import { ServiceLayout } from "views/ServiceLayout";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Route exact path="/" component={HomeLayout} />
      <Route path="/service/:name" component={ServiceLayout} />
    </React.Fragment>
  );
}

export default App;
