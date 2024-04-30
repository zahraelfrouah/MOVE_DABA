import React from "react";

const MainPartnership = () => {
  return (
    <div>
      <main className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8 max-w-screen-lg mx-auto p-5 relative -top-[140px] left-0 right-0 ">
        <div className="self-center px-5 w-full  max-md:max-w-full ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full ml-5">
              <h1 className="text-4xl font-bold text-black leading-[50px] max-md:mt-10 max-md:max-w-full">
                Votre <span className="text-lime-500">Partenaire</span> <br />{" "}
                d'
                <span className="text-lime-500">évolution</span> dans le{" "}
                <span className="text-lime-500">Déménagement</span>{" "}
              </h1>
              <p className="text-black text-xl font-bold mt-4">
                "Explorons ensemble les meilleures opportunités pour bâtir un
                succès absolu."
              </p>
            </div>
            <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-lg text-neutral-600 max-md:mt-10 max-md:max-w-full">
                <p className="max-md:max-w-full">
                  Explorez de nouvelles opportunités en devenant notre
                  partenaire de confiance dans l'industrie du déménagement, où
                  la qualité du service et la satisfaction client sont nos
                  priorités absolues.
                </p>
                <p className="mt-4 max-md:max-w-full">
                  En tant que partenaire, vous aurez accès à un flux constant de
                  clients potentiels. Nous vous offrons la possibilité exclusive
                  de recevoir des références de clients provenant de notre vaste
                  réseau. Ces références qualifiées sont le fruit de notre
                  réputation et de notre engagement à fournir un service
                  exceptionnel et à satisfaire pleinement nos clients. Ce qui
                  ouvre de nouvelles portes pour votre entreprise et augmente
                  considérablement vos opportunités commerciales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="partner.png"
            alt="PartnersImage"
            className="mt-14 w-full aspect-[2.94] max-md:mt-10 max-md:max-w-full rounded-3xl"
          />
        </div>
      </main>
    </div>
  );
};

export default MainPartnership;
