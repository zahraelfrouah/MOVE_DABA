"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
// import logo from "../assets/logo copy.png";

const VerifyEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  console.log(token);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchVerifyEmail = async () => {
      if (token) {
        try {
          const response = await axios.get(
            `https://pfe-backend-sqmm.onrender.com/api/auth/verify-email?token=${token}`
          );

          if (response.status === 200) {
            setMessage("L'adresse e-mail a été vérifiée avec succès !");
            // Redirect to the home page after successful verification
            setTimeout(() => {
              router.push("/sign-in");
            }, 2000);
          } else {
            setMessage("La vérification de l'email a échoué.");
          }
        } catch (error) {
          setMessage(
            "Une erreur s'est produite lors de la vérification de l'email."
          );
          console.log(error.message);
        }
      }
    };

    fetchVerifyEmail();
  }, [router.query]);

  return (
    <div>
      <div className="bg-[#191919]">
        <Navbar/>
      </div>
    <Suspense>
      <div className="relative flex flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white ">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
            {/* <img src={logo} alt="task flow logo" className="w-72" /> */}
            Vérification d'email
          </h2>
          <p className="mb-2 text-lg text-zinc-500">
            Nous sommes heureux que vous soyez avec nous. <br />
            <span className="font-medium text-lime-500">{message}</span>.
          </p>
          <button
            type="button"
            className="relative bg-[#94DA21] rounded-full hover:text-white text-black text-lg p-3  uppercase hover:opacity-95 hover:bg-[#191919] transition-all disabled:opacity-80 w-full overflow-hidden my-5 
            border duration-300 ease-linear
                  after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0  hover:after:opacity-100 hover:after:scale-[2.5]"
          >
            Ouvrez l'application   →
          </button>
        </div>
      </div>
    </Suspense>
    </div>
  );
};

export default VerifyEmail;
