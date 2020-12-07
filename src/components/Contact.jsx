import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contacto">
      <Typography variant="h5" gutterBottom>
        Contacto
      </Typography>
      <div>
        <IconButton
          aria-label="Go to GitHub"
          href="https://github.com/carlosAguinaga"
        >
          <GitHubIcon className={classes.icon} />
        </IconButton>
        <IconButton
          aria-label="Go to LinkedIn"
          href="https://www.linkedin.com/in/carlos-aguinaga-salinas-7a67b8187/"
        >
          <LinkedInIcon className={classes.icon} />
        </IconButton>
        <IconButton aria-label="Go to Email" href="mailto:carlosaguinaga01@gmail.com">
          <EmailIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
