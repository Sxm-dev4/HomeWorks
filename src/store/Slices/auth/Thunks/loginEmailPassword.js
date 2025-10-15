import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/config";
import { checkingCredentials, login, logout } from "../authSlice";

export const loginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(checkingCredentials());
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const { uid, email: e, displayName, photoURL } = cred.user;
      dispatch(login({ uid, email: e, displayName, photoURL: photoURL ?? "" }));
      return { ok: true };
    } catch (e) {
      dispatch(logout({ errorMessage: "No se pudo iniciar sesión." }));
      return { ok: false, errorMessage: e?.message };
    }
  };
};
