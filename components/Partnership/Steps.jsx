import React from "react";

const StepsPartnership = () => {
  const steps = [
    {
      num: 1,
      title: "Première étape",
      description:
        " Inscrivez-vous pour devenir partenaire, puis attendez la validation de votre compte.",
    },
    {
      num: 2,
      title: "  Deuxième étape",
      description:
        " Nous vous contactons pour finaliser un accord contractuel   établissant les termes de notre partenariat et les responsabilités de chaque partie.",
    },
    {
      num: 3,
      title: " Troisième étape",
      description:
        "   La validation de notre partenariat ainsi que de votre compte de partenaire en ligne a été confirmée.",
    },
  ];
  return (
    <section className="flex flex-col items-center ">
      {/* description */}

      <div className="text-center mb-16">
        <h1 className="text-2xl leading-normal mb-2 font-bold">
          <span className="text-[#94DA21] text-3xl">
            Votre Voie vers le Partenariat:
          </span>{" "}
          <br /> Guide compréhensif pour rejoindre notre réseau <br /> et
          bénéficier d'opportunités exclusives.
        </h1>
        <p className="text-gray-500 leading-relaxed font-light text-xl">
          En tant que partenaire, vous bénéficierez d'un accès privilégié à
          notre vaste réseau de clients, ce qui vous permettra <br />{" "}
          d'augmenter votre visibilité et d'attirer de nouveaux clients. Notre
          collaboration s'annonce fructueuse, offrant ainsi <br /> de nombreuses
          opportunités de croissance et de développement. Rejoignez-nous dès
          aujourd'hui pour <br /> dynamiser votre entreprise et atteindre de
          nouveaux sommets ensemble.
        </p>
      </div>

      {/* steps */}
      <div className="grid grid-cols-1  container mx-auto   lg:grid-cols-3 gap-5 items-center pt-14 lg:px-16 mb-24    rounded-3xl max-md:px-5 max-md:mt-10  ">
        {steps?.map((step) => (
          <div
            key={step?.num}
            className="flex flex-col grow items-center p-16  w-full text-center bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-3.5"
          >
            <div className="flex shrink-0  justify-center items-center w-20 h-20 px-7 text-white bg-lime-500 rounded-full max-md:px-5">
              <span className="font-bold text-3xl">{step?.num}</span>
            </div>

            <h3 className="mt-6 text-3xl font-bold text-zinc-900">
              {step?.title}
            </h3>
            <p className="self-stretch mt-8 text-base font-medium text-neutral-600">
              {step?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsPartnership;
