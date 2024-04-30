import React from "react";

const Stepper = ({ steps, activeStep }) => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full">
      <h1 className="text-3xl font-bold mt-5 text-center ">
        REMPLIR LE FORMULAIRE
      </h1>
      <div className="flex items-center justify-between text-base text-gray-600 p-4 md:p-20 ">
        <div className="flex  items-center flex-col gap-4">
          <div
            className={` w-12 h-12 bg-[#94DA21] rounded-full flex items-center justify-center  text-xl  transition-all duration-300  ${
              activeStep >= 1
                ? "transform scale-110   text-white"
                : "hidden md:block"
            }`}
          >
            1
          </div>
          <h3
            className={`lg:text-nowrap text-black text-lg font-bold ${
              activeStep != 1 && "hidden md:block"
            } `}
          >
            Informations générales
          </h3>
        </div>

        <div
          className={`h-1 mx-4 w-full ${
            steps >= 2 ? "bg-[#94DA21]" : "bg-[#F4F4F4] text-[#909090]  "
          } transition-all duration-300`}
        />

        <div className="flex items-center  flex-col gap-4">
          <div
            className={`w-12 h-12 ${
              steps >= 2 ? "bg-[#94DA21]" : "  bg-[#F4F4F4] text-[#909090]"
            } rounded-full flex  items-center justify-center  text-white text-xl transition-all duration-300 ${
              activeStep >= 2 ? "transform scale-110" : "hidden md:block"
            }`}
          >
            2
          </div>
          <h3
            className={`lg:text-nowrap text-black  text-lg font-bold ${
              activeStep !== 2 && "hidden md:block"
            }`}
          >
            Description du service
          </h3>
        </div>

        <div
          className={`h-1 mx-4 w-full ${
            steps === 3 ? "bg-[#94DA21]" : "bg-[#F4F4F4]"
          } transition-all duration-300`}
        />

        <div className="flex items-center  flex-col gap-4">
          <div
            className={`w-12 h-12 ${
              steps >= 3 ? "bg-[#94DA21]" : "bg-[#F4F4F4] text-[#909090]"
            } rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 ${
              activeStep >= 3 ? "transform scale-110" : "hidden md:block "
            }`}
          >
            3
          </div>
          <h3
            className={`lg:text-nowrap text-black text-lg  font-bold  ${
              activeStep !== 3 && "hidden md:block"
            }`}
          >
            Description des dommages
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
