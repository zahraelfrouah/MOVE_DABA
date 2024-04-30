import React from "react";
import Image from "next/image";
import Link from "next/link";

const Partnership = () => {
  return (
    <div>
      <section className="relative py-32 lg:py-36 bg-white flex flex-col">
        <h1 className="text-center text-3xl leading-normal mb-16 font-bold">
          Partenariat
        </h1>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-row-reverse  flex-wrap gap-10 lg:gap-12  ">
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="/home.png"
              alt="image"
              width="2350"
              height="2359"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96 shadow-2xl"
            />
          </div>
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
            >
              Bénéficiez de notre
              <br /> vaste réseau de partenaires de{" "}
              <span className="text-[#94DA21]">Confiance</span>
            </h1>
            <p className="mt-8 text-gray-700">
              Bénéficiez de notre vaste réseau de partenaires <br /> de
              confiance, garantissant des services de déménagement <br /> de
              première qualité adaptés à vos besoins, et découvrez <br />{" "}
              comment vous pouvez également devenir partenaire.
            </p>
            <div className="mt-10  flex  mx-auto lg:mx-0">
              <div className="flex  flex-col ">
                <Link  href="./partnership">
                <button
                  className="text-white hover:text-black self-center mt-8 h-11 px-8 max-md:mt-6 max-md:mb-6 max-md:w-[190px] text-base font-medium  flex justify-center items-center  sm:w-max outline-none relative overflow-hidden border duration-300 ease-linear
                  after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 bg-[#94DA21] hover:bg-transparent hover:after:opacity-100 hover:after:scale-[2.5]  border-transparent hover:border-[#94DA21]
                  rounded-full  mx-auto lg:mx-0
                  "
                >
                  <span className=" sm:flex relative z-[5]">
                    En savoir plus
                  </span>
                </button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Partnership;
