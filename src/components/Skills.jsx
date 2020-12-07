import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 100,
  },
  skill: {
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
    },
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  slider: {
    marginBottom: 15,
  },
}));

const CustomSlider = withStyles((theme) => ({
  disabled: {
    //  color: 'red',
  },
  thumb: {
    color: theme.palette.primary.main,
  },
  rail: {
    color: theme.palette.primary.main,
  },
  track: {
    color: theme.palette.primary.main,
  },
}))(Slider);

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="skills">
      <Typography variant="h5" gutterBottom className={classes.title}>
        Skills
      </Typography>

      <div className={classes.skill}>
        <div>
          <Typography id="disabled-slider" gutterBottom>
            HTML
          </Typography>
          <CustomSlider
            disabled
            defaultValue={90}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography id="disabled-slider" gutterBottom>
            CSS
          </Typography>
          <CustomSlider
            disabled
            defaultValue={90}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography id="disabled-slider" gutterBottom>
            Javascript
          </Typography>
          <CustomSlider
            disabled
            defaultValue={90}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography id="disabled-slider" gutterBottom>
            React
          </Typography>
          <CustomSlider
            disabled
            defaultValue={90}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography id="disabled-slider" gutterBottom>
            Android
          </Typography>
          <CustomSlider
            disabled
            defaultValue={90}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography id="disabled-slider" gutterBottom>
            Node
          </Typography>
          <CustomSlider
            disabled
            defaultValue={90}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography id="disabled-slider" gutterBottom>
            Figma
          </Typography>
          <CustomSlider
            disabled
            defaultValue={90}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
