import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginSubmit } from "../actions/Login";
import { Redirect } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import Whiteboard from "../containers/Whiteboard";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginSubmit(event) {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.loginSubmit(user);
  }

  render() {
    const form = (
      <Whiteboard>
        <form onSubmit={this.loginSubmit}>
          <Grid
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid container item direction="column">
              <Typography variant="h6">Username</Typography>
              <TextField
                required
                label="Required"
                helperText="username"
                variant="outlined"
                name="username"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid container item direction="column">
              <Typography variant="h6">Password</Typography>
              <TextField
                required
                label="Required"
                helperText="password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                name="password"
                onChange={this.handleChange}
              />
            </Grid>
            <Button type="submit">Submit</Button>
          </Grid>
        </form>
      </Whiteboard>
    );
    const loading = (
      <Whiteboard>
        <CircularProgress />
      </Whiteboard>
    );
    const redirect = <Redirect to={"/" + this.state.username} />;
    if (Object.keys(this.props.user).length !== 0 && !this.props.loginLoading) {
      return redirect;
    } else {
      if (this.props.loginLoading) {
        return loading;
      } else {
        return form;
      }
    }
  }
}

LoginForm.propTypes = {
  loginLoading: PropTypes.bool,
  user: PropTypes.object,
  loginSubmit: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    loginLoading: state.loginLoading,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSubmit: (user) => {
      dispatch(loginSubmit(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
