import React from "react";

const SelectButton = ({ name, isActive = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative inline-flex items-center justify-center overflow-hidden min-w-[5rem] px-3 md:px-10 py-3 text-lg rounded-lg border border-red-200 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/60"
    >
      <span
        className={`relative z-10 inline-block transition-colors duration-300 ease-in-out
          ${isActive
            ? "text-black"
            : "bg-gradient-to-r from-orange-200 to-pink-300 bg-clip-text text-transparent group-hover:text-black group-hover:bg-none"}`}
      >
        {name}
      </span>

      <span
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-300 transition-opacity duration-300 ease-in-out ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      />
    </button>
  );
};

export default SelectButton;
