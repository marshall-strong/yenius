import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import {
  addVerseComment,
  fetchVerseComments,
} from "../comments/commentsAsyncThunks";
import {
  // fetchSongPage,
  fetchSongAnnotations,
  fetchSongLyrics,
  fetchSongVerse,
} from "../songs/songsAsyncThunks";
import { fetchVerseAnnotations } from "../verses/versesAsyncThunks";

const versesAdapter = createEntityAdapter({
  // selectId is only necessary if entity's unique key is NOT entity.id
  //  selectId: (user) => user.id,
  // sortComparer is necessary if you want state.ids to be sorted
  // if sortComparer(foo, bar) returns -1, sort foo to lower index than bar (state.ids = [foo, bar])
  // if sortComparer(foo, bar) returns  0, don't sort foo with respect to bar
  // if sortComparer(foo, bar) returns +1, sort foo to higher index than bar (state.ids = [bar, foo])
  //  sortComparer: (a, b) => a.username.localeCompare(b.username),
});
const initialState = versesAdapter.getInitialState({});

const versesSlice = createSlice({
  name: "verses",
  initialState,
  reducers: {},
  extraReducers: {
    // SongPage
    // [fetchSongPage.pending]: (state) => {
    //   versesAdapter.removeAll(state);
    // },
    [fetchSongAnnotations.fulfilled]: (state, action) => {
      if (action.payload.verses) {
        versesAdapter.upsertMany(state, action.payload.verses);
      }
    },
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
    //
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
    [fetchVerseAnnotations.fulfilled]: (state, action) => {
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
