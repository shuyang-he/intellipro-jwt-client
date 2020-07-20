import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/Logout";
import { Link, useLocation } from "react-router-dom";
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

const Navigation = ({ user, logout }) => {
  const [showRegister, setShowRegister] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(true);
  const [page, setPage] = useState("");

  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const updateNavLinks = () => {
      if (path === "/") {
        setPage("Home");
        setShowRegister(true);
        setShowLogin(true);
        setShowLogout(false);
      } else if (path === "/register") {
        setPage("Register");
        setShowRegister(false);
        setShowLogin(true);
        setShowLogout(false);
      } else if (path === "/login") {
        setPage("Login");
        setShowRegister(true);
        setShowLogin(false);
        setShowLogout(false);
      } else {
        if (user) {
          setPage(path.slice(1));
          setShowRegister(false);
          setShowLogin(false);
          setShowLogout(true);
        } else {
          setPage("Page 404");
          setShowRegister(false);
          setShowLogin(false);
          setShowLogout(false);
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
          {showRegister ? (
            <Button color="inherit">
              <Link to="/register" className={classes.navLinks}>
                Register
              </Link>
            </Button>
          ) : null}
          {showLogin ? (
            <Button color="inherit">
              <Link to="/login" className={classes.navLinks}>
                Login
              </Link>
            </Button>
          ) : null}
          {showLogout ? (
            <Button
              color="inherit"
              onClick={(event) => {
                event.preventDefault();
                logout();
              }}
            >
              Logout
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </Top>
  );
};

Navigation.proptypes = {
  page: PropTypes.string,
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
