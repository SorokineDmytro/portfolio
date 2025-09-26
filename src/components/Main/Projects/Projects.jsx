import React from "react";
import Project from "./Project";
import { projects } from "../../../../data/projects";
import Title from "../Title";

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-10 md:p-20 lg:pt-30 flex flex-col items-center text-white bg-gradient-to-bl from-black from-[-50%] via-[#220b34]/80 via-[35%] to-black to-[100%]"
    >
      <Title text={"Mes projets"} />
      {projects.map((item, index) => (
        <Project
          key={index}
          index={index}
          imgSrc={item.imgSrc}
          name={item.name}
          desc={item.desc}
          link={item.link}
        />
      ))}
    </section>
  );
};

export default Projects;
