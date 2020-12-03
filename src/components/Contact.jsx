import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Contact = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
          Contact
        </Typography>
      <IconButton aria-label="go to github" href="#">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="go to project" href="#">
          <ExitToAppIcon />
        </IconButton>
        <IconButton aria-label="go to project" href="#">
          <ExitToAppIcon />
        </IconButton>
    </div>
  )
}

export default Contact
