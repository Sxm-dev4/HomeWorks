import { createSlice } from "@reduxjs/toolkit";
export const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    setMessages:(s,{payload})=>{ s.messages = payload; },
    clearMessages:(s)=>{ s.messages = []; }
  },
});
export const { setMessages, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;