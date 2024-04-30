import BrokenrForm from "@/components/BrokenItems/BrokenForm";
import Header from "@/components/BrokenItems/Header";

export const metadata = {
  title: "Biens endommagés | Movedaba",
  description:
    "Signalez les biens endommagés que vous avez reçus lors de votre déménagement avec MoveDaba. Nous nous engageons à résoudre vos problèmes et à assurer votre satisfaction.",
  language: "fr",
  keywords: [
    "MoveDaba",
    "biens endommagés",
    "signaler les biens endommagés",
    "meubles cassées",
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
      <Header />
      <BrokenrForm />
    </div>
  );
};

export default page;
