import HeaderServices from "@/components/services/Header";
import MainServices from "@/components/services/Main";
import CTAServices from "@/components/services/CTA";
import ListServices from "@/components/services/Services";
import React from "react";
export const metadata = {
  title: "Services | Movedaba",
  description:
    "Découvrez les services de qualité proposés par MoveDaba pour les meilleurs déménagements privés et d'entreprises au Maroc.",
  language: "fr",
  keywords: [
    "MoveDaba",
    "services de déménagement",
    "déménagement",
    "déménagement privé",
    "déménagement d'entreprise",
    "devis gratuit",
    "devis demenagement en ligne",
    "emballage",
    "déballage",
    "maintien biens fragiles",
    "assemblage de meubles",
    "déménageurs",
    "déménagement maroc",
    "déménageurs professionnels",
    "Maroc",
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
      <HeaderServices />
      <MainServices />
      <ListServices />
      <CTAServices />
    </div>
  );
};

export default page;
