import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { Typography, CircularProgress } from "@material-ui/core";
import Whiteboard from "../containers/Whiteboard";

const Profile = ({ loginSuccess }) => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [gender, setGender] = useState("");
  const [profileLoading, setProfileLoading] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const getProfile = async (mounted) => {
      if (mounted) {
        const token = Cookies.get("jwt");
        setProfileLoading(true);
        try {
          const resJson = await fetch("/api/users/profile", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const res = await resJson.json();
          const { lastname, firstname, gender } = res.data;
          setLastname(lastname);
          setFirstname(firstname);
          setGender(gender);
        } catch (error) {
          console.log(error);
        } finally {
          setProfileLoading(false);
        }
      }
    };

    getProfile(mounted);
    return () => {
      setMounted(false);
      Cookies.remove("jwt");
    };
  }, [mounted]);

  const content = (
    <Whiteboard>
      <Typography variant="h6">Lastname: {lastname}</Typography>
      <Typography variant="h6">Firstname: {firstname}</Typography>
      <Typography variant="h6">Gender: {gender}</Typography>
    </Whiteboard>
  );
  const loading = (
    <Whiteboard>
      <CircularProgress />
    </Whiteboard>
  );
  const redirect = <Redirect to="/" />;
  if (!loginSuccess) {
    return redirect;
  } else {
    if (profileLoading) {
      return loading;
    } else {
      return content;
    }
  }
};

Profile.propTypes = {
  loginSuccess: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.loginSuccess,
  };
};

export default connect(mapStateToProps)(Profile);
