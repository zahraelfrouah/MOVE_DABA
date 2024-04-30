"use client";
import { formatDate, truncateTaskName } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Popup";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import Pagination from "../Pagination";
import { getCookie } from "cookies-next";

const Table = ({ isActive }) => {
  const [open, setOpen] = useState(false);
  const [updatedOffers, setUpdatedOffers] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const { currentUser } = useSelector((state) => state.user);

  const updateOffer = (offer) => {
    setOpen(true);
    setUpdatedOffers({ ...offer });
  };
  const token = getCookie("access_token");
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://pfe-backend-sqmm.onrender.com/api/taken-offers`,
        {
          params: {
            token: token,
          },
        }
      );
      setOffers(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Erreur lors de la récupération de vos offres :");
    }
  };
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // Calculate indexes for the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the offers array to get the items for the current page
  const currentItems = offers.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSubmit = async () => {
    try {
      await axios.post(
        `https://pfe-backend-sqmm.onrender.com/api/taken-offers`,
        {
          offerId: updatedOffers._id,
          companyId: currentUser._id,
        },
        {
          params: {
            token: token,
          },
        }
      );
      toast.success("L'offre a été acceptée avec succès.");
      setOpen(false);
      // Refresh offers data
      fetchData();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        setOpen(false);
      } else {
        toast.error(
          "Une erreur s'est produite lors de la prise de l'offre. Veuillez réessayer ultérieurement."
        );
        setOpen(false);
      }
      console.error("Erreur lors de la prise de l'offre :", error);
    }
  };

  return (
    <section>
      {isActive === true ? (
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 :border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 :bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-lg font-normal text-left rtl:text-right text-gray-500 :text-gray-400"
                      >
                        <button className="flex items-center gap-x-3 focus:outline-none">
                          <span>Nom d'utilisateur</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500 :text-gray-400"
                      >
                        Bâtiment
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500 :text-gray-400"
                      >
                        Départ
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500 :text-gray-400"
                      >
                        Destination
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500 :text-gray-400"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500 :text-gray-400"
                      >
                        Poids
                      </th>
                    </tr>
                  </thead>
                  {offers.length > 0 ? (
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentItems.map((offer) => (
                        <tr
                          key={offer?._id}
                          onClick={() => updateOffer(offer)}
                          className="hover:bg-[#cfcfcf] rounded-full bg-[#F6F6F6] cursor-pointer"
                        >
                          <td className="px-4 py-4 text-lg font-medium whitespace-nowrap">
                            <div className="inline px-3 py-1 font-normal rounded-full gap-x-2">
                              {loading ? (
                                <Skeleton width={100} height={20} />
                              ) : (
                                truncateTaskName(offer?.username, 25)
                              )}
                            </div>
                          </td>
                          <td className="px-12 py-4 text-lg font-medium whitespace-nowrap">
                            <div className="inline px-3 py-1 font-normal rounded-full gap-x-2">
                              {loading ? (
                                <Skeleton width={100} height={20} />
                              ) : (
                                truncateTaskName(offer?.building, 25)
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-lg whitespace-nowrap">
                            <div className="inline px-3 py-1 font-normal rounded-full gap-x-2">
                              {loading ? (
                                <Skeleton width={100} height={20} />
                              ) : (
                                truncateTaskName(offer?.start, 25)
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-lg whitespace-nowrap">
                            <div className="inline px-3 py-1 font-normal rounded-full gap-x-2">
                              {loading ? (
                                <Skeleton width={100} height={20} />
                              ) : (
                                truncateTaskName(offer?.destination, 25)
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-lg whitespace-nowrap">
                            <div className="inline px-3 py-1 font-normal rounded-full gap-x-2">
                              {loading ? (
                                <Skeleton width={100} height={20} />
                              ) : (
                                truncateTaskName(offer?.date, 25)
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-lg whitespace-nowrap">
                            <div className="inline px-3 py-1 font-normal rounded-full gap-x-2">
                              {loading ? (
                                <Skeleton width={100} height={20} />
                              ) : (
                                offer?.weight
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      <tr>
                        <td
                          colSpan="5"
                          className="px-4 py-4 text-lg whitespace-nowrap"
                        >
                          <div>
                            <h4 className="text-gray-700 :text-gray-200">
                              {loading ? (
                                <Skeleton width={200} height={20} />
                              ) : (
                                "Pas d'offres disponibles."
                              )}
                            </h4>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p className="text-lg">Votre compte n'est pas encore activé.</p>
          <p className="mt-2">
            Veuillez patienter que votre compte soit activé avant d'accéder à
            cette fonctionnalité. <br /> Pour plus de détails, n'hésitez pas à
            nous contacter au +212 600 000 000 ou en envoyant un message via
            notre page de{" "}
            <a href="./contact" className="text-lime-500">
              contact
            </a>
            .
          </p>
        </div>
      )}
      <Modal open={open} onClose={() => setOpen(false)}>
        {updatedOffers && (
          <div className="flex flex-col gap-4 overflow-auto h-[500px]">
            <h1 className="text-2xl text-[#94D726] text-center">Offre</h1>
            <p className="text-lg font-semibold">
              Utilisateur:{" "}
              <span className="font-normal">{updatedOffers.username}</span>
            </p>
            <p className="text-lg font-semibold">
              Bâtiment:{" "}
              <span className="font-normal">{updatedOffers.building}</span>
            </p>
            <p className="text-lg font-semibold">
              Déplacement en ville:{" "}
              <span className="font-normal">
                {updatedOffers.movingWithinCity ? "Yes" : "No"}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Départ: <span className="font-normal">{updatedOffers.start}</span>
            </p>
            <p className="text-lg font-semibold">
              Destination:{" "}
              <span className="font-normal">{updatedOffers.destination}</span>
            </p>
            <p className="text-lg font-semibold">
              Étage: <span className="font-normal">{updatedOffers.floor}</span>
            </p>
            <p className="text-lg font-semibold">
              Nombre de meubles:{" "}
              <span className="font-normal">{updatedOffers.furniture}</span>
            </p>
            <p className="text-lg font-semibold">
              Date:{" "}
              <span className="font-normal">
                {formatDate(updatedOffers.date)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Heure: <span className="font-normal">{updatedOffers.hour}</span>
            </p>
            <p className="text-lg font-semibold">
              Poids: <span className="font-normal">{updatedOffers.weight}</span>
            </p>
            <p className="text-lg font-semibold">
              Distance:{" "}
              <span className="font-normal">{updatedOffers.distance}</span>
            </p>
            <p className="text-lg font-semibold">
              Les meubles:{" "}
              <span className="font-normal">{updatedOffers.fur}</span>
            </p>
            <p className="text-lg font-semibold">
              Prix: <span className="font-normal">{updatedOffers.price}DH</span>
            </p>
            <hr className="border-t border-gray-400" />
            <div className="flex justify-center">
              <button
                className="border border-gray-300 rounded-lg py-1.5 px-10  bg-[#94D726] hover:bg-lime-300 text-white"
                onClick={handleSubmit}
              >
                Prendre
              </button>
              <button
                className="border border-gray-300 rounded-lg py-1.5 px-10  bg-[#94D726] hover:bg-lime-300 text-white ml-4"
                onClick={() => setOpen(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </Modal>
      {isActive && offers.length > 10 && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={offers.length}
          paginate={paginate}
        />
      )}
    </section>
  );
};

export default Table;
