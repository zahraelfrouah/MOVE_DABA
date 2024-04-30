import React from "react";
import Image from "next/image";
import Link from "next/link";

const SectionTwo = () => {
  return (
    <div className=" flex flex-row-reverse  flex-wrap items-center justify-center  my-32  mx-auto bg-black rounded-3xl  w-fit  ">
       <div>
        <Image
          src="/boxes.png"
          alt="image "
          width={636}
          height={450}
          className="mx-auto shadow-2xl object-cover flex   lg:rounded-r-3xl rounded-tr-3xl"
        />
      </div>
      <div className="  text-start  py-28  px-16  ">
        <h1 className="text-3xl leading-normal mb-2 font-bold  text-white">
          Choisissez <span className="text-[#94DA21] text-start">Move Daba</span>
        </h1>
        <p className="text-white leading-relaxed font-light text-xl">
          Rejoignez-nous et vivez une expérience<br/> de déménagement sans souci et
          en toute aisance.
        </p>
        <Link href="./sign-up">
        <button
                  className="shrink-0 self-center mt-8 h-11  w-[157px] max-md:mt-6 max-md:mb-6 max-md:w-[190px] text-base font-medium  flex justify-center items-center  sm:w-max px-6 outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 bg-[#94DA21] hover:bg-transparent hover:after:opacity-100 hover:after:scale-[2.5]  border-transparent hover:border-[#94DA21]
                    rounded-full text-white mx-auto lg:mx-0  "
                >
                  {" "}
                  Rejoignez nous{" "}
                </button>
                </Link>
      </div>
     
    </div>
  );
};

export default SectionTwo;
