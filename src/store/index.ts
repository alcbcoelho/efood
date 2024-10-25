import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modalSlice";

import api from "../services/api";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
