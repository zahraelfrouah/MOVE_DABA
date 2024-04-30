import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setCookie } from "cookies-next";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "@/redux/user/userSlice";
import { useRouter } from "next/navigation";
import axios from "axios";

import Image from "next/image";
import Spinner from "./Spinner";

const OAuth = ({ role }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.user);

  const handleGoogleClick = async () => {
    try {
      dispatch(signInStart());
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      let postRoute;
      if (role) {
        postRoute = "https://pfe-backend-sqmm.onrender.com/api/auth/google";
      } else {
        postRoute =
          "https://pfe-backend-sqmm.onrender.com/api/auth/signin-google";
      }
      const res = await axios.post(postRoute, {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
        role: role,
      });

      const data = res.data;

      setCookie("access_token", data.token, {
        maxAge: 60 * 6 * 24,
        // httpOnly: true,
      });
      dispatch(signInSuccess(data));
      router.push("https://www.movedaba.ma/client");
      toast.success("Connexion réussie.");
    } catch (error) {
      dispatch(signInFailure(error));
      toast.error("Échec de la connexion avec le compte Google.");
    }
  };

  return (
    <button
      type="button"
      disabled={loading}
      onClick={handleGoogleClick}
      className=" text-black text-lg p-3 hover:opacity-95 disabled:opacity-80 w-full relative flex items-center gap-5 border hover:border-lime-500 rounded-full px-14 text-nowrap"
    >
      <Image src="/Google.png" alt="google" width={30} height={30} />
      Continuer avec Google
    </button>
  );
};

export default OAuth;
