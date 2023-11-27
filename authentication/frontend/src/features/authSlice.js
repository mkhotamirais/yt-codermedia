import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSUccess: false,
  isLoading: false,
  message: "",
};

export const getMe = createAsyncThunk("user/getMe", async (_, thunkApi) => {
  try {
    const response = await axios.get(`http://localhost:5000/me`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkApi.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk("user/LogOut", async () => {
  await axios.delete(`http://localhost:5000/logout`);
});

export const LoginUser = createAsyncThunk("user/LogiUser", async ({ email, password }, thunkApi) => {
  try {
    const response = await axios.post(`http://localhost:5000/login`, { email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkApi.rejectWithValue(message);
    }
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSUccess = true;
        state.user = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // get user login
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSUccess = true;
        state.user = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
