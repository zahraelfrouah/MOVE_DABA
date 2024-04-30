import React from "react";
import Header from "/components/About-us/Header.jsx";
import Reviews from "/components/About-us/Reviews.jsx";
import AboutUs from "/components/About-us/AboutUs.jsx";
import Section from "/components/About-us/Section.jsx";
import SectionTwo from "/components/About-us/SectionTwo.jsx";

export const metadata = {
  title: "À Propos | Movedaba",
  description:
    "Move Daba est une société spécialisée dans le déménagement au Maroc, offrant des services de qualité tant pour les déménagements privés que pour les entreprises.",
  language: "fr",
  keywords: [
    "MoveDaba",
    "a propos de MoveDaba",
    "qui est MoveDaba",
    "c'est quoi MoveDaba",
    "déménagement",
    "professionnels",
    "qualité",
    "devis gratuit",
    "services de déménagement",
    "déménagement maroc",
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
      <Header />
      <Reviews />
      <AboutUs />
      <Section />
      <SectionTwo />
    </div>
  );
};

export default page;
