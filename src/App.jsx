import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "./actions/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

class App extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/:user">
            <Profile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  getProfile: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => {
      dispatch(getProfile());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
