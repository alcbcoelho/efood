import { configureStore } from "@reduxjs/toolkit";

import overlayReducer from "./reducers/overlaySlice";
import cartReducer from "./reducers/cartSlice";
import sidebarReducer from "./reducers/sidebarSlice";

import api from "../services/api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    overlay: overlayReducer,
    sidebar: sidebarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
