import React from "react";
import Link from "next/link";

const CTAPartnership = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-32  w-fit h-fit bg-zinc-900 lg:rounded-[60px] rounded-xl   lg:mx-16 ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
          <section className="flex">
            <div className="flex   w-fit  rounded-lg">
              <img
                src="servicesCTA.png"
                alt="Placeholder image"
                className="w-fit   lg:rounded-[60px] rounded-xl border-8   border-[#94DA21]"
              />
            </div>
          </section>
          <section className="flex flex-col py-16   px-0 md:px-16">
            <div className="flex flex-col self-stretch mx-auto text-3xl font-bold text-white leading-[50px]  max-md:text-center my-auto">
              <h2>
                Prêt à devenir notre partenaire <br />
                et devenir meilleur avec
                <span className="text-lime-500"> Move Daba </span>?
              </h2>
              <Link
                href="/sign-up"
                className="flex items-center justify-center"
              >
                <button
                  className="shrink-0 self-center mt-8 h-11 w-[157px] max-md:mt-6 max-md:mb-6 max-md:w-[190px] text-base font-medium  flex justify-center items-center  sm:w-max px-6 outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 bg-[#94DA21] hover:bg-transparent hover:after:opacity-100 hover:after:scale-[2.5]  border-transparent hover:border-[#94DA21]
                    rounded-full py-6"
                >
                  {" "}
                  Devenir notre partenaire{" "}
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CTAPartnership;
