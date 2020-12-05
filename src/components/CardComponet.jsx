import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import theme from '../themeConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 300,
    marginBlockStart: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  containerInsignia: {
    display: "flex",
    color: theme.palette.primary.main,
    flexWrap: "wrap",
  },
  insignia: {
    border: "2px solid",
    borderRadius: "10px",
    margin: "0px 12px 6px 0px",
    padding: "0 10px",
  },
}));

const CardComponet = ({ project }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={project.img}
        title="project"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.description}
        </Typography>
      </CardContent>
      <CardContent className={classes.containerInsignia}>
        {project.technologies.map((el) => (
          <div className={classes.insignia} key={el}>
            <span>{el}</span>
          </div>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="go to github" href={project.urlGit}>
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="go to project" href={project.urlProject}>
          <ExitToAppIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponet;
