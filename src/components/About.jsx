import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 70,
  },
  avatar: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    border: "3px solid",
    borderColor: theme.palette.primary.main,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    marginBottom: 20,
    color: theme.palette.primary.main,
  },
  subTitle: {
    [theme.breakpoints.up("xs")]: {
      // maxWidth: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "70%",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about">
      <Avatar
        alt="Remy Sharp"
        src="./images/avatar.jpeg"
        className={classes.avatar}
        color="primary"
      />
      <Typography
        variant="h4"
        gutterBottom
        color="textPrimary"
        className={classes.title}
      >
        Carlos Aguinaga
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        gutterBottom
        className={classes.subTitle}
      >
        Desarrollador de productos digitales en plataformas web y móvil.
      </Typography>
    </div>
  );
};

export default About;
