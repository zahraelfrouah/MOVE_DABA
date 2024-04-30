import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhyChoseUs = () => {
  return (
    <div>
      <section className="relative lg:py-36 bg-white flex flex-col">
        <h1 className=" text-center text-3xl leading-normal mb-16 font-bold">
          Pourquoi nous choisir
        </h1>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12  ">
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="/women.png"
              alt="Hero image"
              width="2350"
              height="2359"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none shadow-xl"
            />
          </div>
          <div
            className="relative flex flex-col items-center text-center  lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2 gap-y-5"
          >
            <div className="flex justify-center items-center gap-7 ">
            <Image
            src="/one.png"
            alt="icon"
            width={52}
            height={52}

            />
            <h1
              className="text-lg leading-tight  sm:text-lg md:text-l xl:text-3xl
            font-bold text-gray-900"
            >
               Services ponctuels.
            </h1>
            </div>
            <div className="flex justify-center items-center gap-7 ">
            <Image
            src="/two.png"
            alt="icon"
            width={52}
            height={52}

            />
            <h1
              className="text-lg leading-tight  sm:text-lg md:text-l xl:text-3xl
            font-bold text-gray-900"
            >
               Coûts et dépenses réduis.
              
            </h1>
            </div>
            <div className="flex justify-center items-center gap-7 ">
            <Image
            src="/three.png"
            alt="icon"
            width={52}
            height={52}

            />
            <h1
              className="text-lg leading-tight  sm:text-lg md:text-l xl:text-3xl
            font-bold text-gray-900"
            >
               Sûrs et Sécurisés.
            </h1>
            </div>
            
           
            
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
              <div className="flex sm:flex-row flex-col gap-5 w-full">
                <Link
                href="./about-us"
                >
                <button
                  className="text-white hover:text-black shrink-0 self-center mt-8 h-11  w-[157px] max-md:mt-6 max-md:mb-6 max-md:w-[190px] text-base font-medium  flex justify-center items-center  sm:w-max px-6 outline-none relative overflow-hidden border duration-300 ease-linear
                  after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 bg-[#94DA21] hover:bg-transparent hover:after:opacity-100 hover:after:scale-[2.5]  border-transparent hover:border-[#94DA21]
                  rounded-full  mx-auto lg:mx-0 "
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

export default WhyChoseUs;
