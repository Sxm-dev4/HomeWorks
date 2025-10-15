import React from "react";
import { useDispatch } from "react-redux";
import { logoutAuth } from "../store/Slices/auth/Thunks/logoutAuth";

export const LogoutButton = () => {
  const dispatch = useDispatch();
  return <button onClick={()=>dispatch(logoutAuth())}>Logout</button>;
};
