"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import OAuth from "@/components/Oauth";
import { toast } from "react-hot-toast";
import { getCookie, setCookie } from "cookies-next";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "@/redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import ForgotPassword from "@/components/ForgotPassword";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [hovered, setHovered] = useState(false);
  const [forgotPassword, setforgotPassword] = useState(false);

  const router = useRouter();
  const { loading, error, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    // Password validation
    if (!formData.password || formData.password.length < 8) {
      errors.password = "Le mot de passe doit comporter au moins 8 caractères.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const token = getCookie("access_token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (token && currentUser) {
      router.push("/");
      return;
    }
    if (!validateForm()) {
      return;
    }

    try {
      dispatch(signInStart());

      // Use Axios instead of fetch
      const response = await axios.post(
        "https://pfe-backend-sqmm.onrender.com/api/auth/signin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      dispatch(signInSuccess(data));
      setCookie("access_token", data.token, {
        maxAge: 60 * 6 * 24,
      });
      toast.success("Connexion réussie.");
      router.push("/client");
    } catch (error) {
      dispatch(signInFailure(error));
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-[#191919]">
        <Navbar />
      </div>
      {forgotPassword ? (
        <ForgotPassword
          setforgotPassword={setforgotPassword}
          setHovered={setHovered}
          hovered={hovered}
        />
      ) : (
        <div className=" bg-white border shadow-lg rounded-3xl  flex items-center w-fit mx-auto my-20 ">
          <div className="  max-w-xl  lg:px-24  px-5  py-28    rounded-xl ">
            <Image
              src="/logodark.png"
              alt="logo"
              width={290}
              height={127}
              className="mx-auto pb-20"
            />
            <p className="text-4xl font-medium  text-center">
              <span className="text-[#94DA21]">Content de vous revoir</span>
            </p>
            <h1 className="text-3xl font-semibold  p-3 text-center my-5">
              Se connecter
            </h1>
            <hr className="bordeer border-[#717171]  my-10" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label htmlFor="email" className="px-4">
                Adresse e-mail
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                className={`  outline-[#94DA21] rounded-full py-3 px-4 bg-[#F6F6F6] ${
                  errors.email ? "border-red-500" : ""
                }`}
                onChange={handleChange}
                value={formData.email || ""}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <label htmlFor="password" className="px-4">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="Mot de passe..."
                id="password"
                className={`outline-[#94DA21] rounded-full py-3 px-4 bg-[#F6F6F6] ${
                  errors.password ? "border-red-500" : ""
                }`}
                onChange={handleChange}
                value={formData.password || ""}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <button
                disabled={loading}
                className="relative bg-[#191919] rounded-full text-white text-lg p-3  uppercase hover:opacity-95 hover:bg-[#94DA21] transition-all disabled:opacity-80 w-full overflow-hidden my-5  
                 border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear  after:top-0 after:left-0 hover:after:opacity-100 hover:after:scale-[2.5]  border-transparent 
                    "
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3 capitalize">
                    <Spinner /> chargement...
                  </span>
                ) : (
                  "Connecter"
                )}
              </button>
            </form>
            {token && currentUser ? null : <OAuth />}
            <div className="flex gap-2 mt-5">
              <p className="text-lg self-center text-[#313538]">
                Nouvel utilisateur?
              </p>
              <Link href="/sign-up">
                <span className=" text-xl text-lime-500">Inscription</span>
              </Link>
            </div>
            <button
              className={`text-red-600 underline  transition text-lg duration-150 ease-in-out hover:text-slute-600 focus:text-blue-600 active:text-blue-700`}
              onClick={() => setforgotPassword(true)}
            >
              Mot de passe oublié ?
            </button>

            <p className="text-red-500 mt-5">
              {error
                ? error?.response?.data?.message ||
                  "Quelque chose s'est mal passé!"
                : ""}
            </p>
          </div>

          <div className=" w-fit  h-fit rounded-xl hidden lg:block ">
            <img src="/signin.png" alt="img" />
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
