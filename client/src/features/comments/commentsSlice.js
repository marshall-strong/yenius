import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchAlbumPage } from "../albums/albumsAsyncThunks";
import { fetchArtistPage } from "../artists/artistsAsyncThunks";
import {
  addNewComment,
  fetchAllComments,
} from "../comments/commentsAsyncThunks";
import { fetchSongPage } from "../songs/songsAsyncThunks";

import { fetchAlbumComments } from "./commentsAsyncThunks";

const commentsAdapter = createEntityAdapter({
  selectId: (comment) => comment.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = commentsAdapter.getInitialState({
  status: "idle",
  error: null,
});

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [addNewComment.fulfilled]: (state, action) => {
      commentsAdapter.upsertMany(state, action.payload.comments);
    },
    [fetchAllComments.fulfilled]: (state, action) => {
      commentsAdapter.setAll(state, action.payload.comments);
    },
    [fetchAlbumPage.fulfilled]: (state, action) => {
      if (action.payload.comments) {
        commentsAdapter.upsertMany(state, action.payload.comments);
      }
    },
    [fetchArtistPage.fulfilled]: (state, action) => {
      if (action.payload.comments) {
        commentsAdapter.upsertMany(state, action.payload.comments);
      }
    },
    [fetchSongPage.fulfilled]: (state, action) => {
      if (action.payload.comments) {
        commentsAdapter.upsertMany(state, action.payload.comments);
      }
    },
    [fetchAlbumComments.fulfilled]: (state, action) => {
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
  },
});

export default commentsSlice.reducer;

export const {
  selectIds: selectCommentIds, // returns the state.ids array.
  selectEntities: selectCommentEntities, // returns the state.entities lookup table.
  selectAll: selectAllComments, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalComments, // returns the total number of entities being stored in this state.
  selectById: selectCommentById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = commentsAdapter.getSelectors((state) => state.comments);

export const selectCommentsByCommentable = createSelector(
  [
    selectAllComments,
    (_state, commentableType) => commentableType,
    (_state, _commentableType, commentableId) => commentableId,
  ],
  (comments, commentableType, commentableId) =>
    comments.filter(
      (comment) =>
        comment.commentableType === commentableType &&
        comment.commentableId === commentableId
    )
);
