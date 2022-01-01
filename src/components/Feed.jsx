import React from "react";
import { Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
export const Feed = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Feed</Container>;
};
