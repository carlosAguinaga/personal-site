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
      gridColumnGap: 80,
    },
  },
  title: {
    marginBottom: 40,
    textAlign: "center",
  },
  slider: {
    marginBottom: 15,
  },
}));

const CustomSlider = withStyles((theme) => ({
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
        Habilidades
      </Typography>

      <div className={classes.skill}>
        <div>
          <Typography gutterBottom>
            HTML
          </Typography>
          <CustomSlider
            disabled
            defaultValue={70}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography gutterBottom>
            CSS
          </Typography>
          <CustomSlider
            disabled
            defaultValue={60}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography gutterBottom>
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
          <Typography gutterBottom>
            React
          </Typography>
          <CustomSlider
            disabled
            defaultValue={80}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography gutterBottom>
            React Native
          </Typography>
          <CustomSlider
            disabled
            defaultValue={60}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography gutterBottom>
            Angular
          </Typography>
          <CustomSlider
            disabled
            defaultValue={40}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography gutterBottom>
            Android
          </Typography>
          <CustomSlider
            disabled
            defaultValue={70}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography gutterBottom>
            Java
          </Typography>
          <CustomSlider
            disabled
            defaultValue={45}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography gutterBottom>
            SQL
          </Typography>
          <CustomSlider
            disabled
            defaultValue={50}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography gutterBottom>
            Node
          </Typography>
          <CustomSlider
            disabled
            defaultValue={70}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>

        <div>
          <Typography gutterBottom>
            Figma
          </Typography>
          <CustomSlider
            disabled
            defaultValue={60}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>
        <div>
          <Typography gutterBottom>
            Firebase
          </Typography>
          <CustomSlider
            disabled
            defaultValue={70}
            aria-labelledby="disabled-slider"
            className={classes.slider}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
