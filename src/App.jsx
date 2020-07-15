import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Switch>
      <Route path="/register">
        <Navigation page="Register" />
        <RegisterForm />
      </Route>
      <Route path="/login">
        <Navigation page="Login" />
        <LoginForm />
      </Route>
      <Route path="/" exact>
        <Navigation page="Home" />
      </Route>
      <Route path="/:user">
        <Navigation page="Home" />
        <Profile />
      </Route>
      <Route path="*">
        <Navigation page="Page 404" />
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
