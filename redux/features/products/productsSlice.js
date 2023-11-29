import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const response = await axios.get(`http://localhost:3000/products`);
  return response.data;
});

export const saveProduct = createAsyncThunk("products/saveProduct", async (newProduct) => {
  const response = await axios.post(`http://localhost:3000/products`, newProduct);
  return response.data;
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  await axios.delete(`http://localhost:3000/products/${id}`);
  return id;
});

export const updateProduct = createAsyncThunk("products/updateProduct", async (product) => {
  const response = await axios.put(`http://localhost:3000/products/${product.id}`, product);
  return response.data;
});

const productAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});

const productsSlice = createSlice({
  name: "products",
  //   initialState: {
  //     title: "product1",
  //     price: "2000",
  //   },
  initialState: productAdapter.getInitialState(),
  //   reducers: {
  //     update: (state, action) => {
  //       (state.title = action.payload.title), (state.price = action.payload.price);
  //     },
  //   },
  extraReducers(builder) {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        productAdapter.setAll(state, action.payload);
      })
      .addCase(saveProduct.fulfilled, (state, action) => {
        productAdapter.addOne(state, action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        productAdapter.removeOne(state, action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        productAdapter.updateOne(state, { id: action.payload.id, updates: action.payload });
      });
  },
});

// export const { update } = productsSlice.actions;
export const productsSelector = productAdapter.getSelectors((state) => state.products);
export default productsSlice.reducer;
