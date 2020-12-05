import React from "react";
import CardComponet from "./CardComponet";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import projects from "../utils/projects";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 100,
  },
  title: {
    textAlign: "center",
  },
  cardsContainer: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.secondary.main,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 30,
      justifyItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      justifyItems: "center",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "yellow",
    },
  },
}));

const Projects = () => {
  const classes = useStyles();
  const theme = useTheme();
  const istTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const istDesk = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(istTablet);

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title} gutterBottom>
        Projects
      </Typography>
      <div className={classes.cardsContainer}>
        {projects.map((pro, index) => (
          <CardComponet project={pro} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
