import FormContact from "@/components/Contact/Form";
import HeroContact from "@/components/Contact/Hero";
export const metadata = {
  title: "Contact | Movedaba",
  description:
    "Contactez MoveDaba pour obtenir des informations supplémentaires sur nos services de déménagement ou pour toute question ou préoccupation que vous pourriez avoir.",
  language: "fr",
  keywords: [
    "MoveDaba",
    "contact",
    "contactez-nous",
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
    <main>
      <HeroContact />
      <FormContact />
    </main>
  );
};

export default page;
