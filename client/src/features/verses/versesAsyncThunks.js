import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVersePage = createAsyncThunk(
  "verses/fetchVersePage",
  async (verseId) => {
    const response = await axios.get(`/api/v1/verses/${verseId}`);
    return response.data;
  }
);
