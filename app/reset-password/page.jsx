import ResetPassword from "@/components/ResetPassword";
import { Suspense } from "react";
export const metadata = {
  title: "Réinitialiser le mot de passe | Movedaba",
  description: "Réinitialiser le mot de passe de votre compte",
};

const ResetPasswordWrapper = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ResetPassword />
    </Suspense>
  );
};

export default ResetPasswordWrapper;
