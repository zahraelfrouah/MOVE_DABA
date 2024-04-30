"use client";
import Navbar from "@/components/Navbar";
import Offers from "@/components/user-components/Offers";
import Profile from "@/components/user-components/Profile";
import Table from "@/components/user-components/Table";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Form from "@/components/user-components/Form";
import { getCookie } from "cookies-next";

const ClientPage = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [user, setUser] = useState({});

  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);

  const token = getCookie("access_token");
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `https://pfe-backend-sqmm.onrender.com/api/user/${currentUser._id}`,
        {
          params: {
            token: token,
          },
        }
      );
      setUser(res.data);
    } catch (error) {
      console.log("Échec de récupération des données de l'utilisateur.");
    }
  };

  useEffect(() => {
    fetchUser();
    const intervalId = setInterval(fetchUser, 10000);
    return () => clearInterval(intervalId);
  }, []);
  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const btns = [
    user.role === "enterprise"
      ? { name: "Offres", title: "Offres actuelles" }
      : { name: "Devis", title: "Formulaire pour demander votre devis" },
    user.role === "enterprise"
      ? { name: "Offres en cours", title: "Offres sélectionnées" }
      : { name: "Demandes", title: "Vos demandes précédentes" },
    { name: "Profil" },
  ];

  if (!token && !currentUser) {
    return null;
  }

  return (
    <main className="relative">
      <div className="bg-[#191919] h-96 w-full -z-10 absolute " />
      <Navbar />

      <section className=" container mx-auto   md:p-10">
        <div className="sm:flex hidden flex-wrap justify-center gap-2">
          {btns?.map((btn, index) => (
            <button
              key={index}
              title={btn.title}
              onClick={() => handleButtonClick(index)}
              className={`py-3 px-6 md:px-12 lg:px-28 text-lg font-medium rounded-t-3xl ${
                selectedButton === index
                  ? "bg-[#94D726] text-white"
                  : "bg-[#F3F3F3] text-[#838383]"
              } transition-colors capitalize duration-300`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        <select className="py-3 sm:hidden w-fit mx-auto block px-6 md:px-12 lg:px-28 text-lg font-medium rounded-t-3xl bg-[#F3F3F3] text-[#838383] transition-colors capitalize duration-300">
          {btns.map((option, index) => (
            <option
              key={index}
              onClick={() => handleButtonClick(index)}
              value={option.name}
              className={`py-3 px-6 md:px-12 lg:px-28 text-lg font-medium rounded-3xl ${
                selectedButton === index
                  ? "bg-[#94D726] text-white"
                  : "bg-[#F3F3F3] text-[#838383]"
              } transition-colors capitalize duration-300`}
            >
              {option.name}
            </option>
          ))}
        </select>

        <div className="md:p-10 p-6 w-full relative bg-white rounded-xl shadow-xl">
          {selectedButton === 0 && user?.role === "enterprise" && (
            <Table isActive={user.isActive} />
          )}
          {selectedButton === 0 &&
            (user?.role === "user" || user?.role === "admin") && (
              <Form
                isActive={user?.isActive}
                handleButtonClick={handleButtonClick}
              />
            )}
          {selectedButton === 1 && <Offers user={user} />}
          {selectedButton === 2 && <Profile user={user} />}
          {selectedButton !== 0 &&
            selectedButton !== 1 &&
            selectedButton !== 2 && (
              <p>Aucun contenu à afficher pour ce bouton.</p>
            )}
        </div>
      </section>
    </main>
  );
};

export default ClientPage;
