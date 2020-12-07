import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
      padding: 25,
      // backgroundColor: 'red',
    },
    [theme.breakpoints.up("sm")]: {
      padding: 25,
      // backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("md")]: {
      width: '80%',
      margin: '0 auto',
      // backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      // backgroundColor: "yellow",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className={classes.root}>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
