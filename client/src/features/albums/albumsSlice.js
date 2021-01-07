import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchAlbumPage, fetchAlbumsList } from "../albums/albumsAsyncThunks";
import { fetchArtistPage } from "../artists/artistsAsyncThunks";
import { fetchSongPage } from "../songs/songsAsyncThunks";
import {
  addAlbumComment,
  fetchAlbumComments,
} from "../comments/commentsAsyncThunks";

import { selectSongById } from "../songs/songsSlice";

const albumsAdapter = createEntityAdapter({
  selectId: (album) => album.id,
  sortComparer: (a, b) => b.releaseDate.localeCompare(a.releaseDate),
});

const initialState = albumsAdapter.getInitialState({});

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAlbumsList.fulfilled]: (state, action) => {
      albumsAdapter.setAll(state, action.payload.albums);
    },
    [fetchAlbumPage.fulfilled]: (state, action) => {
      albumsAdapter.setAll(state, action.payload.albums);
    },
    [fetchArtistPage.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.setAll(state, action.payload.albums);
      }
    },
    [fetchSongPage.fulfilled]: (state, action) => {
      if (action.payload.albums) {
        albumsAdapter.setAll(state, action.payload.albums);
      }
    },
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
