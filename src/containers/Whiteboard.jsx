import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "100%",
      zIndex: 0,
      backgroundColor: theme.palette.background.paper,
    },
  };
});

const Whiteboard = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {children}
    </Grid>
  );
};

Whiteboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Whiteboard;
