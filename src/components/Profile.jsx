import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Typography, CircularProgress } from "@material-ui/core";
import Whiteboard from "../containers/Whiteboard";

const Profile = ({ profileLoading, user }) => {
  const redirect = <Redirect to="/" />;
  if (Object.keys(user).length === 0) {
    return redirect;
  }
  const loading = (
    <Whiteboard>
      <CircularProgress />
    </Whiteboard>
  );
  if (profileLoading) {
    return loading;
  }
  const content = (
    <Whiteboard>
      <Typography variant="h6">Lastname: {user.data.lastname}</Typography>
      <Typography variant="h6">Firstname: {user.data.firstname}</Typography>
      <Typography variant="h6">Gender: {user.data.gender}</Typography>
    </Whiteboard>
  );
  return content;
};

Profile.propTypes = {
  profileLoading: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    profileLoading: state.profileLoading,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Profile);
