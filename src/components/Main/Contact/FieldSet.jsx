import React from "react";

const FieldSet = ({ type, name, text }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        placeholder=" "
        className="peer block w-full p-4 pb-2.5 pt-4 text-sm md:text-lg lg:text-base md:h-15 text-white
                   bg-transparent rounded-lg border border-red-200 appearance-none
                   focus:outline-none focus:ring-0 focus:border-blue-600"
      />
      <label
        htmlFor={name}
        className="absolute top-2 z-10 origin-[0] px-2
                   text-sm text-gray-500 dark:text-gray-400
                   transform -translate-y-4 scale-75
                   transition-all duration-300
                   bg-transparent
                   peer-placeholder-shown:top-1/2
                   peer-placeholder-shown:-translate-y-1/2
                   peer-placeholder-shown:scale-100
                   peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75
                   peer-focus:bg-gray-900"
      >
        {text}
      </label>
    </div>
  );
};

export default FieldSet;

