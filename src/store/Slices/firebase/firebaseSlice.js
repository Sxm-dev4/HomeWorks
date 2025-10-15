import { createSlice } from "@reduxjs/toolkit";

export const firebaseSlice = createSlice({
  name: "firebase",
  initialState: { loading:false, error:null, items:[] },
  reducers: {
    setLoading:(s,{payload})=>{ s.loading = payload; if(payload) s.error=null; },
    setError:(s,{payload})=>{ s.error = payload; },
    setItems:(s,{payload})=>{ s.items = payload; },
    addItemLocal:(s,{payload})=>{ s.items.push(payload); },
    updateItemLocal:(s,{payload})=>{
      const i = s.items.findIndex(x=>x.id===payload.id);
      if(i>=0) s.items[i]=payload;
    },
    removeItemLocal:(s,{payload})=>{ s.items = s.items.filter(x=>x.id!==payload); },
  },
});

export const { setLoading, setError, setItems, addItemLocal, updateItemLocal, removeItemLocal } = firebaseSlice.actions;
export default firebaseSlice.reducer;