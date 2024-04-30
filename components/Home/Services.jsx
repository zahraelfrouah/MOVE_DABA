import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const services = [
    {
     
      image:"/export.png",
      content:
        "Déménagements locaux ou de longue distance pratiques et efficacesdans tout le pays du Maroc.",
        href: "./services",
    },
    {
     
      image:"/delivery.png",
      content:
        "Déménagements pour résidences privées et espaces de bureau, pour une transition fluide.",
      href: "./services",
    },
    {
    
      image:"/unboxing.png",
      content:
        " Emballage, déballage et même assemblage de meubles pour rendre votre déménagement plus facile.",
        href: "./services",
    },
    {
   
      image:"/pc.png",
      content:
        " Un espace utilisateur en ligne personnel pour réserver et obtenir un devis pour votre déménagement.",
        href: "./services",
    },
  ];
  return (
    <div className="my-36 container mx-auto">
      <div className="text-center mb-16 ">
        <h1 className="text-2xl leading-normal mb-2 font-bold ">
          Services de déménagement{" "}
          <span className="text-[#94DA21]">Fiables </span> et{" "}
          <span className="text-[#94DA21]">Efficaces</span>
        </h1>
        <p className="text-gray-500 leading-relaxed font-light text-xl">
          Découvrez un déménagement sans tracas grâce à notre
          <br /> gamme complète de services. De l'emballage et du chargement au
          transport et au déballage,
          <br />
          nous nous occupons de tout avec le plus grand soin et
          professionnalisme.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-7  items-center">
        {services?.map((service, key) => (
          <div
            key={key}
            className=" space-y-10  p-10 border rounded-xl hover:bg-white hover:shadow-2xl   "
          >
            {/* icon */}
            <div className="bg-lime-400 rounded-full p-5 w-fit mx-auto">
            
              <Image
                src={service?.image}
                alt="service icon"
                width={83}
                height={83}
                className="mx-auto z-40 "
              />
              
            </div>
            <h1 className="text-center text-lg">{service?.content}</h1>
            <div>
              <Link
                href={service?.href}
                className="bg-[#F1F1F1] hover:bg-[#94DA21]  hover:text-white rounded-full  py-3  flex justify-center relative overflow-hidden border duration-300 ease-linear
                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0  hover:after:opacity-100 hover:after:scale-[2.5]  "
              >
                <span className="text-bold text-lg  ">En savoir plus</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
