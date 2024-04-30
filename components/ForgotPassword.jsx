"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios"; // Import Axios

const ForgotPassword = ({ setforgotPassword, setHovered, hovered }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setError("Veuillez saisir une adresse e-mail valide.");
      return;
    }
    try {
      setLoading(true);

      // Use Axios instead of fetch
      const response = await axios.post(
        "https://pfe-backend-sqmm.onrender.com/api/auth/forgot-password",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (response.status === 200) {
        setMessage(data.message);
        setLoading(false);
        setError("");
      } else {
        setLoading(false);
        setMessage("");
        setError(data.message || "Quelque chose s'est mal passé.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setMessage("");
      setError("Quelque chose s'est mal passé.");
      setLoading(false);
    }
  };

  return (
 
      <div className="bg-gradiant px-10 py-20">
      <div className=" bg-white border shadow-lg rounded-3xl  flex items-center w-fit mx-auto flex-col justify-center ">
        <div className="py-20  px-10 max-w-xl ">
        <div className=" text-center p-3 mb-8 ">
          <h1 className="text-3xl font-bold text-gray-800 ">
            Mot de passe oublié ?
          </h1>
          <p className="mt-2  text-gray-900 ">
            Souvenez-vous de votre mot de passe ?{" "}
            <button
              className={`text-white underline  transition text-lg duration-150 ease-in-out hover:text-lime-400 focus:text-lime-500 active:text-lime-500 `}
              onClick={() => setforgotPassword(false)}
            >
              <span className=" text-[#94DA21]">Se connecter</span>
            </button>
          </p>
        </div>

        {message && <p className=" pb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className={`outline-[#94DA21] rounded-full  bg-[#F6F6F6] w-full px-4 py-3`}
            onChange={handleEmailChange}
          />
          <button
            disabled={loading}
            className="relative bg-[#191919] rounded-full text-white lg:text-lg text-xs    uppercase hover:opacity-95 hover:bg-[#94DA21] transition-all disabled:opacity-80 w-full overflow-hidden my-5 py-3
            border duration-300 ease-linear
                  after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0  hover:after:opacity-100 hover:after:scale-[2.5] "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span
             
              style={{ width: hovered ? "100%" : "0%" }}
            ></span>
            {loading ? "Chargement..." : "Réinitialiser le mot de passe"}
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p className="text-lg self-center text-[#313538]">
            Nouvel utilisateur?
          </p>
          <Link href="/sign-up">
            <span className=" text-xl text-[#94DA21]">Inscription</span>
          </Link>
        </div>

        <p className="text-red-500 mt-5">{error ? error : ""}</p>
      </div>
      </div>
      </div>
   
  );
};

export default ForgotPassword;
