"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

export default function Form({ isActive, handleButtonClick }) {
  const { currentUser } = useSelector((state) => state.user);

  const [building, setBuilding] = useState("maison");
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [floor, setFloor] = useState(0);
  const [furniture, setFurniture] = useState(5);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [weight, setWeight] = useState(50);
  const [fur, setFur] = useState("");
  const [distance, setDistance] = useState(0);
  const [marker1, setMarker1] = useState(null);
  const [marker2, setMarker2] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cities, setCities] = useState([
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Agadir",
    "Taroudant",
    "Fez",
    "Tangier",
    "Tetouan",
    "Al Hoceima",
    " Marrakesh",
    "Meknes",
    "Rabat",
    "Oujda",
    "Kenitra",
    "Tetouan",
    "Temara",
    "Mohammedia",
    "Khouribga",
    "El Jadida",
    "Beni Mellal",
    "Aït Melloul",
    "Nador",
    "Dar Bouazza",
    "Taza",
    "Settat",
    "Berrechid",
    "Khemisset",
    "Inezgane",
    "Ksar El Kebir",
    "Larache",
    "Guelmim",
    "Khenifra",
    "Berkane",
    "Taourirt",
    "Bouskoura",
    "Fquih Ben Salah",
    "Dcheira El Jihadia",
    "Oued Zem",
    "Sidi Slimane",
    "Errachidia",
    "Guercif",
    "Oulad Teima",
    "Ben Guerir",
    "Safi",
    "Tifelt",
    "Lqliaa",
    "Taroudant",
    "Sefrou",
    "Essaouira",
    "Fnideq",
    "Sidi Kacem",
    "Tiznit",
    "Tantan",
    "Ouarzazate",
    "Kenitra",
    "Youssoufia",
    "Lahraouyine",
    "Martil",
    "Ain Harrouda",
    "Skhiratle",
    "Ouazzane",
    "Benslimane",
    "Al Hoceima",
    "M'diq",
    "Hoceima",
    "Sidi Bennour",
    "Midelt",
    "Azrou",
  ]);
  const [filteredDestinations, setFilteredDestinations] = useState([...cities]);
  const [movingWithinCity, setMovingWithinCity] = useState(false);
  const [formData, setFormData] = useState({
    building,
    movingWithinCity,
    start,
    destination,
    floor,
    furniture,
    date,
    hour,
    weight,
    distance,
    phoneNumber,
    price,
  });

  useEffect(() => {
    if (start) {
      setFilteredDestinations(cities.filter((city) => city !== start));
    } else {
      setFilteredDestinations([...cities]);
    }
  }, [start]);
  async function handleClick(e) {
    console.log("Event object:", e);
    const { lngLat } = e;
    console.log("LngLat:", lngLat);
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?access_token=${accessToken}`
      );
      const place = response.data.features[0];
      const address = place.place_name;
      if (!marker1) {
        setMarker1({
          latitude: e.lngLat.lat,
          longitude: e.lngLat.lng,
        });
        setStart(address);
        setFormData({ ...formData, start: address });
      } else if (!marker2) {
        setMarker2({
          latitude: e.lngLat.lat,
          longitude: e.lngLat.lng,
        });
        setDestination(address);
        setFormData({ ...formData, destination: address });
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  }
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const accessToken =
    "pk.eyJ1Ijoia2lyYXR0YXJpayIsImEiOiJjbHRvYzF5bTIwMDJ2MnZudDVzZHhvOWU0In0.sh1DA8r8QNs23Be8v2hAjA";

  async function calculateSecondDistance() {
    if (marker1 && marker2) {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${marker1.longitude},${marker1.latitude};${marker2.longitude},${marker2.latitude}?access_token=pk.eyJ1Ijoia2lyYXR0YXJpayIsImEiOiJjbHRvYzF5bTIwMDJ2MnZudDVzZHhvOWU0In0.sh1DA8r8QNs23Be8v2hAjA`
        );
        const { routes } = response.data;
        if (routes.length > 0) {
          const { distance } = routes[0];
          setDistance(distance);
        }
      } catch (error) {
        setDistance(0);
      }
    }
  }
  calculateSecondDistance();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "building") setBuilding(value);
    else if (name === "floor") setFloor(parseInt(value));
    else if (name === "furniture") setFurniture(parseInt(value));
    else if (name === "date") setDate(value);
    else if (name === "hour") setHour(value);
    else if (name === "weight") setWeight(parseInt(value));
    else if (name === "furnitureList") setFur(value);
    else if (name === "movingWithinCity") setMovingWithinCity(value);
    else if (name === "phoneNumber") setPhoneNumber(value);
    else if (name === "start") {
      setStart(value);
      if (formData.destination) {
        calculateDistance(value, formData.destination);
      }
    } else if (name === "destination") {
      setDestination(value);
      if (formData.start) {
        calculateDistance(formData.start, value);
      }
    }
    setFormData({ ...formData, [name]: value });
    let priceMultiplier = 1;
    if (
      building === "maison" &&
      floor >= 1 &&
      floor <= 5 &&
      furniture >= 5 &&
      furniture <= 260
    ) {
      if (distance > 850000) {
        priceMultiplier = 3;
      } else if (distance >= 750000) {
        priceMultiplier = 2.8;
      } else if (distance >= 650000) {
        priceMultiplier = 2.6;
      } else if (distance >= 550000) {
        priceMultiplier = 2.4;
      } else if (distance >= 450000) {
        priceMultiplier = 2.2;
      } else if (distance >= 350000) {
        priceMultiplier = 2;
      } else if (distance >= 250000) {
        priceMultiplier = 1.9;
      } else if (distance >= 150000) {
        priceMultiplier = 1.7;
      } else if (distance >= 80000) {
        priceMultiplier = 1.5;
      } else {
        priceMultiplier = 1.1;
      }
    } else if (
      building === "local" &&
      floor >= 1 &&
      floor <= 5 &&
      furniture >= 5 &&
      furniture <= 250
    ) {
      if (distance > 850000) {
        priceMultiplier = 4;
      } else if (distance >= 750000) {
        priceMultiplier = 3.8;
      } else if (distance >= 650000) {
        priceMultiplier = 3.6;
      } else if (distance >= 550000) {
        priceMultiplier = 3.4;
      } else if (distance >= 450000) {
        priceMultiplier = 3.2;
      } else if (distance >= 350000) {
        priceMultiplier = 3;
      } else if (distance >= 250000) {
        priceMultiplier = 2.9;
      } else if (distance >= 150000) {
        priceMultiplier = 2.7;
      } else if (distance >= 80000) {
        priceMultiplier = 2.5;
      } else {
        priceMultiplier = 1.5;
      }
    } else if (
      building === "appartement" &&
      floor >= 1 &&
      floor <= 5 &&
      furniture >= 5 &&
      furniture <= 250
    ) {
      if (distance > 850000) {
        priceMultiplier = 2.8;
      } else if (distance >= 750000) {
        priceMultiplier = 2.6;
      } else if (distance >= 650000) {
        priceMultiplier = 2.4;
      } else if (distance >= 550000) {
        priceMultiplier = 2.2;
      } else if (distance >= 450000) {
        priceMultiplier = 2;
      } else if (distance >= 350000) {
        priceMultiplier = 1.9;
      } else if (distance >= 250000) {
        priceMultiplier = 1.7;
      } else if (distance >= 150000) {
        priceMultiplier = 1.5;
      } else if (distance >= 80000) {
        priceMultiplier = 1.2;
      } else {
        priceMultiplier = 0.5;
      }
    } else if (
      building === "entreprise" &&
      floor >= 1 &&
      floor <= 5 &&
      furniture >= 5 &&
      furniture <= 250
    ) {
      if (distance > 850000) {
        priceMultiplier = 5;
      } else if (distance >= 750000) {
        priceMultiplier = 4.8;
      } else if (distance >= 650000) {
        priceMultiplier = 4.6;
      } else if (distance >= 550000) {
        priceMultiplier = 4.4;
      } else if (distance >= 450000) {
        priceMultiplier = 4.2;
      } else if (distance >= 350000) {
        priceMultiplier = 4;
      } else if (distance >= 250000) {
        priceMultiplier = 3.9;
      } else if (distance >= 150000) {
        priceMultiplier = 3.7;
      } else if (distance >= 80000) {
        priceMultiplier = 3.5;
      } else {
        priceMultiplier = 2.5;
      }
    } else if (
      building === "bureau" &&
      floor >= 1 &&
      floor <= 5 &&
      furniture >= 5 &&
      furniture <= 250
    ) {
      if (distance > 850000) {
        priceMultiplier = 3.8;
      } else if (distance >= 750000) {
        priceMultiplier = 3.6;
      } else if (distance >= 650000) {
        priceMultiplier = 3.4;
      } else if (distance >= 550000) {
        priceMultiplier = 3.2;
      } else if (distance >= 450000) {
        priceMultiplier = 3;
      } else if (distance >= 350000) {
        priceMultiplier = 2.8;
      } else if (distance >= 250000) {
        priceMultiplier = 2.6;
      } else if (distance >= 150000) {
        priceMultiplier = 2.5;
      } else if (distance >= 80000) {
        priceMultiplier = 2.3;
      } else {
        priceMultiplier = 1.5;
      }
    }
    const finalPrice = priceMultiplier * 2800;
    setPrice(finalPrice);
  };

  async function calculateDistance(start, destination) {
    try {
      const startResponse = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${start}.json?access_token=${accessToken}`
      );
      const destinationResponse = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${destination}.json?access_token=${accessToken}`
      );

      const startCoords = startResponse.data.features[0].geometry.coordinates;
      const destinationCoords =
        destinationResponse.data.features[0].geometry.coordinates;

      const response = await axios.get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoords[0]},${startCoords[1]};${destinationCoords[0]},${destinationCoords[1]}?access_token=${accessToken}`
      );
      console.log("Direction response:", response.data);
      const { routes } = response.data;
      console.log("Routes:", routes);
      if (routes.length > 0) {
        const { distance } = routes[0];
        setDistance(distance);
      }
    } catch (error) {
      console.error("erreur du calcul de distance", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    formData.price = price;
    formData.distance = (distance / 1000).toFixed(2);
    formData.phoneNumber = phoneNumber;
    console.log(phoneNumber);
    const formDatal = { ...formData, fur, price, phoneNumber };
    formDatal.userId = currentUser._id;
    try {
      await axios.post(
        "https://pfe-backend-sqmm.onrender.com/api/infos",
        formDatal
      );
      toast.success("Envoyé avec succès ");
      setLoading(false);
      setBuilding("maison");
      setStart("");
      setDestination("");
      setFloor(0);
      setFurniture(0);
      setDate("");
      setHour("");
      setWeight(50);
      setFur("");
      setPrice(null);
      setDistance(0);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
        setLoading(false);
      } else {
        toast.error(
          " Quelque chose s'est mal passé ! Veuillez réessayer plus tard."
        );
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4  rounded-3xl">
      {isActive === true ? (
        <div className="flex flex-col  md:flex-row">
          <div className="lg:w-1/2 mb-4 md:mb-0 hidden lg:block  rounded-2xl ">
            <img className="w-full h-auto" src="form.png" alt="Image" />
          </div>

          <section className="max-w-4xl p-6 mx-auto  rounded-md  ">
            <h1 className="text-center font-bold text-3xl text-lime-500 capitalize ">
              Demander un devis:
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="habitat">Type d&apos;habitat</label>
                  <select
                    name="building"
                    value={building}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                    onChange={handleChange}
                  >
                    <option value="maison">Maison</option>
                    <option value="local">Local</option>
                    <option value="appartement">Appartement</option>
                    <option value="bureau">Bureau</option>
                    <option value="entreprise">Entreprise</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="phoneNumber">Numéro de téléphone</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber ? `+212${phoneNumber}` : ""}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.startsWith("212")) {
                        value = value.slice(3);
                      }
                      if (/^\d*$/.test(value) && value.length <= 10) {
                        setPhoneNumber(value);
                      }
                    }}
                    title="enter un numero de telephone valide"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100 focus:border-lime-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label htmlFor="moving-city">
                    Vous demenagez dans la même ville?
                  </label>
                  <select
                    name="movingWithinCity"
                    value={movingWithinCity}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                    onChange={handleChange}
                  >
                    <option value="false">Non</option>
                    <option value="true">Oui</option>
                  </select>
                </div>

                {movingWithinCity === "true" ? (
                  <div className="w-full sm:col-span-2 h-96">
                    <ReactMapGL
                      mapStyle="mapbox://styles/mapbox/streets-v9"
                      mapboxAccessToken={accessToken}
                      width="100%"
                      height="100%"
                      transitionDuration="200"
                      onClick={handleClick}
                      initialViewState={{
                        longitude: -7.508017,
                        latitude: 32.29756,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          padding: "10px",
                        }}
                      >
                        <NavigationControl />
                      </div>
                      <GeolocateControl />
                      {marker1 && (
                        <>
                          <Marker
                            latitude={marker1.latitude}
                            longitude={marker1.longitude}
                            offsetLeft={-20}
                            offsetTop={-10}
                          />
                        </>
                      )}
                      {marker2 && (
                        <>
                          <Marker
                            latitude={marker2.latitude}
                            longitude={marker2.longitude}
                            offsetLeft={-20}
                            offsetTop={-10}
                          />
                        </>
                      )}
                    </ReactMapGL>
                  </div>
                ) : (
                  <>
                    <div>
                      <label htmlFor="departure-address">
                        Adresse de départ
                      </label>
                      <select
                        name="start"
                        value={start}
                        required
                        className="block w-full px-4 py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                        onChange={handleChange}
                      >
                        <option value="">Sélectionner une ville</option>
                        {cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="arrival-address">Adresse d'arrivée</label>
                      <select
                        name="destination"
                        value={destination}
                        required
                        className="block w-full px-4 py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                        onChange={handleChange}
                      >
                        <option value="">Sélectionner une ville</option>
                        {filteredDestinations.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="floors">Nombre d'étages</label>

                  <input
                    type="number"
                    name="floor"
                    min={1}
                    max={5}
                    value={floor}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label htmlFor="furniture">Nombre de meubles</label>
                  <input
                    type="number"
                    name="furniture"
                    min={1}
                    max={250}
                    value={furniture}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label htmlFor="date">Date souhaitée</label>
                  <input
                    type="date"
                    name="date"
                    value={date}
                    min={getTodayDate()}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label htmlFor="time">Heure souhaitée</label>
                  <input
                    type="time"
                    name="hour"
                    min="09:00"
                    max="18:00"
                    value={hour}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label htmlFor="furnitureList">Liste des meubles:</label>
                  <textarea
                    name="furnitureList"
                    value={fur}
                    onChange={handleChange}
                    required
                    placeholder="Entrez la liste de vos meubles ici..."
                    type="textarea"
                    title="entrez la liste de vos meubles"
                    rows="4"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 font-semibold border border-gray-300 rounded-xl bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="cargoWeight">
                    Poids de la cargaison (en kg):
                  </label>
                  <input
                    type="range"
                    name="weight"
                    id="cargoWeight"
                    value={weight}
                    min={50}
                    max={1000}
                    onChange={handleChange}
                    required
                    className="block w-full py-2 mt-2 text-gray-700 font-bold border border-gray-300 rounded-full bg-gray-100  focus:border-lime-500  focus:outline-none focus:ring"
                  />
                  <span>{weight} kg</span>
                </div>
              </div>
              <div className="flex justify-end ">
                <button
                  disabled={loading}
                  type="submit"
                  className=" leading-5 w-full md:w-fit mt-6 md:-mt-8 px-12 py-3 bg-lime-500 text-white font-bold rounded-3xl hover:bg-lime-400 transition-colors duration-200 transform  focus:outline-none focus:bg-gray-600"
                >
                  {loading ? "loading..." : " Envoyer"}
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p className="text-lg">
            Votre compte a été désactivé par l'administrateur.
          </p>
          <p className="mt-2">
            Veuillez contacter l'administrateur pour obtenir une assistance
            supplémentaire.
          </p>
        </div>
      )}
    </div>
  );
}
