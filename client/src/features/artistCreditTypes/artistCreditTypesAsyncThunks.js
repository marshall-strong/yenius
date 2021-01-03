import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArtistCreditTypes = createAsyncThunk(
  "artistCreditTypes/fetchArtistCreditTypes",
  async () => {
    const response = await axios.get(`/api/v1/artist_credit_types`);
    return response.data;
  }
);
