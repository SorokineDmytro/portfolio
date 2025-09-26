import React from "react";
import LinkBtn from "./LinkBtn";

const Project = ({ index, imgSrc, name, desc, link }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="my-10 lg:my-20 grid lg:grid-cols-2 gap-10 items-center">
      <img
        src={imgSrc}
        alt={name}
        className={`hover:origin-center hover:rotate-1 hover:scale-105 duration-500 border rounded-lg w-full lg:w-[80%] lg:m-auto
          ${isEven ? "lg:order-1" : "lg:order-2"}`}
      />
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <h3 className="my-5 text-2xl md:text-3xl w-full text-center bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
          {name}
        </h3>
        <p className="my-5 text-lg md:text-2xl lg:text-xl md:text-center leading-8">
          {desc}
        </p>
        <LinkBtn src={link} text="Voir sur GitHub" />
      </div>
    </div>
  );
};

export default Project;
