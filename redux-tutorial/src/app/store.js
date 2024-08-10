import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import countReducer from "./features/counter/counterSlice";
import { productsAPI } from "./service/products";

export const store = configureStore({
  reducer: {
    counter: countReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});

setupListeners(store.dispatch);
