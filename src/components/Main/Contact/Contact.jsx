import React from "react";
import FieldSet from "./FieldSet";
import Title from "../Title";

const Contact = () => {
  return (
    <section id="contact" className="p-10 md:p-20 lg:p-30 flex flex-col items-center text-white bg-gradient-to-bl from-black from-[-50%] via-[#220b34]/80 via-[35%] to-black to-[100%]">
      <Title text={"Me contacter"} />
      <form action="GET" className="w-full flex flex-col gap-6 md:gap-15 md:pt-10 lg:max-w-150">
        <FieldSet type={"text"} name={"firstName"} text={"Prénom"} />
        <FieldSet type={"text"} name={"lastName"} text={"Nom"} />
        <FieldSet type={"email"} name={"email"} text={"E-mail"} />
        <FieldSet type={"tel"} name={"tel"} text={"Téléphone"} />
        <div className="relative">
          {" "}
          <textarea
            type="text"
            id="message"
            name="message"
            className="peer block w-full px-2.5 pb-2.5 pt-4 text-sm md:text-lg lg:text-base text-white bg-transparent rounded-lg border border-red-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
            placeholder=" "
          />{" "}
          <label
            htmlFor="message"
            className="absolute top-2 z-10 origin-[0] px-2 text-sm text-gray-500 transform -translate-y-4 scale-75 transition-all duration-300 bg-transparent peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-gray-900"
          >
            {" "}
            Message{" "}
          </label>{" "}
        </div>
        <button
          type="submit"
          className="group relative inline-flex items-center justify-center overflow-hidden min-w-20 md:w-60 md:h-15 md:text-xl md:m-auto px-3 py-2 rounded-lg border border-red-200 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300/60"
        >
          <span
            className="relative z-10 bg-gradient-to-r from-orange-200 to-pink-300 bg-clip-text text-transparent transition-colors duration-300 ease-in-out group-hover:text-black group-hover:bg-none"
          >
            Envoyer
          </span>

          <span
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-gradient-to-r from-orange-200 to-pink-300"
          />
        </button>
      </form>
    </section>
  );
};

export default Contact;
