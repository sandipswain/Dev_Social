import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Apps,
  Camera,
  Collections,
  ExitToApp,
  Home,
  List,
  People,
  Settings,
  Store,
  VideoCall,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    marginLeft: theme.spacing(-1),
    height: "100vh",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}> HomePage</Typography>
      </div>
      <div className={classes.item}>
        <People className={classes.icon} />
        <Typography className={classes.text}> Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}> Lists</Typography>
      </div>
      <div className={classes.item}>
        <Camera className={classes.icon} />
        <Typography className={classes.text}> Camera</Typography>
      </div>
      <div className={classes.item}>
        <VideoCall className={classes.icon} />
        <Typography className={classes.text}> Videos</Typography>
      </div>
      <div className={classes.item}>
        <Apps className={classes.icon} />
        <Typography className={classes.text}> Apps</Typography>
      </div>
      <div className={classes.item}>
        <Collections className={classes.icon} />
        <Typography className={classes.text}> Collections</Typography>
      </div>
      <div className={classes.item}>
        <Store className={classes.icon} />
        <Typography className={classes.text}> Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}> Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}> Logout</Typography>
      </div>
    </Container>
  );
};
