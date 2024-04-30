import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url('/bg-landing.png')` }}
    >
      <section className="flex flex-col px-4 ">
        <div className="z-50 text-white">
          <Navbar />
          <div className="text-center  leading-normal  mt-20">
            <h3 className="text-lg mb-5">
              Découvrez un déménagement sans stress avec nos services fiables et
              efficaces
            </h3>
            <h1 className="text-4xl  font-bold mb-5">
              Nous pouvons vous déplacer partout
              <br />
              <span className="text-[#94DA21]">
                Rapidement et facilement.
              </span>{" "}
            </h1>
            <p className="mb-4">
              Choisissez notre service de déménagement et profitez de la
              tranquillité d'esprit grâce à nos
              <br /> services d'emballage professionnels. Nous accordons la
              priorité à la sécurité de vos biens <br />
              et assurons qu'ils sont manipulés avec le plus grand soin.
            </p>
          </div>
          <div className="flex justify-center items-center gap-7 ">
            <Link
              href="./about-us"
              className="rounded-full border-2 border-white  px-9  h-12  hover:bg-white hover:text-black  
              relative overflow-hidden duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0   hover:after:opacity-100 hover:after:scale-[2.5]  flex items-center"
            >
              <span className=" font-bold ">Découvrir</span>
            </Link>
            <Link
              href="./sign-up"
              className="rounded-full border-2  border-white  px-9  h-12  hover:bg-white hover:text-black 
              relative overflow-hidden duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 hover:after:opacity-100 hover:after:scale-[2.5] flex items-center "
            >
              <span className="font-bold ">Réserver</span>
            </Link>
          </div>

          <Image
            src="/bOXEs (2).png"
            alt="Hero image"
            width="1336"
            height="244"
            className="mx-auto  border-4  my-8 rounded-3xl object-cover  w-full "
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
