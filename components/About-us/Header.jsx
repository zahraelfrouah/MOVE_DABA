import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const header = () => {
  return (
    
    <div
      className="bg-cover bg-center bg-no-repeat  h-full rounded-b-lg"
      style={{ backgroundImage: `url('/bg-aboutus.png')` }}
    >
      <section className="flex flex-col ">
        <div className="z-50 text-white">
          <Navbar />
          <div className="text-center  leading-normal my-40  ">
            <h1 className="text-4xl font-bold mb-5  text-[#94DA21]">
              Qui somme-nous?
            </h1>
            <p className="leading-normal  ">
              Move Daba est une société spécialisée dans le déménagement au
              Maroc. <br /> Notre objectif principal est d'assurer un transport
              sécurisé et sans tracas pour nos clients. <br /> Nous intervenons
              à travers tout le territoire marocain, offrant un service complet
              de déménagement, caractérisé <br /> par notre fiabilité nationale.
              Grâce à notre expertise et à notre professionnalisme, <br /> nous
              garantissons à nos clients une expérience de déménagement efficace
              et sans souci.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default header;
