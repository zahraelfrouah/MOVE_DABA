import React from "react";
import FormFunc from "./FormFunc";

const FormContact = () => {
  return (
    <div>
      {/* FORM */}
      <section className="max-w-screen-lg mx-auto p-5 z-40 absolute top-[480px] left-0 right-0 h-fit">
        <div className="grid grid-cols-1 md:grid-cols-12 border rounded-xl bg-white shadow-2xl">
          <div className="bg-lime-500 md:col-span-4 p-10 rounded-xl text-white mt-2 ml-2 mb-2 mr-2">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Informations
              <br /> De Contact
            </h3>

            <div className="flex items-start gap-4 flex-end mt-96 max-md:mt-10">
              <svg
                width="50"
                height="31"
                viewBox="0 0 27 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M22.3614 21.8154L16.0354 28.1413C15.4763 28.6999 14.7183 29.0136 13.928 29.0136C13.1377 29.0136 12.3797 28.6999 11.8206 28.1413L5.49321 21.8154C3.82521 20.1473 2.68931 18.0221 2.22914 15.7084C1.76897 13.3948 2.00521 10.9966 2.90797 8.81723C3.81074 6.63784 5.33949 4.77509 7.3009 3.46453C9.26232 2.15397 11.5683 1.45447 13.9273 1.45447C16.2862 1.45447 18.5922 2.15397 20.5537 3.46453C22.5151 4.77509 24.0438 6.63784 24.9466 8.81723C25.8493 10.9966 26.0856 13.3948 25.6254 15.7084C25.1652 18.0221 24.0293 20.1473 22.3614 21.8154V21.8154Z"
                  stroke="white"
                  strokeWidth="2.23636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9278 17.8545C16.398 17.8545 18.4005 15.852 18.4005 13.3818C18.4005 10.9116 16.398 8.90906 13.9278 8.90906C11.4576 8.90906 9.45508 10.9116 9.45508 13.3818C9.45508 15.852 11.4576 17.8545 13.9278 17.8545Z"
                  stroke="white"
                  strokeWidth="2.23636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base ml-2">
                {" "}
                265 Avenue Hassan2, 80020 Agadir
              </span>
            </div>
            <div className="flex items-center  gap-4 mt-5">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.80642 1.59998H10.4193L13.2257 8.61602L9.71765 10.7208C11.2204 13.7679 13.6866 16.2341 16.7337 17.7369L18.8385 14.2289L25.8545 17.0353V22.6481C25.8545 23.3924 25.5589 24.1062 25.0326 24.6325C24.5063 25.1588 23.7924 25.4545 23.0481 25.4545C17.5746 25.1219 12.412 22.7975 8.5345 18.92C4.65698 15.0425 2.33263 9.87994 2 4.40639C2 3.66208 2.29568 2.94826 2.82198 2.42196C3.34829 1.89565 4.06211 1.59998 4.80642 1.59998"
                  stroke="white"
                  strokeWidth="2.23636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base ml-2">+212 6 49 99 65 50</span>
            </div>
            <div className="flex items-center gap-4  mt-5">
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.8545 1.74548H4.98182C3.33501 1.74548 2 3.08049 2 4.7273V19.6364C2 21.2832 3.33501 22.6182 4.98182 22.6182H25.8545C27.5014 22.6182 28.8364 21.2832 28.8364 19.6364V4.7273C28.8364 3.08049 27.5014 1.74548 25.8545 1.74548Z"
                  stroke="white"
                  strokeWidth="2.23636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 4.72729L15.4182 13.6727L28.8364 4.72729"
                  stroke="white"
                  strokeWidth="2.23636"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base ml-2"> movedaba@gmail.com</span>
            </div>
          </div>
          <FormFunc />
        </div>
      </section>
      {/* Background */}
      <section className="max-md:mb-[1300px]"></section>
    </div>
  );
};

export default FormContact;
