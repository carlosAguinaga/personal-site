import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
    minHeight: 500,
    marginBlockStart: 20,
    marginBlockEnd: 20,
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  containerInsignia: {
    display: "flex",
    color: theme.palette.primary.light,
    flexWrap: "wrap",
  },
  insignia: {
    border: "2px solid",
    borderRadius: "10px",
    margin: "0px 12px 6px 0px",
    padding: "0 10px",
  },
  share: {
    position: "absolute",
    bottom: 0,
    color: theme.palette.primary.light,
  },
  icon: {
    color: theme.palette.text.primary,
  },
}));

const CardComponet = ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={project.urlProject} target="_blank">
        <CardMedia
          className={classes.media}
          image={project.img}
          title={project.name}
        />
      </CardActionArea>

      <CardContent>
        <Typography variant="h5" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.description}
        </Typography>
      </CardContent>
      <CardContent className={classes.containerInsignia}>
        {project.technologies.map((insignia, index) => (
          <div className={classes.insignia} key={index}>
            <span>{insignia}</span>
          </div>
        ))}
      </CardContent>
      <CardActions disableSpacing className={classes.share}>
        {project.urlGit && (
          <IconButton
            aria-label="go to github"
            href={project.urlGit}
            target="_blank"
          >
            <GitHubIcon className={classes.icon} />
          </IconButton>
        )}

        <IconButton
          aria-label="go to project"
          href={project.urlProject}
          target="_blank"
        >
          <ExitToAppIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponet;
