import React from "react";
import Title from "../Title";
import DotGrid from "../../DotGrid";

const Hobby = () => {
  return (
    <section
      id="hobbies"
      className="relative p-10 md:p-15 lg:p-30 text-white scroll-mt-24 overflow-hidden"
    >
      {/* Dot background layer */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={6}
          gap={15}
          baseColor="#0e0222"
          activeColor="#5d27a0"
          proximity={200}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="relative z-10 max-w-full mx-auto">
        <Title text="Mes centres d'intérêt" />

        <div className="mt-8 lg:h-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
              <span className="m-auto my-5 text-3xl md:text-4xl duration-500 hover:text-5xl bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
                Voyages
              </span>

              <span className="m-auto my-5 text-3xl md:text-4xl duration-500 hover:text-5xl bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
                Coding
              </span>

              <span className="m-auto my-5 text-3xl md:text-4xl duration-500 hover:text-5xl bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
                Running
              </span>
        </div>
      </div>
    </section>
  );
};

export default Hobby;
