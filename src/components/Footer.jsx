import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black,
    height: 50,
    display: 'flex',
    flexGrow: 'grow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typography: {
    textAlign: 'center',
  }
}));

const Footer = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="caption" gutterBottom>
        ©Carlos Aguinaga
      </Typography>
    </div>
  );
};

export default Footer;
