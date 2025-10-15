import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "./Slices/auth/authSlice";
import {firebaseSlice} from "./Slices/firebase/firebaseSlice";
import {chatSlice} from "./Slices/chat/chatSlice";

export const store = configureStore({
    reducer: {
        auth:   authSlice.reducer,
        firebase: firebaseSlice.reducer,
        chat: chatSlice.reducer
    },
})