import React from "react";
import { Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
export const Rightbar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Rightbar</Container>;
};
