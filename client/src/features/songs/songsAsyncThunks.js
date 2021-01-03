import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSongPage = createAsyncThunk(
  "songs/fetchSongPage",
  async (songId) => {
    const response = await axios.get(`/api/v1/songs/${songId}`);
    return response.data;
  }
);

export const fetchSongsList = createAsyncThunk(
  "songs/fetchSongsList",
  async () => {
    const response = await axios.get(`/api/v1/songs`);
    return response.data;
  }
);

export const fetchSongsIndex = createAsyncThunk(
  "songs/fetchSongsIndex",
  async (char) => {
    const response = await axios.get(`/api/v1/songs-index/${char}`);
    return response.data;
  }
);
