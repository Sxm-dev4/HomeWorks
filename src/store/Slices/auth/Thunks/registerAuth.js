import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase/config";
import { register, checkingCredentials, login, logout } from "../authSlice";

export const registerAuth = (email, password) => {
  return async (dispatch) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(cred.user, {
        displayName: "Samuel",
        photoURL: "",
      });

      const { uid, email: emailCreated, displayName, photoURL } = cred.user;

      dispatch(
        register({
          uid,
          email: emailCreated,
          displayName, 
          photoURL: photoURL ?? "",
        })
      );

      return { ok: true, uid, email: emailCreated };
    } catch (error) {
      console.error("Error registrando:", error);
   
      throw error;
    }
  };
};

