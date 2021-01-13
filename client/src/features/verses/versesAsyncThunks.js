import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVerseAnnotations = createAsyncThunk(
  "verses/fetchVerseAnnotations",
  async (verseId) => {
    const response = await axios.get(`/api/v1/verses/${verseId}`);
    return response.data;
  }
);
