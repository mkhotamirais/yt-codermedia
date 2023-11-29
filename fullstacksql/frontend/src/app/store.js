import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "../pages/roles/roleSlice.js";

export const store = configureStore({
  reducer: {
    roles: roleReducer,
  },
});
