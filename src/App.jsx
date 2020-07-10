import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/:user" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/register">
        <h1>Register</h1>
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="*">
        <h1>Not found</h1>
      </Route>
    </Switch>
  );
};

export default App;
