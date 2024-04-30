import React from "react";
import Navbar from "@/components/Navbar";

const HeroContact = () => {
  return (
    <section className="bg-zinc-900">
      <Navbar />
      <div className="flex flex-col items-center self-stretch px-16  pb-20 w-full text-lg rounded-b-xl  max-md:px-5 max-md:max-w-full mb-[800px] h-full">
        <div className="flex flex-col mt-32 mb-32 max-w-full w-[959px] max-md:mt-10 max-md:mr-2.5 relative">
          <h1 className="self-center text-4xl font-bold text-center text-lime-500">
            Contactez-nous
          </h1>
          <p className="mt-7 text-lg font-medium text-center text-neutral-200 max-md:max-w-full">
            Joignez nous facilement. Si vous avez des questions, des
            commentaires ou des préoccupations, n'hésitez pas à nous contacter
            en utilisant le formulaire ci-dessous. Nous nous assurons de
            répondre à toutes les demandes dans les plus brefs délais. Votre
            avis est important pour nous!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
