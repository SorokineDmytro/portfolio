import React from "react";
import Title from "../Title";

const About = () => {
  return (
    <section className="p-10 md:p-15 lg:p-30 text-white scroll-mt-24" id="about">
      <Title text={"À propos de moi"} />
      <p className="text-xl md:text-2xl lg:text-xl  leading-8 mb-5">
        Ancien militaire (9,5 ans au sein de la Légion Étrangère), je me
        reconvertis aujourd’hui avec passion dans les technologies du numérique.
      </p>
      <p className="text-xl md:text-2xl lg:text-xl  leading-8 mb-5">
        Etudiant à Epitech Marseille en Pré-MSC, je prépare un parcours jusqu’au
        niveau Master et recherche une alternance de janvier 2026 à septembre
        2028.
      </p>
      <p className="text-xl md:text-2xl lg:text-xl  leading-8 mb-5">
        Je souhaite évoluer sur des missions de développement web ou
        d’applications.
      </p>
      <p className="text-xl md:text-2xl lg:text-xl  leading-8 mb-5">
        J'ai la double nationalité française et ukrainienne. Je parle couramment
        4 langues (français, anglais, ukrainien et russe).
      </p>
      <a
        href="/CV.pdf"
        download="CV.pdf"
        target="_blank"
        rel="noopener"
        className="group relative block w-full md:w-fit md:text-2xl md:px-10 mt-10 mb-5 p-3 rounded-full border border-red-200 text-center text-lg overflow-hidden"
      >
        <span className="relative z-10 bg-gradient-to-r from-orange-200 to-pink-300 inline-block bg-clip-text text-transparent transition-colors duration-300 ease-in-out group-hover:text-black group-hover:bg-none">
          Télécharger mon CV
        </span>
        <span
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-gradient-to-r from-orange-200 to-pink-300"
        />
      </a>
    </section>
  );
};

export default About;
