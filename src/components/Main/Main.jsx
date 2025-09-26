import React from "react";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Stack from "./Stack/Stack";
import Studies from "./Studies/Studies";
import Hobby from "./Hobby/Hobby";
import Contact from "./Contact/Contact";
import ArrowUp from "./ArrowUp";

About;

const Main = () => {
  return (
    <main>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Stack></Stack>
      <Studies></Studies>
      <Hobby></Hobby>
      <Contact></Contact>
      <ArrowUp></ArrowUp>
      </main>
  );
};

export default Main;
