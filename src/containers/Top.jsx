import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "64px",
      position: "fixed",
      zIndex: 1,
      backgroundColor: theme.palette.background.default,
    },
  };
});

const Top = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {children}
    </Grid>
  );
};

Top.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Top;
