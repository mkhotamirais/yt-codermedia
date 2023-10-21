import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/api/products?limit=10"
    );
    return response.data.products;
  }
);
export const getProducts2 = createAsyncThunk(
  "products/getProducts2",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/api/products?limit=0"
    );
    return response.data.products;
  }
);

const productEntity = createEntityAdapter({
  selectId: (p) => p._id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      })
      .addCase(getProducts2.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      });
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
