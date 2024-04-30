import Link from "next/link";
import React from "react";

const Faqs = () => {
  return (
    <div className="my-28  ">
      <div className="flex flex-col items-center ">
        <h2 className="font-bold text-5xl mt-5 tracking-tight ">FAQs</h2>
        <p className="text-neutral-500 text-xl mt-8 mb-10 text-center">
          Trouvez des réponses aux questions fréquemment posées<br/> concernant nos
          services de déménagement.
        </p>
      </div>
      <div className=" max-w-screen-lg  mx-auto px-5 space-y-8 bg-white border  min-h-sceen rounded-2xl shadow-2xl py-10">
        <div className="grid  gap-x-12   divide-y-2 divide-[#5D5F6C] max-w-3xl mx-auto mt-8">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>Comment puis-je réserver ?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Réserver nos services de déménagement est simple. Il vous suffit
                de visiter notre site web, de créer un compte ou de vous
                connecter, puis de remplir le formulaire de réservation. Notre
                équipe vous contactera ensuite pour confirmer les détails.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Quels sont vos tarifs ?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Nos tarifs varient en fonction de la distance, de la taille du
                déménagement et des services supplémentaires nécessaires.
                Veuillez remplir le formulaire de réservation pour obtenir un
                devis personnalisé.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>Offrez-vous des services d'emballage ?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Oui, nous proposons des services d'emballage professionnels pour
                garantir que vos biens sont soigneusement emballés et prêts pour
                le déménagement.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>Quelles zones prenez-vous en charge ?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Nous desservons toutes les régions du Maroc. Nous proposons des
                services de déménagement dans la grande zone métropolitaine.
                Contactez-nous pour vérifier si nous couvrons votre emplacement
                spécifique.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>Quels sont vos véhicules et équipements ?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Nous disposons d'une flotte de véhicules et d'équipements
                adaptés à différents besoins et situations. Nous avons des
                fourgonnettes, des camions, des remorques, et bien plus encore.
                Nous possédons également des véhicules spéciaux et de
                l'équipement pour les biens fragiles, tels que des hayons
                élévateurs, des rampes, des chariots, et plus encore. Nous
                entretenons régulièrement nos véhicules et équipements pour
                garantir leur sécurité et leur efficacité.
              </p>
            </details>
          </div>
        </div>
        <div className="space-y-5 w-fit mx-auto text-center mt-9">
          <h1 className="text-3xl text-black font-bold ">
            Avez-vous encore des questions ?
          </h1>
          <p>
            Contactez-nous pour plus d'informations ou pour réserver votre
            déménagement.
          </p>
          <div>
            <Link
              href="./contact"
              className="group relative inline-block overflow-hidden  border   px-12 py-3 text-sm font-medium  focus:outline-none focus:ring active:bg-[#dda15e]active:text-white  hover:border-[#94DA21]
              bg-[#94DA21] hover:bg-transparent
              hover:text-black rounded-full text-white shadow-lg 
              duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0  hover:after:opacity-100 hover:after:scale-[2.5]  "
            >
              
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
