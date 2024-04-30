import React from "react";
import Image from "next/image";

const OurClient = () => {
  return (
    <div>
      <h1 className="text-2xl  text-center font-bold my-12 ">Nos Clients</h1>
      <div className=" flex justify-center items-center bg-[#F5F5F3] shadow-lg  w-fit h-full mx-auto p-8  rounded-3xl lg:gap-16 gap-y-5 overflow-x-hidden flex-wrap">
        <Image
          src="/logodark.png"
          alt="our client"
          height={90}
          width={200}
          className="max-w-none p-2 "
        />
        <Image
          src="/logodark.png"
          alt="our client"
          height={90}
          width={200}
          className="max-w-none p-2 "
        />
        <Image
          src="/logodark.png"
          alt="our client"
          height={90}
          width={200}
          className="max-w-none p-2 "
        />
        <Image
          src="/logodark.png"
          alt="our client"
          height={90}
          width={200}
          className="max-w-none p-2 "
        />
        <Image
          src="/logodark.png"
          alt="our client"
          height={90}
          width={200}
          className="max-w-none p-2 "
        />
      </div>
    </div>
  );
};

export default OurClient;
