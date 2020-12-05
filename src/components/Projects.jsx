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
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  cardsContainerTable: {
    display: 'grid',
    gridTemplateColumns: '33% 33%',
    backgroundColor: 'red',
  },
  // cardsContainerTable: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   backgroundColor: "red",
  //   justifyContent: "space-between",
  //   "&:after": {
  //     content: '""',
  //     flex: 'auto',
  //   },
  // },
  cardsContainerDesk: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "green",
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
      <div
        className={
          istDesk
            ? classes.cardsContainerDesk
            : istTablet
            ? classes.cardsContainerTable
            : classes.cardsContainer
        }
      >
        {projects.map((pro, index) => (
          <CardComponet project={pro} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
