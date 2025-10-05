import React from "react";
import Title from "../Title";
import Block from "./Block";
import { contactLinks } from "../../../../data/contactLinks";


const Contact = () => {
  return (
    <section
      id="contact"
      className="p-10 md:p-20 lg:p-30 flex flex-col items-center text-white bg-gradient-to-bl from-black from-[-50%] via-[#220b34]/80 via-[35%] to-black to-[100%]"
    >
      <Title text={"Me contacter"} />
      <div className="my-10 md:mt-20 w-full flex items-center justify-between md:justify-evenly">
        {contactLinks.map((item, index) => (
        <Block key={index} src={item.src} icon={item.icon} color={item.color} text={item.text}></Block>
        ))}
      </div>
    </section>
  );
};

export default Contact;
