import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../../firebase/config";
import { checkingCredentials, login, logout } from "../authSlice";

export const loginWithGoogle = () => {
  return async (dispatch) => {
    try {
      dispatch(checkingCredentials());
      const res = await signInWithPopup(auth, googleProvider);
      const { uid, email, displayName, photoURL } = res.user;
      dispatch(login({ uid, email, displayName, photoURL: photoURL ?? "" }));
      return { ok: true };
    } catch {
      dispatch(logout({ errorMessage: "No se pudo iniciar con Google." }));
      return { ok: false };
    }
  };
};
