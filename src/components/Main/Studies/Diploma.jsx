import React from "react";

const Diploma = ({ name, university, year, isOpen, onToggle }) => {
  return (
    <article
      onClick={onToggle}
      className={[
        "group my-5 gap-6 w-full border border-red-200 rounded-2xl p-5",
        "cursor-pointer overflow-hidden transition-[max-height] duration-500 ease-in-out",
        isOpen ? "max-h-fit" : "max-h-40 lg:max-h-55 lg:hover:max-h-fit",
      ].join(" ")}
    >
      <p className="my-5 text-2xl md:text-3xl leading-8 bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
        {name}
      </p>

      <p
        className={[
          "my-5 text-xl md:text-2xl leading-8 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out",
          isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0",
          "lg:group-hover:max-h-fit lg:group-hover:opacity-100",
        ].join(" ")}
      >
        {university}
      </p>

      <p
        className={[
          "my-5 text-xl md:text-2xl leading-8 overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out",
          isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0",
          "lg:group-hover:max-h-fit lg:group-hover:opacity-100",
        ].join(" ")}
      >
        {year}
      </p>
    </article>
  );
};

export default Diploma;
