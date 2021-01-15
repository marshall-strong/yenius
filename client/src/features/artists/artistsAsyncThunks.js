import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArtistPage = createAsyncThunk(
  "artists/fetchArtistPage",
  async (artistId) => {
    const response = await axios.get(`/api/v1/artists/${artistId}`);
    return response.data;
  }
);

export const fetchArtistsList = createAsyncThunk(
  "artists/fetchArtistsList",
  async () => {
    const response = await axios.get(`/api/v1/artists`);
    return response.data;
  }
);

export const fetchArtistsIndex = createAsyncThunk(
  "artists/fetchArtistsIndex",
  async (char) => {
    const response = await axios.get(`/api/v1/artists/index/${char}`);
    return response.data;
  }
);
