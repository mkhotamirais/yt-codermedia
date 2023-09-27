import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  // initialState: {
  //   title: "product1",
  //   price: "4000",
  // },
  // reducers: {
  //   update: (state, action) => {
  //     state.title = action.payload.title;
  //     state.price = action.payload.price;
  //   },
  // },
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
  },
});

// export const { update } = productSlice.actions;
export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
