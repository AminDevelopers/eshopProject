import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/authSlice";
import favSlice from "./features/favSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    fav: favSlice,
  },
});
