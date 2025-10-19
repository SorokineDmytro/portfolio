import React, { useState } from "react";
import Diploma from "./Diploma";
import { diplomas } from "../../../../data/diplomas";
import Title from "../Title";

const Studies = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [animatingIndex, setAnimatingIndex] = useState(null);

  const handleToggle = (index) => {
    // If the same card is clicked, close it fast
    if (openIndex === index) {
      setOpenIndex(null);
      return;
    }

    // Add a small delay for smoother opening
    setAnimatingIndex(index);
    setTimeout(() => {
      setOpenIndex(index);
      setAnimatingIndex(null);
    }, 150); // delay before expanding softly
  };

  return (
    <section
      id="studies"
      className="p-10 md:p-20 flex flex-col items-center text-white bg-gradient-to-bl from-black from-[-50%] via-[#220b34]/80 via-[35%] to-black to-[100%]"
    >
      <Title text="Mes formations" />
      <article className="lg:h-100 grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full">
        {diplomas.map((item, index) => (
          <Diploma
            key={index}
            name={item.name}
            university={item.university}
            year={item.year}
            isOpen={openIndex === index}
            isAnimating={animatingIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </article>
    </section>
  );
};

export default Studies;
