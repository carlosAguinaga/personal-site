import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 100
  },
  avatar: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    border: '3px solid',
    borderColor: theme.palette.primary.main,
    marginTop: 20,
    marginBottom:10,
  },
  title: {
    marginBottom: 30,
  }
}));

const About = ( ) => {

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="./images/face1.jpg" className={classes.avatar} color="primary"/>
      <Typography variant="h5" gutterBottom color="textPrimary" className={classes.title}>
        Carlos Aguinaga
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p" >
       Developer pasionate for make grat projects and meny tecnologies, want tu
        relise new works
      </Typography>
    </div>
  );
};

export default About;
