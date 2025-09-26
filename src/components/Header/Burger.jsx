import React, { useState } from "react";
import { navBarLinks } from "../../../data/navBarLinks";

const Burger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        className="relative w-10 h-10 grid place-items-center"
      >
        <span
          className={`absolute block h-1 w-8 bg-white rounded-full transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "rotate-45" : "-translate-y-2"}`}
        />

        <span
          className={`absolute block h-1 w-8 bg-white rounded-full transition-opacity duration-300 ease-in-out
            ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        />

        <span
          className={`absolute block h-1 w-8 bg-white rounded-full transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "-rotate-45" : "translate-y-2"}`}
        />
      </button>

      <ul
        className={`absolute top-20 bottom-0 left-0 z-20 w-full flex flex-col justify-between 
            ${isMenuOpen ? "" : "hidden"}`}
      >
        {navBarLinks.map((item, index) => (
          <li
            key={index}
            className="w-full h-full bg-black text-white px-5 "
            onClick={toggleMenu}
          >
            <a
              className="h-full w-full flex items-center justify-center text-2xl md:text-3xl"
              href={item.linkPath}
            >
              <span>{item.linkName}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Burger;
