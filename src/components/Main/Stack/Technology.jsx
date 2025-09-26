import React from "react";

const Technology = ({ image, name, progress }) => {
  return (
    <article className="group relative">
      <div
        className="relative flex flex-col items-center justify-center
                   rounded-2xl border border-transparent bg-[#220b34]
                   w-full min-h-30 md:min-h-40 lg:min-h-50 overflow-hidden
                   transition-colors duration-300
                   hover:bg-[#220b41] hover:border-red-200
                   focus-within:bg-[#220b41] focus-within:border-red-200"
      >
        <img src={image} alt={name} className="block w-16 h-16 object-contain md:mb-3" />
        <span className="bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text md:text-xl">
          {name}
        </span>

        <div
          className="pointer-events-none absolute p-1 md:p-2 inset-0 grid place-items-center
                     bg-black/0 opacity-0 translate-y-1
                     transition-all duration-300 ease-out
                     group-hover:bg-black/50 group-hover:opacity-100 group-hover:translate-y-0
                     group-focus-within:bg-black/50 group-focus-within:opacity-100 group-focus-within:translate-y-0"
        >
          <div className="pointer-events-none w-full h-full max-w-[12rem] lg:max-w-[30rem] rounded-xl border border-red-200/60 bg-[#1a1420]/90 p-3 backdrop-blur-sm">
            <p className="text-md md:text-lg bg-gradient-to-r from-orange-300 to-violet-300 text-transparent bg-clip-text text-center my-4">{name}</p>

            <div className="h-2 mb-5 w-full rounded-full border border-red-200 bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-300 to-violet-300 transition-[width] duration-500"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                aria-label={`${name} progress`}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Technology;

