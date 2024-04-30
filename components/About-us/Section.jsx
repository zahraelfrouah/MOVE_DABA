import React from "react";
import Link from "next/link";
import Image from "next/image";

const Section = () => {
  return (
    <div className=" ">
      <div className="text-center mb-16 ">
        <h1 className="text-2xl leading-normal mb-2 font-bold ">
          Renforcer la <span className="text-[#94DA21]">confiance</span> et{" "}
          <span className="text-[#94DA21]">satisfaire</span> nos clients <br />{" "}
          à chaque déménagement.
        </h1>
        <p className="text-gray-500 leading-normal font-light text-xl text-center">
          Si vous êtes à la recherche d'une société de déménagement en <br />{" "}
          laquelle vous pouvez avoir confiance, ne cherchez pas plus loin. Nous
          nous engageons <br /> à répondre à tous vos besoins et à fournir des
          services de qualité supérieure.
        </p>
      </div>

      <div className="lg:flex smc:flex-wrap justify-center items-center px-16  w-fit mx-auto  bg-stone-100 rounded-3xl max-md:px-5 max-md:mt-10 max-md:mb-[500px] max-md:bg-white gap-8">
        <div className=" flex flex-col gap-y-5  p-10 my-5   md:h-[350px] md:w-[352px]  rounded-xl bg-white shadow-2xl  z-50 ">
          {/* icon */}
          <div className="bg-lime-400 rounded-full p-5 w-fit mx-auto">
            <Image
              src="/idea.png"
              alt="service icon"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
          <h1 className="text-center text-lg font-bold ">Notre Vision</h1>
          <p className="text-center">
            Avoir un impact positif sur la vie de nos clients et de notre
            équipe, en créant des expériences mémorables.
          </p>
        </div>
        <div className=" flex flex-col gap-y-5 py-12 px-6   md:h-[350px] md:w-[352px]  rounded-xl bg-white shadow-2xl">
          {/* icon */}
          <div className="bg-lime-400 rounded-full p-5 w-fit mx-auto">
            <Image
              src="/motivation.png"
              alt="service icon"
              height={60}
              width={60}
              className="mx-auto"
            />
          </div>
          <h1 className="text-center text-lg font-bold">Notre Mission</h1>
          <p className="text-center">
            S'engager à fournir des expériences de déménagement exceptionnelles
            grâce à notre dévouement et notre professionnalisme.
          </p>
        </div>
        <div className=" flex flex-col gap-y-5 p-10  my-5  md:h-[350px] md:w-[352px]  rounded-xl bg-white shadow-2xl ">
          {/* icon */}
          <div className="bg-lime-400 rounded-full p-5 w-fit mx-auto">
            <Image
              src="/goal.png"
              alt="service icon"
              height={60}
              width={60}
              className="mx-auto"
            />
          </div>
          <h1 className="text-center text-lg font-bold">Notre objectif</h1>
          <p className="text-center">
            Viser à surpasser vos attentes, assurant des transitions fluides et
            une satisfaction client incomparable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
