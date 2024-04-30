"use client";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  signOut,
} from "@/redux/user/userSlice";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

const Profile = ({ user }) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);
  if (!user) {
    router.push("/sign-in");
  }
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
          setFormData({ ...formData, profilePicture: downloadURL })
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
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(
        `https://pfe-backend-sqmm.onrender.com/api/user/update/${user._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      localStorage.clear();
      await fetch("https://pfe-backend-sqmm.onrender.com/api/auth/signout");
      deleteCookie("access_token");
      router.push("/sign-in");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" ">
        <div className="p-5">
          <div className="p-24  w-full bg-[#d6d6d6b0] rounded-xl" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex max-w-lg mx-auto  flex-col gap-4 relative -top-24"
        >
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <img
            src={formData?.profilePicture || currentUser?.profilePicture}
            alt="profile"
            className="h-36 w-36 self-center cursor-pointer rounded-full object-cover mt-2"
            onClick={() => fileRef.current.click()}
          />

          <p className="text-2xl self-center text-black font-semibold capitalize">
            {currentUser?.username}
          </p>
          <p className=" self-center capitalize text-[#6c757d]">{user?.role}</p>
          <p className="text-sm self-center">
            {imageError ? (
              <span className="text-red-700">
                Erreur lors du téléchargement de l'image (la taille du fichier
                doit être inférieure à 2 Mo)
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
          <input
            defaultValue={currentUser?.username}
            type="text"
            id="username"
            placeholder="Nom d'utilisateur"
            className="bg-[#F6F6F6]  p-3  rounded-full focus:outline-[#94DA21]"
            onChange={handleChange}
          />
          <input
            value={currentUser?.email}
            type="email"
            disabled
            placeholder="Email"
            className="bg-[#F6F6F6]  p-3  rounded-full focus:outline-[#94DA21]"
          />
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            className="bg-[#F6F6F6]  p-3  rounded-full focus:outline-[#94DA21]"
            onChange={handleChange}
          />
          <button className="bg-[#94DA21] text-white p-3 rounded-full uppercase w-full  hover:opacity-80 disabled:opacity-80">
            {loading ? "Chargement..." : "Mettre à jour"}
          </button>
          <div
            onClick={handleSignOut}
            className=" text-[#ABABAB] font-semibold p-3 rounded-full uppercase text-center    cursor-pointer border border-[#B4B4B4] w-full   hover:opacity-80 disabled:opacity-80 "
          >
            Se déconnecter
          </div>
          <p className="text-red-500 mt-5">
            {error && "Quelque chose s'est mal passé!"}
          </p>
          <p className="text-green-700 mt-5">
            {updateSuccess &&
              "Vos informations utilisateur ont été mises à jour avec succès!"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Profile;
