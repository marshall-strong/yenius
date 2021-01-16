import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchAlbumPage, fetchAlbumsList } from "../albums/albumsAsyncThunks";
import { fetchArtistPage } from "../artists/artistsAsyncThunks";
import {
  fetchSongAlbum,
  fetchSongArtistCredits,
  fetchSongBanner,
} from "../songs/songsAsyncThunks";
import {
  addAlbumComment,
  fetchAlbumComments,
} from "../comments/commentsAsyncThunks";

import { selectSongById } from "../songs/songsSlice";

const albumsAdapter = createEntityAdapter({
  selectId: (album) => album.id,
  sortComparer: (a, b) => b.releaseDate.localeCompare(a.releaseDate),
});

const initialState = albumsAdapter.getInitialState({
  status: {
    fetchAlbumPage: null,
    fetchAlbumsList: null,
  },
});

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAlbumsList.pending]: (state, action) => {
      state.status.fetchAlbumsList = "pending";
    },
    [fetchAlbumsList.fulfilled]: (state, action) => {
      state.status.fetchAlbumsList = "fulfilled";
      albumsAdapter.setAll(state, action.payload.albums);
    },
    [fetchAlbumsList.rejected]: (state, action) => {
      state.status.fetchAlbumsList = "rejected";
    },
    [fetchAlbumPage.pending]: (state) => {
      state.status.fetchAlbumPage = "pending";
      albumsAdapter.removeAll(state);
    },
    [fetchAlbumPage.fulfilled]: (state, action) => {
      state.status.fetchAlbumPage = "fulfilled";
      if (action.payload.artists) {
        albumsAdapter.upsertMany(state, action.payload.albums);
      }
    },
    [fetchAlbumPage.rejected]: (state, action) => {
      state.status.fetchAlbumPage = "rejected";
    },
    [fetchArtistPage.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.setAll(state, action.payload.albums);
      }
    },
    // SongPage
    // [fetchSongPage.pending]: (state) => {
    //   albumsAdapter.removeAll(state);
    // },
    [fetchSongAlbum.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.upsertMany(state, action.payload.albums);
      }
    },
    [fetchSongArtistCredits.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.upsertMany(state, action.payload.albums);
      }
    },
    [fetchSongBanner.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.upsertMany(state, action.payload.albums);
      }
    },
    //
    [fetchAlbumComments.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.upsertMany(state, action.payload.albums);
      }
    },
    [addAlbumComment.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.upsertMany(state, action.payload.albums);
      }
    },
  },
});

export default albumsSlice.reducer;

export const {
  selectIds: selectAlbumIds, // returns the state.ids array.
  selectEntities: selectAlbumEntities, // returns the state.entities lookup table.
  selectAll: selectAllAlbums, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalAlbums, // returns the total number of entities being stored in this state.
  selectById: selectAlbumById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = albumsAdapter.getSelectors((state) => state.albums);

export const selectAlbumBySongId = createSelector(
  [
    (state) => selectAlbumEntities(state),
    (state, songId) => selectSongById(state, songId),
  ],
  (albumEntities, song) => albumEntities[song.albumId]
);
