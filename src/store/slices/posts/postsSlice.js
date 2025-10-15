import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: { list: [] },
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    addPost: (state, action) => {
      state.list.push(action.payload);
    },
    removePost: (state, action) => {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
  },
});

export const { setPosts, addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
