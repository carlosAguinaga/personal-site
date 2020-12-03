import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));

const About = () => {

  const classes = useStyles();

  return (

    <div>
      <Avatar alt="Remy Sharp" src="./images/face1.jpg" className={classes.large} />
      <Typography variant="body2" color="textSecondary" component="p">
        Developer pasionate for make grat projects and meny tecnologies, want tu
        relise new works
      </Typography>
    </div>
  );
};

export default About;
