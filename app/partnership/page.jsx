import CTAPartnership from "@/components/Partnership/CTA";
import HeroPartneship from "@/components/Partnership/Header";
import MainPartnership from "@/components/Partnership/MainContent";
import StepsPartnership from "@/components/Partnership/Steps";
export const metadata = {
  title: "Partenariat | Movedaba",
  description:
    "Devenez notre partenaire de confiance dans l'industrie du déménagement, où la qualité du service et la satisfaction client sont au cœur de notre mission.",
  language: "fr",
  keywords: [
    "MoveDaba",
    "partenariats",
    "devenir partenaire",
    "partenaire de démnénagement",
    "references clients déménagement",
    "offres clients déménagement",
    "services de déménagement",
    "déménagement",
    "devis gratuit",
    "déménageurs",
    "déménagement maroc",
    "déménageurs professionnels",
  ],
  authors: [
    { name: "Mehdi" },
    { name: "Zahra" },
    { name: "Sara" },
    { name: "Tarik" },
  ],
};

const page = () => {
  return (
    <div>
      <HeroPartneship />
      <MainPartnership />
      <StepsPartnership />
      <CTAPartnership />
    </div>
  );
};

export default page;
