import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  media: {
    height: theme.typography.pxToRem(250),
    [theme.breakpoints.down("sm")]: {
      height: theme.typography.pxToRem(150),
    },
  },
  card: {
    marginBottom: theme.spacing(3),
  },
}));
export const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1641374221791-3fc5b7a10ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            voluptatum illum maxime numquam quas illo nemo cumque, ea assumenda.
            Ex eveniet expedita illo adipisci commodi quod soluta quisquam
            provident alias?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
