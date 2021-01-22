import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import {
  fetchAlbumPage,
  fetchAlbumsList,
  fetchTopAlbums,
} from "../albums/albumsAsyncThunks";
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
  sortComparer: (a, b) => a.releaseDate.localeCompare(b.releaseDate),
});

const initialState = albumsAdapter.getInitialState({
  status: {
    fetchAlbumPage: null,
    fetchAlbumsList: null,
    fetchTopAlbums: null,
  },
});

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: {
    // albums asyncThunks
    // fetchAlbumPage
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

    // fetchAlbumsList
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

    // fetchTopAlbums
    [fetchTopAlbums.pending]: (state, action) => {
      state.status.fetchTopAlbums = "pending";
    },
    [fetchTopAlbums.fulfilled]: (state, action) => {
      albumsAdapter.setAll(state, action.payload.albums);
      state.status.fetchTopAlbums = "fulfilled";
    },
    [fetchTopAlbums.rejected]: (state, action) => {
      state.status.fetchTopAlbums = "rejected";
    },

    // other asyncThunks
    [addAlbumComment.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.upsertMany(state, action.payload.albums);
      }
    },
    [fetchAlbumComments.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.upsertMany(state, action.payload.albums);
      }
    },
    [fetchArtistPage.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.setAll(state, action.payload.albums);
      }
    },
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
  (albumEntities, song) => {
    const album = song ? albumEntities[song.albumId] : null;
    return album;
  }
);

export const selectTopAlbums = createSelector(
  [(state) => selectAllAlbums(state)],
  (albums) => albums.sort((a, b) => b.topAlbumNumber - a.topAlbumNumber)
);
