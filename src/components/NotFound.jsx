import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Whiteboard from "../containers/Whiteboard";

const NotFound = () => {
  const location = useLocation();
  return (
    <Whiteboard>
      <Typography variant="h3" align="center">
        404: The Requested URL: {location.pathname} Is Not Found.
      </Typography>
    </Whiteboard>
  );
};

export default NotFound;
