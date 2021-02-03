import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "session/signupUser",
  async (credentials) => {
    const response = await axios.post(`/api/v1/users`, { user: credentials });
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "session/loginUser",
  async (credentials) => {
    const response = await axios.post(`/api/v1/session`, { user: credentials });
    return response.data;
  }
);

export const logoutUser = createAsyncThunk("session/logoutUser", async () => {
  const response = await axios.delete(`/api/v1/session`);
  return response.data;
});
