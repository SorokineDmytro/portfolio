import React from "react";

const Technology = ({ image, name }) => {

  return (
    <article className="group relative">
      <div
        className="relative flex flex-col items-center justify-center
                   rounded-2xl border border-transparent bg-[#220b34]
                   w/full min-h-30 md:min-h-40 lg:min-h-50 overflow-hidden
                   transition-colors duration-300 cursor-pointer
                   hover:bg-[#220b41] hover:border-red-200
                   focus-within:bg-[#220b41] focus-within:border-red-200"
      >
        <img src={image} alt={name} className="block w-16 h-16 object-contain md:mb-3" />
        <span className="bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text md:text-xl">
          {name}
        </span>

        <div
          className="pointer-events-none absolute p-1 md:p-2 inset-0 grid place-items-center bg-black/0 opacity-0 translate-y-1 transition-all duration-300 ease-out"
        >
          
        </div>
      </div>
    </article>
  );
};

export default Technology;