import { token } from "@/lib/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const registerUser = createAsyncThunk(
  "authReducer/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://app.neutronx.com/auth/register",
        data
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const loginUser = createAsyncThunk(
  "authReducer/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://app.neutronx.com/auth/jwt/login",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      token.set(response.data.access_token);

      return response.data.access_token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logoutUser = createAsyncThunk(
  "authReducer/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://app.neutronx.com/auth/jwt/logout"
      );

      token.unset();
      localStorage.removeItem('persist:auth')

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// const refreshUser = createAsyncThunk(
//   'authReducer/refresh',
//   async (_, { rejectWithValue, getState }) => {
//     const { token: persistedToken } = getState().authMarketplace;

//     if (!persistedToken) {
//       return rejectWithValue('No valid token');
//     }

//     token.set(persistedToken);

//     try {
//       const response = await axios.get('/auth/jwt/refresh');

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const API = {
  registerUser,
  loginUser,
  logoutUser,
};

export default API;
