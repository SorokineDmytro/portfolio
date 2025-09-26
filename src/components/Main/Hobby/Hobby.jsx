import React from "react";
import Title from "../Title";

const Hobby = () => {
  return (
    <section
      id="hobbies"
      className="p-10 md:p-20 lg:p-30 flex flex-col  items-center text-white"
    >
      <Title text={"Mes centres d'intérêt"} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3">
        <article className="my-10 grid grid-cols-2 lg:grid-cols-1 align-center justify-center self-end lg:self-center">
          <div className="w-35 h-35 md:w-55 md:h-55 lg:w-full lg:h-35 flex ">
            <span className="block m-auto text-2xl md:text-4xl bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
              Voyages
            </span>
          </div>
          <video
            id="banner-video"
            className="w-30 md:w-50 lg:w-35 object-cover m-auto"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
          >
            <source src="/voyage.webm" type="video/webm" />
          </video>
        </article>

        <article className="my-10 grid grid-cols-2 lg:grid-cols-1 align-center justify-center self-start">
          <video
            id="banner-video"
            className="w-25 md:w-45 lg:w-35 object-cover m-auto"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
          >
            <source src="/code.webm" type="video/webm" />
          </video>
          <div className="w-35 h-35 md:w-55 md:h-55 lg:w-full lg:h-35 flex ">
            <span className="block m-auto text-2xl md:text-4xl bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
              Codding
            </span>
          </div>
        </article>

        <article className="my-10 grid grid-cols-2 lg:grid-cols-1 align-center justify-center self-end">
          <div className="w-35 h-35 md:w-55 md:h-55 lg:w-full lg:h-35 flex ">
            <span className="block m-auto text-2xl md:text-4xl bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
              Running
            </span>
          </div>
          <video
            id="banner-video"
            className="w-35 md:w-55 lg:w-35 object-cover m-auto"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
          >
            <source src="/run.webm" type="video/webm" />
          </video>
        </article>
      </div>
    </section>
  );
};

export default Hobby;
