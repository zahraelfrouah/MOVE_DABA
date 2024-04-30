import Faqs from "@/components/Home/Faqs";
import Hero from "@/components/Home/Hero";
import OurClient from "@/components/Home/OurClient";
import Partnership from "@/components/Home/Partnership";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/TestMonials";
import WhyChoseUs from "@/components/Home/WhyChoseUs";

export const metadata = {
  title: "Acceuil | Movedaba",
  description:
    "MoveDaba propose des services de déménagement professionnels pour vous aider à déménager en toute facilité",
  language: "fr",
  keywords: [
    "MoveDaba",
    "services de déménagement",
    "déménagement",
    "devis gratuit",
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
export default function Home() {
  return (
    <>
      <Hero />
      <OurClient />
      <Services />
      <WhyChoseUs />
      <Partnership />
      <Testimonials />
      <Faqs />
    </>
  );
}
