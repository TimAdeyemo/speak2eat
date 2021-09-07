import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./NavDrawer.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const [isOpenDrawer, setDrawer] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setDrawer(!isOpenDrawer);
    console.log('toggle')
  };

  const closeDrawer = () => {
    setDrawer(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            speak2eat
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <NavDrawer isOpen={isOpenDrawer} closeDrawer={closeDrawer}/>
    </div>
  );
};

export default NavBar;
