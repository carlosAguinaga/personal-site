import React, {useState} from "react";
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
  },
  cardsContainer: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: theme.palette.secondary.main,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 30,
      justifyItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      // backgroundColor: theme.palette.secondary.main,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      justifyItems: "center",
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "yellow",
    },
  },
}));





const Projects = () => {
  const classes = useStyles();

  const [cartegogy, setCartegogy] = useState(0)

  return (
    <div className={classes.root} id="portafolio">
      <Typography variant="h5" className={classes.title} gutterBottom>
        Projects
      </Typography>

      {/* aquie debe de ir  */}
      <ProjectTabs initialTab={cartegogy} setCartegogy={setCartegogy} />

      {/* hasta aqui */}

      <div className={classes.cardsContainer}>
        {projects.map((pro, index) => {
          if(pro.categoryId === cartegogy){
            return <CardComponet project={pro} key={index} />;
          }
          return null
        })}
      </div>
    </div>
  );
};

export default Projects;
