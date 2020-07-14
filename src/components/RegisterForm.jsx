import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography, TextField, Button } from "@material-ui/core";
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
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ registerLoading: false });
    }
  }

  render() {
    const { username, password, lastname, firstname, gender } = this.state;

    return (
      <Whiteboard>
        <form onSubmit={this.registerSubmit}>
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
          <Typography variant="h6">Lastname</Typography>
          <TextField
            label="Lastname"
            variant="outlined"
            name="lastname"
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
          <Typography variant="h6">Firstname</Typography>
          <TextField
            label="Firstname"
            variant="outlined"
            name="firstname"
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
          <Typography variant="h6">Gender</Typography>
          <TextField
            label="Gender"
            variant="outlined"
            name="gender"
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Whiteboard>
    );
  }
}

RegisterForm.propTypes = {};

export default RegisterForm;
