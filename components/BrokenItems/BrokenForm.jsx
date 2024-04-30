"use client";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { app } from "../../firebase";
import Image from "next/image";
import Stepper from "./Stepper";
import {
  brokenFormFailure,
  brokenFormStart,
  brokenFormSuccess,
} from "@/redux/brokenSlice";

const BrokenrForm = () => {
  const [step, setStep] = useState(1);
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [errors, setErrors] = useState({});
  const { loading, error } = useSelector((state) => state.brokenForm);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    contact: "",
    dateService: "",
    description: "",
    email: "",
    fullName: "",
    moneyValue: "",
    orderNumber: "",
    phone: "",
    damageImage: "",
  });

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },

      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, damageImage: downloadURL })
        );
      }
    );
  };
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep = () => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  const nextStep = () => {
    // Validate current step's data
    const isValidStep = validateStep();

    if (isValidStep) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const validateForm = (data) => {
    const errors = {};

    if (step === 1) {
      if (!data.email.trim()) {
        errors.email = "Un e-mail est requis.";
      } else if (!isValidEmail(data.email)) {
        errors.email = "Adresse e-mail invalide.";
      }

      if (!data.phone.trim()) {
        errors.phone = "Le numéro de téléphone est requis.";
      } else if (!isValidPhone(data.phone)) {
        errors.phone = "Numéro de téléphone invalide.";
      }

      if (!data.fullName.trim()) {
        errors.fullName = "Le nom complet est requis.";
      }
    } else if (step === 2) {
      if (!data.contact.trim()) {
        errors.contact = "La méthode de contact est requise.";
      }
      if (!data.dateService.trim()) {
        errors.dateService = "La date de service est requise.";
      } else {
        const today = new Date();
        const selectedDate = new Date(data.dateService);

        if (selectedDate >= today) {
          errors.dateService =
            "La date de service doit être antérieure à la date d'aujourd'hui.";
        }
      }
      if (!data.orderNumber.trim()) {
        errors.orderNumber = "Le numéro de commande est requis.";
      }
    } else {
      if (!data.description.trim()) {
        errors.description = "Une description est requise.";
      }

      if (!data.moneyValue.trim()) {
        errors.moneyValue = "La valeur estimée des dommages est requise.";
      }
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateStep();
    if (!validationErrors) {
      return; // Return true if no errors
    }
    console.log(formData);
    try {
      dispatch(brokenFormStart());

      const orderNumberExists = await checkOrderNumberExists(
        formData.orderNumber
      );

      if (!orderNumberExists) {
        toast.error("Le numéro de commande n'existe pas.");
        dispatch(brokenFormFailure("Le numéro de commande n'existe pas"));
        return;
      }
      // send data to server
      const res = await axios.post(
        "https://pfe-backend-sqmm.onrender.com/api/broken-items",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;

      dispatch(brokenFormSuccess(data));
      nextStep();

      e.target.reset();
      setFormData({
        causeDamage: "",
        contact: "",
        dateService: "",
        description: "",
        email: "",
        extentDamage: "",
        fullName: "",
        moneyValue: "",
        orderNumber: "",
        phone: "",
        damageImage: "",
      });
    } catch (error) {
      dispatch(brokenFormFailure(error.request.response));
      toast.error(
        "Quelque chose s'est mal passé. Merci de réessayer plus tard."
      );
    }
  };
  const checkOrderNumberExists = async (orderNumber) => {
    try {
      const res = await axios.get(
        `https://pfe-backend-sqmm.onrender.com/api/broken-items/${orderNumber}`
      );
      console.log(res.data);
      return res.data !== null;
    } catch (error) {
      console.error(
        "Erreur lors de la vérification du numéro de commande:",
        error
      );
      return false;
    }
  };
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 ">
            <Stepper steps={step} activeStep={step} />
            <div className="flex justify-center items-center flex-col gap-8">
              <div className=" ">
                <div className="  flex flex-col md:flex-row gap-5 justify-between   md:gap-20  ">
                  <h2 className="text-lg text-nowrap"> Votre nom complet</h2>
                  <input
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                    placeholder="John..."
                    className="border outline-[#94DA21] rounded-full  p-2 bg-[#F6F6F6] w-full px-6 py-2"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 ml-3">{errors.fullName}</p>
                )}
              </div>

              <div>
                <div className="  flex flex-col md:flex-row gap-5 justify-between   md:gap-20   ">
                  <h2 className="text-lg text-nowrap   ">
                    Votre numéro de téléphone
                  </h2>
                  <input
                    type="number"
                    onChange={handleChange}
                    value={formData.phone}
                    name="phone"
                    placeholder="07-00-00-00-00"
                    className="border outline-[#94DA21] rounded-full w-full p-2 bg-[#F6F6F6]  px-6 py-2"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 ml-3">{errors.phone}</p>
                )}
              </div>
              <div>
                <div className="  flex flex-col md:flex-row gap-5 justify-between   md:gap-20  ">
                  <h2 className="text-lg text-nowrap   ">
                    Votre adresse e-mail
                  </h2>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData?.email}
                    placeholder="John.doe@gmail.com"
                    className="border outline-[#94DA21] rounded-full w-full p-2 bg-[#F6F6F6]  px-6 py-2"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 ml-3">{errors.email}</p>
                )}
              </div>

              <button
                onClick={nextStep}
                className="bg-[#94DA21]  text-white py-2 px-4 rounded-full   hover:bg-lime-300 focus:shadow-outline focus:outline-none  "
              >
                CONTINUER
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <Stepper steps={step} activeStep={step} />
            <div className="flex justify-center items-center flex-col gap-8">
              <div>
                <div className="  flex flex-col md:flex-row gap-5 justify-between   md:gap-8 items-center ">
                  <h2 className="text-lg md:text-nowrap   ">
                    Comment devrions-nous vous contacter ?
                  </h2>
                  <div className="flex flex-col">
                    <select
                      name="contact"
                      onChange={handleChange}
                      value={formData?.contact}
                      id="contact-select"
                      className="border outline-[#94DA21] rounded-full   bg-[#F6F6F6] w-full px-3 py-2 "
                    >
                      <option value="">--Veuillez choisir une option--</option>
                      <option value="Phone Number">Numéro de téléphone</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div />
                </div>
                {errors?.contact && (
                  <p className="text-red-500 ml-3">{errors?.contact}</p>
                )}
              </div>
              <div>
                <div className="  flex flex-col md:flex-row gap-5 justify-between   md:gap-20  ">
                  <h2 className="text-lg text-nowrap">
                    Votre numéro de commande
                  </h2>
                  <input
                    type="text"
                    name="orderNumber"
                    onChange={handleChange}
                    value={formData?.orderNumber}
                    placeholder="#4349u32r243rc"
                    className="border outline-[#94DA21] rounded-full  bg-[#F6F6F6] w-full px-6 py-2  "
                  />
                </div>
                {errors?.orderNumber && (
                  <p className="text-red-500 ml-3">{errors?.orderNumber}</p>
                )}
              </div>
              <div>
                <div className="  flex flex-col md:flex-row gap-5 justify-between   md:gap-20   ">
                  <h2 className="text-lg text-nowrap   ">Date du service</h2>
                  <input
                    type="date"
                    name="dateService"
                    onChange={handleChange}
                    value={formData.dateService ? formData.dateService : ""}
                    placeholder="12/08/2023"
                    className="border outline-[#94DA21] rounded-full    bg-[#F6F6F6] w-full px-16  py-2 "
                  />
                </div>
                {errors?.dateService && (
                  <p className="text-red-500 ml-3">{errors?.dateService}</p>
                )}
              </div>
              <div>
                <div className="flex justify-evenly  gap-20">
                  <button
                    onClick={prevStep}
                    className="relative  py-2 px-4  w-[60px] bg-[#94DA21]  text-white  rounded-full hover:bg-lime-300 focus:shadow-outline focus:outline-none "
                  >
                    <Image
                      src="/arrow.png"
                      alt="left arrow"
                      width="23"
                      height="23"
                      className=" absolute  right-2 top-0  m-2  "
                    />
                  </button>
                  <button
                    onClick={nextStep}
                    className="bg-[#94DA21]  text-white py-2 px-4 rounded-full hover:bg-lime-300 focus:shadow-outline focus:outline-none"
                  >
                    CONTINUER
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <Stepper steps={step} activeStep={step} />

            <div className="flex justify-center items-center flex-col gap-8">
              <div>
                <div className="  flex flex-col md:flex-row gap-5 justify-between   md:gap-8  ">
                  <h2 className="text-lg text-nowrap   ">
                    Description des dommages
                  </h2>
                  <textarea
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={formData?.description}
                    placeholder="Entrez la description : Max 300 mots"
                    className="border outline-[#94DA21] rounded-2xl w-full p-2 bg-[#F6F6F6]  px-6 py-5   "
                  />
                </div>
                {errors?.description && (
                  <p className="text-red-500 ml-3">{errors?.description}</p>
                )}
              </div>

              <div>
                <div className="  flex flex-col md:flex-row gap-5 justify-between   md:gap-8  ">
                  <h2 className="text-lg text-nowrap   ">
                    Valeur estimée des dommages
                  </h2>

                  <input
                    type="text"
                    name="moneyValue"
                    placeholder="0MAD"
                    value={formData?.moneyValue}
                    onChange={handleChange}
                    className="border outline-[#94DA21] rounded-full  w-full p-2 bg-[#F6F6F6] px-4 py-2"
                  />
                </div>
                {errors?.moneyValue && (
                  <p className="text-red-500 ml-3">{errors?.moneyValue}</p>
                )}
              </div>
              <div className="  flex flex-col gap-8  ">
                <h2 className="text-lg text-nowrap   ">
                  Photo des dommages (facultatif)
                </h2>

                <div className="flex  items-center justify-center bg-gray-100 font-sans">
                  <label
                    htmlFor="damageImage"
                    onClick={() => fileRef.current.click()}
                    className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
                  >
                    {formData?.damageImage ? (
                      <img
                        src={formData?.damageImage}
                        alt=""
                        className="w-60 h-60"
                      />
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                          Choisir un fichier
                        </h2>
                        <p className="mt-2 text-gray-500 tracking-wide">
                          Téléchargez ou faites glisser et déposez votre fichier
                          SVG, PNG, JPG ou GIF.{" "}
                        </p>
                      </>
                    )}
                    <input
                      type="file"
                      ref={fileRef}
                      hidden
                      id="damageImage"
                      name="damageImage"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                </div>
                <p className="text-sm self-center">
                  {imageError ? (
                    <span className="text-red-700">
                      Erreur lors du téléchargement de l'image (la taille du
                      fichier doit être inférieure à 4 Mo)
                    </span>
                  ) : imagePercent > 0 && imagePercent < 100 ? (
                    <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
                  ) : imagePercent === 100 ? (
                    <span className="text-green-700">
                      Image téléchargée avec succès
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div>
                <div className="flex justify-evenly  gap-20">
                  <button
                    onClick={prevStep}
                    className="relative  py-2 px-4  w-[60px] bg-[#94DA21]  text-white  rounded-full  hover:bg-lime-300 focus:shadow-outline focus:outline-none"
                  >
                    <Image
                      src="/arrow.png"
                      alt="left arrow"
                      width="23"
                      height="23"
                      className=" absolute  right-2 top-0  m-2 "
                    />
                  </button>
                  <button
                    disabled={loading}
                    // onClick={nextStep}
                    className="bg-[#94DA21]  text-white rounded-full  px-6 py-2 hover:bg-lime-300 focus:shadow-outline focus:outline-none"
                  >
                    {loading ? "Loading..." : " SUBMIT"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      // after submite
      default:
        return (
          <div className="  rounded px-8 pt-6 pb-8 ">
            <Image
              src="/Frame.png"
              alt=""
              width={220}
              height={220}
              className="mx-auto"
            />
            <h1 className="text-2xl text-center font-bold text-[#94DA21] mb-10">
              Nous vous contacterons bientôt!
            </h1>
            <p className="text-center  mb-5">
              Vous avez soumis avec succès votre rapport pour des biens cassés
              ou
              <br />
              endommagés. Nous nous excusons pour tout inconvénient que cela
              aurait pu vous causer et
              <br /> nous apprécions votre coopération.
            </p>
            <p className="text-center mb-5">
              Si vous avez des questions ou des préoccupations, n'hésitez pas à
              nous contacter au 0700000000 ou par e-mail à
              info@movedabacompany.com. Nous sommes toujours heureux de vous
              aider avec vos besoins en déménagement.
            </p>
            <h3 className="text-center ">
              Merci d'avoir choisi Move Daba.
              <br /> Nous apprécions vos commentaires et votre soutien!
            </h3>
          </div>
        );
    }
  };
  // container
  return (
    <div>
      <div className="max-w-xl mx-auto mt-8 shadow-2xl  ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl px-8 pt-6 pb-8 max-w-screen-lg mx-auto p-5 z-40 absolute top-[650px]  md:top-[480px] left-0 right-0 h-fit"
        >
          {renderStepContent()}
        </form>
      </div>
    </div>
  );
};

export default BrokenrForm;
