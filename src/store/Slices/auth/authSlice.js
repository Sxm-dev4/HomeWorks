import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",      
    uid: null,
    email: null,
    displayName: null,       
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    register: (state, action) => {
      const { uid, email, displayName, photoURL } = action.payload || {};
      state.status = "authenticated";
      state.uid = uid ?? null;
      state.email = email ?? null;
      state.displayName = displayName ?? null;
      state.photoURL = photoURL ?? null;
      state.errorMessage = null;
    },

     login: (state, action) => {
      const { uid, email, displayName, photoURL } = action.payload || {};
      state.status = "authenticated";
      state.uid = uid ?? null;
      state.email = email ?? null;
      state.displayName = displayName ?? null;
      state.photoURL = photoURL ?? null;
      state.errorMessage = null;
    },


    logout: (state, action) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = action?.payload?.errorMessage ?? null;
    },

    checkingCredentials: (state) => {
      state.status = "checking";
      state.errorMessage = null;
    },
  },
});

export const { checkingCredentials, login, logout, register } = authSlice.actions;
export default authSlice.reducer;