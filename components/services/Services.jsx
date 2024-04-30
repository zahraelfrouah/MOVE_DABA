import React from "react";
import Image from "next/image";

const ListServices = () => {
  return (
    <section id="services">
      <h2 className="mt-44 text-4xl font-bold text-center text-black leading-[50px] max-md:mt-10 max-md:max-w-full">
        <span className="text-lime-500">Move Daba</span> Vous offre <br />{" "}
        plusieurs variétés de services.
      </h2>
      <p className="mt-6 text-lg font-medium text-center text-neutral-600 max-md:max-w-full">
        Nous faisons en sorte que le service exceptionnel réponde à vos besoins
        en matière de déménagement ! <br /> De l'emballage au déballage en
        passant par le transport sécurisé, nous proposons des solutions
        complètes <br /> pour les déménagements résidentiels et commerciaux.
        Avec notre équipe dévouée et notre souci du détail, votre
        <br /> expérience de déménagement est entre de bonnes mains d'experts.
      </p>

      <div className="container mx-auto px-8 py-8 lg:py-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden transition duration-300 hover:scale-105">
            <img
              src="FreeQuote.jpeg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Devis gratuit en ligne
              </h4>
              <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal">
                Creéz votre compte facilement aujourd'hui et recevez votre
                devis.
              </p>
            </div>
          </div>
          <div className="flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden transition duration-300 hover:scale-105">
            <img
              src="privateRelocation.jpeg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Déménagement privé
              </h4>
              <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal">
                Changer de maison est toujours excitant, mais cela est souvent
                lourd et prend beaucoup de temps. Pour cette raison, nous sommes
                là pour vous aider.
              </p>
            </div>
          </div>
          <div className="flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden transition duration-300 hover:scale-105">
            <img
              src="OfficeRelocation.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Déménagement D'entreprise
              </h4>
              <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal">
                Pour les entreprises en transition de locaux, nous assurons un
                transfert efficace de leurs équipements, mobilier de bureau et
                documents, minimisant ainsi les interruptions d'activité.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden transition duration-300 hover:scale-105">
            <img
              src="PackingUnpacking.png"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Emballage et déballage
              </h4>
              <p className="block antialiased font-sans text-baseleading-relaxed text-white my-2 font-normal">
                Nous prenons en charge l'emballage de vos biens avec des
                matériaux de qualité pour assurer leur protection, et proposons
                également un service de déballage à votre arrivée pour faciliter
                votre installation.
              </p>
            </div>
          </div>
          <div className="flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden transition duration-300 hover:scale-105">
            <img
              src="HandleFragileGoods.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Prise en charge de biens fragiles.
              </h4>
              <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal">
                Nous protégeons vos objets fragiles avec des techniques
                spéciales d'emballage et de manipulation pour garantir leur
                sécurité pendant le transport.
              </p>
            </div>
          </div>
          <div className="flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden transition duration-300 hover:scale-105">
            <img
              src="furniture-assembly-charge-under-50000-448664.webp"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Assemblage de meubles
              </h4>
              <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal">
                Après votre déménagement, notre équipe experte assemble vos
                meubles dans votre nouvelle résidence ou bureau, assurant ainsi
                une installation rapide et confortable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListServices;
