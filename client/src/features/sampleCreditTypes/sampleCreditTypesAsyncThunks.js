import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSampleCreditTypes = createAsyncThunk(
  "sampleCreditTypes/fetchSampleCreditTypes",
  async () => {
    const response = await axios.get(`/api/v1/sample_credit_types`);
    return response.data;
  }
);
