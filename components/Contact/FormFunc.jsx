"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  contactFailure,
  contactStart,
  contactSuccess,
} from "@/redux/contactSlice";
import { toast } from "react-hot-toast";

const FormFunc = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");
  const { loading, error } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  useEffect(() => {
    // Clear error message on component mount
    dispatch(contactFailure(null));
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear the error message when the user starts typing
    setErrors({ ...errors, [e.target.id]: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form inputs before submitting
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      dispatch(contactStart());

      // Use Axios instead of fetch
      const response = await axios.post(
        "https://pfe-backend-sqmm.onrender.com/api/auth/contact-form",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      dispatch(contactSuccess(data));
      e.target.reset();
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        subject: "",
        message: "",
      });
      toast.success("Votre message a été envoyé avec succès.");
    } catch (error) {
      dispatch(contactFailure(error.message));
      console.log(error.message);
      toast.error(
        "Votre message n'a pas été envoyé. Veuillez réessayer plus tard"
      );
    }
  };
  const validateForm = (data) => {
    const errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = "Le nom complet est requis.";
    }
    if (!data.email.trim()) {
      errors.email = "L'email est requis.";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Adresse email invalide.";
    }
    if (data.phone.trim()) {
      if (!isValidPhone(data.phone)) {
        errors.phone = "Numéro de téléphone invalide.";
      }
    }
    if (!data.subject.trim()) {
      errors.subject = "L'objet est requis.";
    } else if (data.subject.trim().length < 5) {
      errors.subject = "L'objet doit comporter au moins 5 caractères.";
    }
    if (!data.message.trim()) {
      errors.message = "Le message est requis.";
    } else if (data.message.trim().length < 15) {
      errors.message = "Le message doit comporter au moins 15 caractères.";
    }

    return errors;
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^(?:\+212|0)([5-7]\d{8})$/;
    return phoneRegex.test(phone);
  };
  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className="md:col-span-8 p-10">
      {msg && <p>{msg}</p>}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="fullName"
            className=" text-neutral-500 text-s mb-2 ml-3"
          >
            Nom complet
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-lime-500 focus:bg-white"
            id="fullName"
            onChange={handleChange}
            type="text"
            placeholder="Tapez votre nom..."
          />
          {errors.fullName && (
            <p className="text-red-500 ml-3">{errors.fullName}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="email"
            className="block tracking-wide text-neutral-500 text-s ml-3"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 leading-tight focus:outline-lime-500 focus:bg-white "
            type="email"
            id="email"
            onChange={handleChange}
            placeholder="Tapez votre email..."
          />
          {errors.email && <p className="text-red-500 ml-3">{errors.email}</p>}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="phone"
            className=" tracking-wide text-neutral-500 text-s mb-2 ml-3"
          >
            Téléphone
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-lime-500 focus:bg-white"
            type="tel"
            id="phone"
            onChange={handleChange}
            placeholder="Tapez votre numéro..."
          />
          {errors.phone && <p className="text-red-500 ml-3">{errors.phone}</p>}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            htmlFor="city"
            className="block tracking-wide text-neutral-500 text-s ml-3"
          >
            Ville
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 leading-tight focus:outline-lime-500 focus:bg-white "
            type="text"
            onChange={handleChange}
            id="city"
            placeholder="Tapez votre ville..."
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            htmlFor="subject"
            className="block tracking-wide text-neutral-500 text-s ml-3 mb-2"
          >
            Objet
          </label>
          <input
            onChange={handleChange}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-lime-500 focus:bg-white"
            type="text"
            id="subject"
            placeholder="Tapez votre sujet..."
          />
          {errors.subject && (
            <p className="text-red-500 ml-3">{errors.subject}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block tracking-wide text-neutral-500 text-s ml-3 mb-2"
            htmlFor="message"
          >
            Votre message
          </label>
          <textarea
            rows="10"
            onChange={handleChange}
            id="message"
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-lime-500 focus:bg-white "
            placeholder="Tapez votre message ici..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 ml-3">{errors.message}</p>
          )}
        </div>
        <div className="flex justify-center w-full px-3">
          <button
            disabled={loading}
            className="shadow bg-lime-500 hover:bg-lime-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 mt-2 rounded-3xl"
            type="submit"
          >
            {loading ? "Loading..." : "Envoyer"}
          </button>
        </div>
        {error && (
          <p className="text-red-500 ml-3">
            {"Quelque chose s'est mal passé...."}
          </p>
        )}
      </div>
    </form>
  );
};

export default FormFunc;
