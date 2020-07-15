import React, { Component } from "react";
import PropTypes from "prop-types";
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
      registerLoading: false,
      registerSuccess: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.registerSubmit = this.registerSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async registerSubmit() {
    this.setState({ registerLoading: true });
    try {
      const resJson = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          data: {
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            gender: this.state.gender,
          },
        }),
      });
      const res = await resJson.json();
      if (res.success) {
        this.setState({ registerSuccess: true });
      } else {
        this.setState({ registerSuccess: false });
      }
    } catch (error) {
      this.setState({ registerSuccess: false });
      console.log(error);
    } finally {
      this.setState({ registerLoading: false });
    }
  }

  render() {
    const form = (
      <Whiteboard>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.registerSubmit();
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
            <Grid container item direction="column">
              <Typography variant="h6">Lastname</Typography>
              <TextField
                label="Lastname"
                variant="outlined"
                name="lastname"
                onChange={(event) => {
                  this.handleChange(event);
                }}
              />
            </Grid>
            <Grid container item direction="column">
              <Typography variant="h6">Firstname</Typography>
              <TextField
                label="Firstname"
                variant="outlined"
                name="firstname"
                onChange={(event) => {
                  this.handleChange(event);
                }}
              />
            </Grid>
            <Grid container item direction="column">
              <Typography variant="h6">Gender</Typography>
              <TextField
                label="Gender"
                variant="outlined"
                name="gender"
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
    const redirect = <Redirect to="/" />;
    if (this.state.registerSuccess && !this.state.registerLoading) {
      return redirect;
    } else {
      if (this.state.registerLoading) {
        return loading;
      } else {
        return form;
      }
    }
  }
}

RegisterForm.propTypes = {};

export default RegisterForm;
