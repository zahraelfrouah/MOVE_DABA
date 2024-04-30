import React from "react";

const MainServices = () => {
  return (
    <div className="flex flex-col items-center bg-white rounded-3xl">
      {/* description */}
      <section className="mt-40 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
              <h2 className="text-4xl font-bold text-black leading-[50px] max-md:max-w-full">
                Fiers de fournir
                <span className="text-lime-500"> d'excellents services </span>
                en tout temps et partout.
              </h2>
              <p className="mt-9 text-lg font-medium text-neutral-600 max-md:max-w-full">
                Êtes-vous à la recherche d'une expérience de déménagement fluide
                et sans stress ? Ne cherchez pas plus loin ! Chez Move Daba,
                nous sommes fiers de fournir des services de premier ordre avec
                une touche personnelle. Notre équipe dévouée de déménageurs
                s'engage à dépasser vos attentes à chaque étape du processus.
              </p>
              <a
                href="#services"
                className="shrink-0 mt-9 h-11 rounded-3xl w-[157px] text-white text-base font-medium  flex justify-center items-center  sm:w-max px-6  outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 bg-[#94DA21] hover:bg-transparent hover:after:opacity-100 hover:after:scale-[2.5]  border-transparent hover:border-[#94DA21] hover:text-black mx-auto lg:mx-0 
                  "
              >
                Découvrir
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2 max-md:flex-col max-md:gap-0">
                <figure className="flex flex-col w-[66%] max-md:ml-0  max-md:w-full">
                  <img
                    src="main.png"
                    alt="Main image"
                    className="z-10 self-stretch my-auto w-full aspect-[0.81] max-md:mt-10 max-md:max-w-full ml-20 max-md:ml-0"
                  />
                </figure>
                <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                  <div
                    className="shrink-0 mx-auto max-w-full rounded-3xl bg-[#94DA21] h-[630px] w-[312px] max-md:hidden"
                    role="presentation"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainServices;
