import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
});


const ProjectTabs = ({initialTab, setCartegogy}) => {
  const classes = useStyles();
  const [value, setValue] = useState(initialTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCartegogy(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Web" />
        <Tab label="Mobile" />
        <Tab label="UI Design" />
      </Tabs>
    </Paper>
  );
};

export default ProjectTabs;