import React from "react";
import Technology from "./Technology";

const Container = ({ name, array, isActive = true }) => {
    if(!isActive) return null;
  return (
    <section className="w-full">
      <span className="my-5 w-full text-center text-2xl md:text-3xl bg-gradient-to-r from-orange-200 to-pink-300 inline-block bg-clip-text text-transparent">
        {name}
      </span>
      <div className="my-5 grid grid-cols-2 md:grid-cols-3 gap-6 w-full border border-red-200 rounded-2xl  p-5">
        {array.map((item, index) => (
          <Technology key={index} image={item.image} name={item.name} progress={item.progress} />
        ))}
      </div>
    </section>
  );
};

export default Container;
