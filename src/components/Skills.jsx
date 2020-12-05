import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    marginBottom: 100,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  slider: {
    marginBottom: 15,
  },
  '.MuiSlider-root.Mui-disabled': {
    color: 'red'
  }
});

const CustomSlider = withStyles(theme => ({
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
  }
}))(Slider);




const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom className={classes.title}>
        Skills
      </Typography>



      <Typography id="disabled-slider" gutterBottom>
        HTML
      </Typography>
      <CustomSlider
        disabled
        defaultValue={90}
        aria-labelledby="disabled-slider"
        className={classes.slider}
      />

      <Typography id="disabled-slider" gutterBottom>
        CSS
      </Typography>
      <CustomSlider
        disabled
        defaultValue={90}
        aria-labelledby="disabled-slider"
        className={classes.slider}
      />

      <Typography id="disabled-slider" gutterBottom>
        Javascript
      </Typography>
      <CustomSlider
        disabled
        defaultValue={90}
        aria-labelledby="disabled-slider"
        className={classes.slider}
      />

      <Typography id="disabled-slider" gutterBottom>
        React
      </Typography>
      <CustomSlider
        disabled
        defaultValue={90}
        aria-labelledby="disabled-slider"
        className={classes.slider}
      />

      <Typography id="disabled-slider" gutterBottom>
        Android
      </Typography>
      <CustomSlider
        disabled
        defaultValue={90}
        aria-labelledby="disabled-slider"
        className={classes.slider}
      />

      <Typography id="disabled-slider" gutterBottom>
        Node
      </Typography>
      <CustomSlider
        disabled
        defaultValue={90}
        aria-labelledby="disabled-slider"
        className={classes.slider}
      />

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
  );
};

export default Skills;
