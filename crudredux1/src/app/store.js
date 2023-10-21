import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import productReducer from "../features/productSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});
