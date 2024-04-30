import React from "react";
import Navbar from "@/components/Navbar";

const HeaderServices = () => {
  return (
    <header className="bg-zinc-900">
      <Navbar />
      <div className="flex flex-col items-center self-stretch px-16  pb-20 w-full text-lg rounded-b-xl  max-md:px-5 max-md:max-w-full">
        <h1 className="mt-32 text-4xl font-bold text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full">
          Découvrez nos <span className="text-lime-500">services </span>
          <br />
          pour un meilleur déménagement.
        </h1>
        <p className="mt-9 mb-32 text-center text-neutral-200 max-md:max-w-full">
          Découvrez nos services pour un déménagement sans stress et
          parfaitement organisé. <br /> Confiez-nous votre déménagement et vivez
          une transition en toute tranquillité.
        </p>
      </div>
    </header>
  );
};

export default HeaderServices;
