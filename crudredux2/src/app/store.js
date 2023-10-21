import { configureStore } from "@reduxjs/toolkit";
import proudctReducer from "../features/productSlice";

const store = configureStore({
  reducer: {
    products: proudctReducer,
  },
});

export default store;
