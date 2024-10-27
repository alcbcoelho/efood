import { configureStore } from "@reduxjs/toolkit";

import overlayReducer from "./overlaySlice";
import cartReducer from "./cartSlice";

import api from "../services/api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    overlay: overlayReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
