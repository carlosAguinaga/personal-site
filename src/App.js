import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from './themeConfig';
import "./App.css";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
  }
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
