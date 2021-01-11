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
  fetchSongPage,
  fetchSongsList,
  fetchSongsIndex,
  fetchSongAlbum,
  fetchSongAnnotations,
  fetchSongArtistCredits,
  fetchSongBanner,
  // fetchSongComments,
  fetchSongDescription,
  fetchSongLyrics,
  fetchSongSampleCredits,
} from "../songs/songsAsyncThunks";

import { selectAlbumById, selectAlbumBySongId } from "../albums/albumsSlice";

const songsAdapter = createEntityAdapter({
  selectId: (song) => song.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = songsAdapter.getInitialState({});

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
    [fetchSongPage.pending]: (state) => {
      songsAdapter.removeAll(state);
    },
    [fetchSongPage.fulfilled]: (state, action) => {
      songsAdapter.setAll(state, action.payload.songs);
    },
    [fetchSongAlbum.fulfilled]: (state, action) => {
      songsAdapter.upsertMany(state, action.payload.songs);
    },
    [fetchSongAnnotations.fulfilled]: (state, action) => {
      songsAdapter.upsertMany(state, action.payload.songs);
    },
    [fetchSongArtistCredits.fulfilled]: (state, action) => {
      songsAdapter.upsertMany(state, action.payload.songs);
    },
    [fetchSongBanner.fulfilled]: (state, action) => {
      songsAdapter.upsertMany(state, action.payload.songs);
    },
    [fetchSongComments.fulfilled]: (state, action) => {
      if (action.payload.songs) {
        songsAdapter.upsertMany(state, action.payload.songs);
      }
    },
    [fetchSongDescription.fulfilled]: (state, action) => {
      songsAdapter.upsertMany(state, action.payload.songs);
    },
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
