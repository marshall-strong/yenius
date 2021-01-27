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

export const updateUserProfile = createAsyncThunk(
  "users/updateUserProfile",
  async (updatedUser) => {
    const response = await axios.patch(`/api/v1/users/${updatedUser.id}`, {
      user: updatedUser,
    });
    return response.data;
  }
);
