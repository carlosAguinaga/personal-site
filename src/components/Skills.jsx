import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const Skills = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        titulo de Skills
      </Typography>

      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={90} aria-labelledby="disabled-slider" />

      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={90} aria-labelledby="disabled-slider" />

      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={90} aria-labelledby="disabled-slider" />

      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={90} aria-labelledby="disabled-slider" />

      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={90} aria-labelledby="disabled-slider" />

      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={90} aria-labelledby="disabled-slider" />
    </div>
  );
};

export default Skills;
