import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVerses = createAsyncThunk("verses/fetchVerses", async () => {
  const response = await axios.get(`/api/v1/verses`);
  return response.data;
});
