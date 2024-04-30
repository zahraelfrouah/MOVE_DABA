"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Modal from "../Popup";
import { useSelector } from "react-redux";
import { formatDate } from "@/utils/utils";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-hot-toast";
import { getCookie } from "cookies-next";

const Offers = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [offer, setOffer] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);

  const updateOffer = (offer) => {
    setOpen(true);
    setOffer({ ...offer });
  };
  const token = getCookie("access_token");

  const fetchData = async () => {
    try {
      let res;
      if (user.role === "enterprise") {
        res = await axios.get(
          `https://pfe-backend-sqmm.onrender.com/api/taken-offers/${currentUser._id}`,
          {
            params: {
              token: token,
            },
          }
        );
      } else {
        res = await axios.get(
          `https://pfe-backend-sqmm.onrender.com/api/infos/${currentUser._id}`,
          {
            params: {
              token: token,
            },
          }
        );
      }

      setOffers(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Erreur lors de la récupération de vos demandes");
    }
  };
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDeleteAndDiscardfunc = () => {
    toast((t) => (
      <div className="p-4">
        <p>
          {" "}
          Êtes-vous sûr de vouloir{" "}
          {user.role === "enterprise" ? "annuler" : "supprimer"} cette offre ?
        </p>
        <div className="flex justify-center items-center gap-5">
          <button
            className="text-red-500  px-2 py-1"
            onClick={() => {
              handleDeleteAndDiscard();
              toast.dismiss();
            }}
          >
            {user.role === "enterprise" ? "annuler" : "supprimer"}
          </button>
          <button onClick={() => toast.dismiss()}>Fermer</button>
        </div>
      </div>
    ));
  };

  const handleDeleteAndDiscard = async () => {
    try {
      if (user.role === "enterprise") {
        await axios.put(
          `https://pfe-backend-sqmm.onrender.com/api/infos/discard/${offer?._id}`
        );
      } else {
        await axios.delete(
          `https://pfe-backend-sqmm.onrender.com/api/infos/${offer?._id}`
        );
      }
      fetchData();
      toast.success(
        `${user.role === "enterprise" ? "annulée" : "supprimée"} avec succès.`
      );
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error(
        "Quelque chose s'est mal passé, veuillez réessayer ultérieurement."
      );
    }
  };

  return (
    <div>
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="relative group overflow-hidden p-8 rounded-xl bg-[#F3F3F3] border border-gray-200 "
            >
              <Skeleton height={150} />
              <Skeleton height={20} width={200} className="mt-4" />
              <Skeleton height={20} width={150} className="mt-1" />
              <Skeleton height={20} width={100} className="mt-1" />
              <Skeleton height={20} width={100} className="mt-1" />
              <Skeleton height={40} width={100} className="mt-4" />
            </div>
          ))}
        </div>
      ) : offers && offers.length === 0 ? (
        <p className="text-lg text-center text-gray-700">
          {user?.role === "enterprise"
            ? "Vous n'avez pas d'offres en cours."
            : "  Vous n'avez pas encore fait de demandes."}
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          {offers?.map((offer) => (
            <div
              key={offer?._id}
              onClick={() => updateOffer(offer)}
              className="relative group overflow-hidden p-8 rounded-xl bg-[#F3F3F3] border border-gray-200 "
            >
              <div
                aria-hidden="true"
                className={`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 ${
                  offer.takenBy ? "bg-blue-300" : "bg-lime-300"
                }     blur-2xl opacity-25 `}
              ></div>
              <div className="relative">
                <h1 className="text-xl text-center font-semibold text-black">
                  {offer?.building}
                </h1>
                <div className="mt-2  text-center pb-4 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 ">{offer?.start}</p>
                </div>
                <div className="mt-2  text-center pb-4 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 ">{offer?.date}</p>
                </div>
                <div className="mt-2  text-center pb-4 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 ">{offer?.fur}</p>
                </div>

                <div className="w-full gap-3 -mb-8 pb-4    border-gray-200 ">
                  <button
                    href={"/"}
                    onClick={() => updateOffer(offer)}
                    className=" w-fit mx-auto flex gap-3  items-center"
                  >
                    <p className="text-lg font-semibold">Voir plus </p>
                    <Image
                      src="/Arrow 1.png"
                      className="mt-1"
                      width={25}
                      height={2}
                      alt=","
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Modal open={open} onClose={() => setOpen(false)}>
        {offer && (
          <div className="flex flex-col gap-4 overflow-auto h-[500px]">
            <h1 className="text-2xl text-[#94D726] text-center">
              Votre Demande{" "}
              <span className="text-xs text-black">
                {" "}
                <br />
                *Défilez pour voir plus d'informations*
              </span>
            </h1>
            <p title="Numéro de demande" className="text-lg font-semibold">
              NDD: <span className="font-normal">#{offer?.purchaseOrder}</span>
            </p>
            <p title="Numero telephone" className="text-lg font-semibold">
              NT: <span className="font-normal">{offer?.phoneNumber}</span>
            </p>
            <p className="text-lg font-semibold">
              Utilisateur: <span className="font-normal">{offer.username}</span>
            </p>
            <p className="text-lg font-semibold">
              Bâtiment: <span className="font-normal">{offer.building}</span>
            </p>
            <p className="text-lg font-semibold">
              Déplacement en ville:{" "}
              <span className="font-normal">
                {offer.movingWithinCity ? "Oui" : "Non"}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Départ: <span className="font-normal">{offer.start}</span>
            </p>
            <p className="text-lg font-semibold">
              Destination:{" "}
              <span className="font-normal">{offer.destination}</span>
            </p>
            <p className="text-lg font-semibold">
              Étage: <span className="font-normal">{offer.floor}</span>
            </p>
            <p className="text-lg font-semibold">
              Nombre de meubles:{" "}
              <span className="font-normal">{offer.furniture}</span>
            </p>
            <p className="text-lg font-semibold">
              Date:{" "}
              <span className="font-normal">{formatDate(offer.date)}</span>
            </p>
            <p className="text-lg font-semibold">
              Heure: <span className="font-normal">{offer.hour}</span>
            </p>
            <p className="text-lg font-semibold">
              Poids: <span className="font-normal">{offer.weight}</span>
            </p>
            <p className="text-lg font-semibold">
              Distance: <span className="font-normal">{offer.distance}</span>
            </p>
            <p className="text-lg font-semibold">
              Les meubles: <span className="font-normal">{offer.fur}</span>
            </p>
            <p className="text-lg font-semibold">
              Prix: <span className="font-normal">{offer.price}DH</span>
            </p>
            <hr className="border-t border-gray-400" />
            <div className="flex justify-center">
              <button
                className=" rounded-full py-2 px-10 bg-[#94D726] hover:bg-lime-300 text-white ml-4"
                onClick={() => setOpen(false)}
              >
                Fermer
              </button>
              <button
                className=" rounded-full py-2 px-10 bg-[#d72626] hover:bg-red-300 text-white ml-4"
                onClick={handleDeleteAndDiscardfunc}
              >
                {user.role === "enterprise" ? "Discard" : "Delete"}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Offers;
