import { createSlice } from '@reduxjs/toolkit';

const initial = {
  status: 'not-authenticated', 
  uid: null, email: null, displayName: null, photoURL: null,
  errorMessage: null,
};

const slice = createSlice({
  name: 'auth',
  initialState: initial,
  reducers: {
    checking: (s)=>{ s.status='checking'; s.errorMessage=null; },
    login: (s,{payload})=>{
      s.status='authenticated';
      s.uid=payload.uid; s.email=payload.email;
      s.displayName=payload.displayName ?? null;
      s.photoURL=payload.photoURL ?? null;
      s.errorMessage=null;
    },
    logout: (s,{payload})=>{
      Object.assign(s, initial, { status:'not-authenticated', errorMessage: payload?.errorMessage ?? null });
    },
  }
});

export const { checking, login, logout } = slice.actions;
export default slice.reducer;
