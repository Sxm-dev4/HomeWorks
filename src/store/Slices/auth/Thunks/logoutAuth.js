import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase/config";
import { logout } from "../authSlice";

export const logoutAuth = () => {
  return async (dispatch) => {
    try { await signOut(auth); } finally { dispatch(logout()); }
  };
};