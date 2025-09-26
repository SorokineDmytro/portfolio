import React from "react";

const Home = () => {
  return (
    <section className="p-10 md:py-20 lg:p-25 flex flex-col lg:grid lg:grid-cols-2 items-center text-white bg-gradient-to-bl from-black from-[-50%] via-[#220b34]/80 via-[35%] to-black to-[100%]">
      <div className="flex items-center justify-center">
        <img
          src="/photo.jpeg"
          alt="profile image"
          className="rounded-full w-50 h-50 lg:w-60 lg:h-60"
        />
      </div>
      <div className="mt-10 flex flex-col">
        <h1 className="mb-8 text-xl md:text-3xl md:text-center lg:text-start">Bonjour, je suis Dmytro</h1>
        <p className="mb-5 text-4xl md:text-[48px] lg:text-6xl md:text-center lg:text-start bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
          Développeur web
        </p>
        <p className="text-xl leading-8 md:text-2xl lg:text-xl md:text-center lg:text-start">
          passionné par l’informatique, dynamique et travailleur. J’ai une
          maîtrise des outils de développement et je suis en constante recherche
          d’apprentissage.
        </p>
      </div>
    </section>
  );
};

export default Home;
