import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Block = ({ src, icon, color, text }) => {
  return (
    <div className="group relative flex flex-col items-center">
      <a href={src} target="_blank">
        <FontAwesomeIcon 
        icon={icon} 
        className={`text-5xl md:text-6xl lg:text-7xl hover:origin-center hover:scale-140 hover:duration-500 duration-1500 text-white ${color}`} />
      </a>
      <span className="w-max text-lg invisible absolute bottom-[-50px] xl:group-hover:visible xl:group-hover:duration-500 duration-500">{text}</span>
    </div>
  );
};

export default Block;
