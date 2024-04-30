import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <section className="relative py-32 lg:py-36 bg-white flex flex-col  ">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-32  ">
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl ">
            <Image
              src="/about.png"
              alt="hero image"
              width="616"
              height="503"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-center object-cover lg:max-h-none max-h-96  aspect-[1.96]"
            />
          </div>
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2 "
          >
            <h1
              className="text-3xl  sm:text-4xl md:text-5xl xl:text-4xl
            font-bold text-gray-900"
            >
              <span className="text-[#94DA21]">
                Votre déménagement<span className="text-gray-900">,</span>{" "}
                <br /> Notre expertise<span className="text-gray-900"> :</span>{" "}
              </span>{" "}
              <br /> Des solutions fluides pour votre transition.
            </h1>
            <p className="mt-8 text-gray-700">
              En tant que société de déménagement qui couvre le territoire
              marocain, nous proposons une vaste gamme de services de
              déménagement, allant de l'emballage et du chargement au transport
              et au déballage. <br /> En plus de nos propres prestations, nous
              avons établi des partenariats avec des fournisseurs de services de
              confiance pour offrir des solutions de déménagement
              supplémentaires directement sur notre site web. Que ce soit pour
              des déménagements locaux ou de longue distance, notre engagement
              est de rendre chaque déménagement aussi fluide et sans stress que
              possible pour nos clients.
            </p>
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
              <div className="flex sm:flex-row flex-col gap-5 w-full">
                <Link  href="./sign-up">
                <button
                  className=" text-white hover:text-black self-center mt-8 h-11 px-8 max-md:mt-6 max-md:mb-6 max-md:w-[190px] text-base font-medium    sm:w-max outline-none relative  border duration-300 ease-linear
                  after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 bg-[#94DA21] hover:bg-transparent hover:after:opacity-100 hover:after:scale-[2.5]  border-transparent hover:border-[#94DA21]
                  rounded-full  mx-auto lg:mx-0"
                >
                  <span className=" sm:flex relative z-[5]">
                    Réserver
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

export default AboutUs;
