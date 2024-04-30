import React from "react";
import Navbar from "@/components/Navbar";

const HeroPartneship = () => {
  return (
    <header className="bg-zinc-900">
      <Navbar />
      <div className="flex flex-col items-center self-stretch px-16  pb-20 w-full text-lg rounded-b-xl  max-md:px-5 max-md:max-w-full  h-full">
        <h1 className="mt-32 text-4xl font-bold text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full">
          <span className="text-lime-500">Partenariat </span>
        </h1>
        <p className="mt-9 mb-32 text-center text-neutral-200 max-md:max-w-full">
          Devenez notre partenaire de confiance dans l'industrie du
          déménagement, <br /> où la qualité du service et la satisfaction
          client sont au cœur de notre mission.
        </p>
      </div>
    </header>
  );
};

export default HeroPartneship;
