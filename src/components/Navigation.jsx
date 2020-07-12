import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import Top from "../containers/Top";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import { NoEmitOnErrorsPlugin } from "webpack";

const useStyles = makeStyles((theme) => {
  return {
    homeButton: {
      marginRight: theme.spacing(2),
    },
    homeIcon: {
      color: theme.palette.background.default,
    },
    navLinks: {
      color: theme.palette.background.default,
      textDecoration: "none",
    },
    title: {
      flexGrow: 1,
    },
  };
});

const Navigation = ({ page }) => {
  const classes = useStyles();
  const { user } = useParams();
  const location = useLocation();

  const [path, setPath] = useState(location.pathname);
  const [showRegister, setShowRegister] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(true);

  useEffect(() => {
    const updateNavLinks = () => {
      if (path === "/") {
        setShowRegister(true);
        setShowLogin(true);
        setShowLogout(false);
      } else if (path === "/register") {
        setShowRegister(false);
        setShowLogin(true);
        setShowLogout(false);
      } else if (path === "/login") {
        setShowRegister(true);
        setShowLogin(false);
        setShowLogout(false);
      } else {
        if (user === "") {
          setShowRegister(false);
          setShowLogin(false);
          setShowLogout(false);
        } else {
          setShowRegister(false);
          setShowLogin(false);
          setShowLogout(true);
        }
      }
    };

    updateNavLinks();
  }, [path]);

  return (
    <Top>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            className={classes.homeButton}
          >
            <Link to="/">
              <HomeIcon className={classes.homeIcon} />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {page}
          </Typography>
          <Button color="inherit">
            <Link to="/register" className={classes.navLinks}>
              Register
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/login" className={classes.navLinks}>
              Login
            </Link>
          </Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Top>
  );
};

Navigation.proptypes = {
  page: PropTypes.string,
};

export default Navigation;
