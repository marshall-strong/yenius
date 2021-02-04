import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import {
  addVerseComment,
  fetchVerseComments,
} from "../comments/commentsSliceThunks";
import { fetchSongLyrics, fetchSongVerse } from "../songs/songsSliceThunks";

const versesAdapter = createEntityAdapter({});
const initialState = versesAdapter.getInitialState({});

const versesSlice = createSlice({
  name: "verses",
  initialState,
  reducers: {},
  extraReducers: {
    // no verses asyncThunks

    // other asyncThunks
    [fetchSongLyrics.fulfilled]: (state, action) => {
      if (action.payload.verses) {
        versesAdapter.upsertMany(state, action.payload.verses);
      }
    },
    [fetchSongVerse.fulfilled]: (state, action) => {
      if (action.payload.verses) {
        versesAdapter.upsertMany(state, action.payload.verses);
      }
    },
    [fetchVerseComments.fulfilled]: (state, action) => {
      if (action.payload.verses) {
        versesAdapter.upsertMany(state, action.payload.verses);
      }
    },
    [addVerseComment.fulfilled]: (state, action) => {
      if (action.payload.verses) {
        versesAdapter.upsertMany(state, action.payload.verses);
      }
    },
  },
});

export default versesSlice.reducer;

export const {
  selectIds: selectVerseIds, // returns the state.ids array.
  selectEntities: selectVerseEntities, // returns the state.entities lookup table.
  selectAll: selectAllVerses, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalVerses, // returns the total number of entities being stored in this state.
  selectById: selectVerseById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = versesAdapter.getSelectors((state) => state.verses);
