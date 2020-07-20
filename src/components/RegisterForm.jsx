import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerSubmit } from "../actions/Register";
import { Redirect } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import Whiteboard from "../containers/Whiteboard";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      lastname: "",
      firstname: "",
      gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.registerSubmit = this.registerSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  registerSubmit(event) {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      data: {
        lastname: this.state.lastname,
        firstname: this.state.firstname,
        gender: this.state.gender,
      },
    };
    this.props.registerSubmit(user);
  }

  render() {
    const form = (
      <Whiteboard>
        <form onSubmit={this.registerSubmit}>
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
            <Grid container item direction="column">
              <Typography variant="h6">Lastname</Typography>
              <TextField
                label="Lastname"
                variant="outlined"
                name="lastname"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid container item direction="column">
              <Typography variant="h6">Firstname</Typography>
              <TextField
                label="Firstname"
                variant="outlined"
                name="firstname"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid container item direction="column">
              <Typography variant="h6">Gender</Typography>
              <TextField
                label="Gender"
                variant="outlined"
                name="gender"
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
    const redirect = <Redirect to="/" />;
    if (this.props.registerSuccess && !this.props.registerLoading) {
      return redirect;
    } else {
      if (this.props.registerLoading) {
        return loading;
      } else {
        return form;
      }
    }
  }
}

RegisterForm.propTypes = {
  registerLoading: PropTypes.bool,
  registerSuccess: PropTypes.bool,
  registerSubmit: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    registerLoading: state.registerLoading,
    registerSuccess: state.registerSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerSubmit: (user) => {
      dispatch(registerSubmit(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
