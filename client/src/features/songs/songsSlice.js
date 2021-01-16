import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchAlbumPage } from "../albums/albumsAsyncThunks";
import { fetchArtistPage } from "../artists/artistsAsyncThunks";
import {
  addSongComment,
  fetchSongComments,
} from "../comments/commentsAsyncThunks";
import {
  // fetchSongPage,
  fetchSongsList,
  fetchSongsIndex,
  fetchSong,
  fetchSongVerse,
  fetchSongAlbum,
  // fetchSongAnnotations,
  fetchSongArtistCredits,
  fetchSongBanner,
  fetchSongDescription,
  fetchSongLyrics,
  fetchSongSampleCredits,
} from "./songsAsyncThunks";
import { fetchVerseAnnotations } from "../verses/versesAsyncThunks";

import { selectAlbumById, selectAlbumBySongId } from "../albums/albumsSlice";

const songsAdapter = createEntityAdapter({
  selectId: (song) => song.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = songsAdapter.getInitialState({
  status: {
    fetchSong: null,
    fetchSongVerse: null,
    fetchSongAlbum: null,
    fetchSongArtistCredits: null,
    fetchSongBanner: null,
    fetchSongComments: null,
    fetchSongDescription: null,
    fetchSongLyrics: null,
    fetchSongSampleCredits: null,
    fetchVerseAnnotations: null,
  },
});

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAlbumPage.fulfilled]: (state, action) => {
      if (action.payload.songs) {
        songsAdapter.setAll(state, action.payload.songs);
      }
    },
    [fetchArtistPage.fulfilled]: (state, action) => {
      if (action.payload.songs) {
        songsAdapter.setAll(state, action.payload.songs);
      }
    },
    [fetchSongsIndex.fulfilled]: (state, action) => {
      if (action.payload.songs) {
        songsAdapter.setAll(state, action.payload.songs);
      }
    },
    [fetchSongsList.fulfilled]: (state, action) => {
      songsAdapter.setAll(state, action.payload.songs);
    },
    // SongPage
    [fetchSong.pending]: (state) => {
      state.status.fetchSong = "pending";
      songsAdapter.removeAll(state);
    },
    [fetchSong.fulfilled]: (state, action) => {
      state.status.fetchSong = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSong.rejected]: (state) => {
      state.status.fetchSong = "rejected";
    },
    [fetchSongVerse.pending]: (state) => {
      state.status.fetchSongVerse = "pending";
    },
    [fetchSongVerse.fulfilled]: (state, action) => {
      state.status.fetchSongVerse = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSongVerse.rejected]: (state) => {
      state.status.fetchSongVerse = "rejected";
    },
    [fetchSongAlbum.pending]: (state) => {
      state.status.fetchSongAlbum = "pending";
    },
    [fetchSongAlbum.fulfilled]: (state, action) => {
      state.status.fetchSongAlbum = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSongAlbum.rejected]: (state, action) => {
      state.status.fetchSongAlbum = "rejected";
    },
    [fetchVerseAnnotations.pending]: (state) => {
      state.status.fetchVerseAnnotations = "pending";
    },
    [fetchVerseAnnotations.fulfilled]: (state, action) => {
      state.status.fetchVerseAnnotations = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSongArtistCredits.pending]: (state) => {
      state.status.fetchSongArtistCredits = "pending";
    },
    [fetchSongArtistCredits.fulfilled]: (state, action) => {
      state.status.fetchSongArtistCredits = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSongBanner.pending]: (state) => {
      state.status.fetchSongBanner = "pending";
    },
    [fetchSongBanner.fulfilled]: (state, action) => {
      state.status.fetchSongBanner = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSongComments.pending]: (state) => {
      state.status.fetchSongComments = "pending";
    },
    [fetchSongComments.fulfilled]: (state, action) => {
      state.status.fetchSongComments = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSongDescription.pending]: (state) => {
      state.status.fetchSongDescription = "pending";
    },
    [fetchSongDescription.fulfilled]: (state, action) => {
      state.status.fetchSongDescription = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSongLyrics.pending]: (state) => {
      state.status.fetchLyrics = "pending";
    },
    [fetchSongLyrics.fulfilled]: (state, action) => {
      state.status.fetchSongLyrics = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSongSampleCredits.pending]: (state) => {
      state.status.fetchSongSampleCredits = "pending";
    },
    [fetchSongSampleCredits.fulfilled]: (state, action) => {
      state.status.fetchSongSampleCredits = "fulfilled";
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    //
    [addSongComment.fulfilled]: (state, action) => {
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
  },
});

export default songsSlice.reducer;

export const {
  selectIds: selectSongIds, // returns the state.ids array.
  selectEntities: selectSongEntities, // returns the state.entities lookup table.
  selectAll: selectAllSongs, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalSongs, // returns the total number of entities being stored in this state.
  selectById: selectSongById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = songsAdapter.getSelectors((state) => state.songs);

export const selectTracksByAlbumId = createSelector(
  [
    (state) => selectAllSongs(state),
    (state, albumId) => selectAlbumById(state, albumId),
  ],
  (songs, album) => songs.filter((song) => album.songs.includes(song.id))
);

export const selectAlbumTracksBySongId = createSelector(
  [
    (state) => selectSongEntities(state),
    (state, songId) => selectAlbumBySongId(state, songId),
  ],
  (songEntities, album) => album.songs.map((songId) => songEntities[songId])
);
