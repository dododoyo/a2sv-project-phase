import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import authReducer from "./features/auth/authSlice";
import bookmarkReducer from "./features/bookmark/bookmarkSlice";
import searchReducer from "./features/search/searchSlice";
import opportunityReducer from "./features/opportunities/opportunitiesSlice";

import { bookmarkAPI } from "./services/bookmark";
import { opportunitiesAPI } from "./services/opportunities";

export const store = configureStore({
  reducer: {
    authReducer,
    bookmarkReducer,
    searchReducer,
    opportunityReducer,
    [bookmarkAPI.reducerPath]: bookmarkAPI.reducer,
    [opportunitiesAPI.reducerPath]: opportunitiesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      opportunitiesAPI.middleware,
      bookmarkAPI.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
