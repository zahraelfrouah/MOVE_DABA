"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios"; // Import Axios
import Navbar from "./Navbar";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Password validation
    if (!password || password.length < 8) {
      setError("Le mot de passe doit comporter au moins 8 caractères.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      setLoading(true);

      // Use Axios instead of fetch
      const response = await axios.post(
        "https://pfe-backend-sqmm.onrender.com/api/auth/reset-password",
        { token, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (response.status === 200) {
        setMessage(data.message);
        setError("");
        router.push("/");
      } else {
        setMessage("");
        setLoading(false);
        setError(data.message || "Quelque chose s'est mal passé.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setMessage("");
      setLoading(false);
      setError("Quelque chose s'est mal passé.");
    }
  };

  return (
    <div>
      <div className="bg-[#191919]">

    <Navbar/>
      </div>
    <div className="bg-gradiant px-10 py-20">
      

      <div className="bg-white border shadow-lg rounded-3xl  flex items-center w-fit mx-auto flex-col justify-center py-20  px-5 ">
        <h1 className="text-3xl font-bold p-3 text-center mb-8">
          Réinitialiser le mot de passe
        </h1>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="px-4">Nouveau mot de passe :</label>
          <input
            type="password"
            value={password}
            placeholder="Nouveau mot de passe "
            onChange={handlePasswordChange}
            className={`outline-[#94DA21] rounded-full  bg-[#F6F6F6] w-full px-4 py-3`}
          />

          <label className="px-4">Confirmer nouveau mot de passe :</label>
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            id="password"
            className={`outline-[#94DA21] rounded-full  bg-[#F6F6F6] w-full px-4 py-3`}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <button
            disabled={loading}
            className="relative bg-[#191919] rounded-full text-white lg:text-lg text-xs    uppercase hover:opacity-95 hover:bg-[#94DA21] transition-all disabled:opacity-80 w-full overflow-hidden my-5 py-3
            border duration-300 ease-linear
                  after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0  hover:after:opacity-100 hover:after:scale-[2.5] px-7"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span
             
              style={{ width: hovered ? "100%" : "0%" }}
            ></span>
            {loading ? "Chargement..." : "Réinitialiser le mot de passe"}
          </button>
        </form>

        <p className="text-red-500 mt-5">
          {error ? error || "Quelque chose s'est mal passé!" : ""}
        </p>
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;
