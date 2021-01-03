import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSampleCredits = createAsyncThunk(
  "sampleCredits/fetchSampleCredits",
  async () => {
    const response = await axios.get(`/api/v1/sample_credits`);
    return response.data;
  }
);
