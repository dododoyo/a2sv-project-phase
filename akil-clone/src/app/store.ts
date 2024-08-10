import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { opportunitiesAPI } from "./services/opportunities";

export const store = configureStore({
  reducer: {
    [opportunitiesAPI.reducerPath]: opportunitiesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(opportunitiesAPI.middleware),
});

setupListeners(store.dispatch);
