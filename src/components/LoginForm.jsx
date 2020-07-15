import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkLoginStatus } from "../actions/Login";
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
      loginLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async loginSubmit() {
    this.setState({ loginLoading: true });
    try {
      const resJson = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });
      const res = await resJson.json();
      const { exist, valid } = res;
      this.props.checkLoginStatus(exist, valid);
    } catch (error) {
      this.props.checkLoginStatus(false, false);
      console.log(error);
    } finally {
      this.setState({ loginLoading: false });
    }
  }

  render() {
    const form = (
      <Whiteboard>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.loginSubmit();
          }}
        >
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
                onChange={(event) => {
                  this.handleChange(event);
                }}
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
                onChange={(event) => {
                  this.handleChange(event);
                }}
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
    if (this.props.loginSuccess && !this.state.loginLoading) {
      return redirect;
    } else {
      if (this.state.loginLoading) {
        return loading;
      } else {
        return form;
      }
    }
  }
}

LoginForm.propTypes = {
  loginSuccess: PropTypes.bool,
  checkLoginStatus: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.loginSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkLoginStatus: (exist, valid) => {
      checkLoginStatus(exist, valid, dispatch);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
