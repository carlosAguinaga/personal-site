import React, { useState } from "react";
import CardComponet from "./CardComponet";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import projects from "../utils/projects";
import ProjectTabs from "./ProjectTabs";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 100,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  cardsContainer: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
      justifyItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      justifyItems: "center",
    },
    [theme.breakpoints.up("lg")]: {
      // breakpoints up "lg"
    },
  },
}));

const Projects = () => {
  const classes = useStyles();

  const [cartegogy, setCartegogy] = useState(0);

  return (
    <div className={classes.root} id="portafolio">
      <Typography variant="h5" className={classes.title} gutterBottom>
        Proyectos
      </Typography>
      <ProjectTabs initialTab={cartegogy} setCartegogy={setCartegogy} />
      <div className={classes.cardsContainer}>
        {projects.map((pro, index) => {
          if (pro.categoryId === cartegogy) {
            return <CardComponet project={pro} key={index} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Projects;
