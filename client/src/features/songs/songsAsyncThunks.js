import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchSongPage = createAsyncThunk(
//   "songs/fetchSongPage",
//   async (songId) => {
//     const response = await axios.get(`/api/v1/songs/${songId}`);
//     return response.data;
//   }
// );

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
    const response = await axios.get(`/api/v1/songs/index/${char}`);
    return response.data;
  }
);

export const fetchSong = createAsyncThunk("songs/fetchSong", async (songId) => {
  const response = await axios.get(`/api/v1/songs/${songId}`);
  return response.data;
});

export const fetchSongVerse = createAsyncThunk(
  "songs/fetchSongVerse",
  async (verseId) => {
    const response = await axios.get(`/api/v1/verses/${verseId}`);
    return response.data;
  }
);

export const fetchSongAlbum = createAsyncThunk(
  "songs/fetchSongAlbum",
  async (songId) => {
    const response = await axios.get(`/api/v1/songs/${songId}/album`);
    return response.data;
  }
);

export const fetchSongAnnotations = createAsyncThunk(
  "songs/fetchSongAnnotations",
  async (songId) => {
    const response = await axios.get(`/api/v1/songs/${songId}/annotations`);
    return response.data;
  }
);

export const fetchSongArtistCredits = createAsyncThunk(
  "songs/fetchSongArtistCredits",
  async (songId) => {
    const response = await axios.get(`/api/v1/songs/${songId}/artist_credits`);
    return response.data;
  }
);

export const fetchSongBanner = createAsyncThunk(
  "songs/fetchSongBanner",
  async (songId) => {
    const response = await axios.get(`/api/v1/songs/${songId}/banner`);
    return response.data;
  }
);

export const fetchSongDescription = createAsyncThunk(
  "songs/fetchSongDescription",
  async (songId) => {
    const response = await axios.get(`/api/v1/songs/${songId}/description`);
    return response.data;
  }
);

export const fetchSongLyrics = createAsyncThunk(
  "songs/fetchSongLyrics",
  async (songId) => {
    const response = await axios.get(`/api/v1/songs/${songId}/lyrics`);
    return response.data;
  }
);

export const fetchSongSampleCredits = createAsyncThunk(
  "songs/fetchSongSampleCredits",
  async (songId) => {
    const response = await axios.get(`/api/v1/songs/${songId}/sample_credits`);
    return response.data;
  }
);
