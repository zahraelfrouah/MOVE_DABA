import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="bg-zinc-900">
      <Navbar />
      <div className="flex flex-col items-center self-stretch px-16  pb-20 w-full text-lg rounded-b-xl bg-zinc-900 max-md:px-5 max-md:max-w-full mb-[800px] h-full">
        <h1 className="mt-32 text-4xl font-bold text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full">
          Signaler les biens <span className="text-lime-500">endommagés</span>
        </h1>
        <p className="mt-9 mb-32 text-center text-neutral-200 max-md:max-w-full">
          Si vous avez reçu ou remarqué des biens cassés ou endommagés
          <br /> pendant ou après le déménagement, veuillez remplir ce
          formulaire et nous le soumettre.
          <br />
          Nous enquêterons sur le problème et vous compenserons en conséquence.{" "}
        </p>
      </div>
    </header>
  );
};

export default Header;
