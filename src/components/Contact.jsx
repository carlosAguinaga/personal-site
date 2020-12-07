import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contacto">
      <Typography variant="h5" gutterBottom>
        Contact
      </Typography>
      <div>
        <IconButton aria-label="go to github" href="#">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="go to project" href="#">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="go to project" href="#">
          <EmailIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
