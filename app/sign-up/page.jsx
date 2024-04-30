"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import OAuth from "@/components/Oauth";
import Navbar from "@/components/Navbar";
import { isAuthenticated } from "@/utils/utils";
// import OAuth from "../components/OAuth";
// import victor from "../assets/singup.jpg";
import { toast } from "react-hot-toast";
import Spinner from "@/components/Spinner";
import { getCookie } from "cookies-next";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const router = useRouter();
  const token = getCookie("access_token");

  if (token && isAuthenticated()) {
    return router.push("/");
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Veuillez saisir une adresse e-mail valide.";
    }

    // Password validation
    if (!formData.password || formData.password.length < 8) {
      errors.password = "Le mot de passe doit comporter au moins 8 caractères.";
    }

    // Username validation
    if (!formData.username) {
      errors.username = "Veuillez saisir un nom d'utilisateur.";
    }
    // role validation
    if (!formData.role) {
      errors.role = "Ce champ est obligatoire.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Exit early if form validation fails
    }

    try {
      setLoading(true);
      setError(false);
      const response = await axios.post(
        "https://pfe-backend-sqmm.onrender.com/api/auth/signup",
        formData
      );
      setLoading(false);
      console.log();
      setMsg(response.data.message);
      toast.success(response.data.message);
      router.push("/sign-in");
      if (response.data.success === false) {
        setError(true);
        toast.error("Quelque chose s'est mal passé. Veuillez réessayer.");
        return;
      }
      router.push("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
      toast.error("Quelque chose s'est mal passé. Veuillez réessayer.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-[#191919]">
        <Navbar />
      </div>

      <div className=" bg-white border shadow-lg rounded-3xl  flex items-center w-fit h-fit mx-auto my-20">
        <div className="  max-w-xl px-20  py-20   rounded-xl">
          <Image
            src="/logodark.png"
            alt="logo"
            width={290}
            height={127}
            className="mx-auto pb-10"
          />
          <p className="text-4xl font-medium  text-center">
            {" "}
            <span className="text-[#94DA21]">Créer un compte</span>
          </p>
          <h1 className="text-3xl font-semibold  p-3 text-center my-5">
            Inscription
          </h1>
          <hr className="bordeer border-[#717171]  my-10" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="password" className="px-4">
              Selectionnez votre rôle
            </label>
            <select
              onChange={handleChange}
              value={formData?.role}
              id="role"
              className="border outline-[#94DA21] rounded-full   bg-[#F6F6F6] w-full px-3 py-2 "
            >
              <option value="">--Veuillez choisir une option--</option>
              <option value="user">Client</option>
              <option value="enterprise">Entreprise</option>
            </select>
            {errors.role && <p className="text-red-500">{errors.role}</p>}
            <label htmlFor="username" className="px-4">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              id="username"
              className={`outline-[#94DA21] rounded-full py-3 px-4 bg-[#F6F6F6] ${
                errors.username ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}
            <label htmlFor="email" className="px-4">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className={`outline-[#94DA21] rounded-full py-3 px-4 bg-[#F6F6F6] ${
                errors.email ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />

            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <label htmlFor="password" className="px-4">
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="Mot de passe"
              id="password"
              className={`outline-[#94DA21] rounded-full py-3 px-4 bg-[#F6F6F6] ${
                errors.password ? "border-red-500" : ""
              }`}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
            <button
              disabled={loading}
              className="relative bg-[#191919] rounded-full text-white text-lg p-3  uppercase hover:opacity-95 hover:bg-[#94DA21] transition-all disabled:opacity-80 w-full overflow-hidden my-5 
              border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0  hover:after:opacity-100 hover:after:scale-[2.5]  
                   "
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3 capitalize">
                  <Spinner /> Chargement...
                </span>
              ) : (
                "Inscription"
              )}
            </button>
            {formData?.role && <OAuth role={formData?.role} />}
          </form>
          <div className="flex gap-2 mt-5">
            <p className="text-lg self-center text-[#313538]">
              Vous avez un compte?
            </p>
            <Link href="/sign-in">
              <span className=" text-xl text-lime-500">Connexion</span>
            </Link>
          </div>
          <p className="text-red-500 mt-5">
            {error && "quelque chose s'est mal passé!"}
          </p>
          {msg && <p className=" text-xl ">{msg}</p>}
        </div>
        <div className="w-fit  h-fit  rounded-xl hidden lg:block ">
          <img src="/signin.png" alt="img" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
