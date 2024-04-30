import React from "react";

const Buttons = ({ user, handleButtonClick, selectedButton }) => {
  const btn = [
    user.role === "enterprise" ? "Devi" : "Devis",
    user.role === "enterprise" ? "offres" : "Demandes",
    "Profil",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-2 ">
      {btn?.map((name, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={`py-3 px-6 md:px-12 lg:px-28 text-lg font-medium rounded-t-3xl ${
            selectedButton === index
              ? "bg-[#94D726] text-white"
              : "bg-[#F3F3F3] text-[#838383]"
          } transition-colors duration-300`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
