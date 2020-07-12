import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/register">
        <h1>Register</h1>
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="*">
        <Navigation page="404 Page" />
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
