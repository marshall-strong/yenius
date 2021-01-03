import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbumPage = createAsyncThunk(
  "albums/fetchAlbumPage",
  async (albumId) => {
    const response = await axios.get(`/api/v1/albums/${albumId}`);
    return response.data;
  }
);

export const fetchAlbumsList = createAsyncThunk(
  "albums/fetchAlbumsList",
  async () => {
    const response = await axios.get(`/api/v1/albums`);
    return response.data;
  }
);
