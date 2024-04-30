"use client";
import React from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 800,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Reviews = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center justify-center gap-14   bg-white w-fit px-20 mx-auto py-10 -top-[80px] relative rounded-3xl   shadow-2xl   z-30">
      <div className="flex justify-center items-center gap-5   ">
        <div>
          <Image
            src="/us1.png"
            alt="residence"
            width={90}
            height={90}
            className="object-cover"
          />
        </div>
        <div className="border-r-4 pr-3">
          <h1 className="text-[#94DA21] flex font-bold text-3xl">
            +<Number n={142} />
          </h1>
          <h3 className="font-bold text-lg">Maisons déménagées</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 ">
        <div>
          <Image
            src="/us2.png"
            alt="residence"
            width={90}
            height={90}
            className="object-cover"
          />
        </div>
        <div className="border-r-4 pr-3">
          <h1 className="text-[#94DA21] flex font-bold text-3xl">
            +<Number n={500} />
          </h1>
          <h3 className="font-bold text-lg">Bureaux déménagés</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 ">
        <div>
          <Image
            src="/us3.png"
            alt="residence"
            width={90}
            height={90}
            className="object-cover"
          />
        </div>
        <div className="border-r-4 pr-3">
          <h1 className="text-[#94DA21] flex font-bold text-3xl">
            +<Number n={234} />
          </h1>
          <h3 className="font-bold text-lg">Clients satisfaits</h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 ">
        <div>
          <Image
            src="/us4.png"
            alt="residence"
            width={90}
            height={90}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-[#94DA21] flex font-bold text-3xl">
            +<Number n={628} />
          </h1>
          <h3 className="font-bold text-lg">Kilomètres parcourus</h3>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
