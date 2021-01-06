import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArtistCredits = createAsyncThunk(
  "artistCredits/fetchArtistCredits",
  async () => {
    const response = await axios.get(`/api/v1/artist_credits`);
    return response.data;
  }
);
