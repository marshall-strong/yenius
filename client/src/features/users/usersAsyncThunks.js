import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopScholars = createAsyncThunk(
  "users/fetchTopScholars",
  async () => {
    const response = await axios.get(`/api/v1/users/top_scholars`);
    return response.data;
  }
);

export const fetchUserProfile = createAsyncThunk(
  "users/fetchUserProfile",
  async (userId) => {
    const response = await axios.get(`/api/v1/users/${userId}`);
    return response.data;
  }
);
