import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchAlbumPage } from "../albums/albumsAsyncThunks";
import { fetchArtistPage } from "../artists/artistsAsyncThunks";
import { fetchSongPage } from "../songs/songsAsyncThunks";

import {
  addNewComment,
  fetchAlbumComments,
  fetchArtistComments,
  fetchSongComments,
  fetchVerseComments,
} from "./commentsAsyncThunks";

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
    [addNewComment.pending]: (state, action) => {
      state.status = "addNewComment.pending";
    },
    [addNewComment.rejected]: (state, action) => {
      state.status = "addNewComment.rejected";
    },
    [addNewComment.fulfilled]: (state, action) => {
      state.status = "addNewComment.fulfilled";
      commentsAdapter.upsertMany(state, action.payload.comments);
    },
    [fetchAlbumPage.fulfilled]: (state, action) => {
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [fetchArtistPage.fulfilled]: (state, action) => {
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [fetchSongPage.pending]: (state, action) => {
      state.status = "fetchSongPage.pending";
    },
    [fetchSongPage.rejected]: (state, action) => {
      state.status = "fetchSongPage.rejected";
    },
    [fetchSongPage.fulfilled]: (state, action) => {
      state.status = "fetchSongPage.fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [fetchAlbumComments.pending]: (state, action) => {
      state.status = "fetchAlbumComments.pending";
    },
    [fetchAlbumComments.rejected]: (state, action) => {
      state.status = "fetchAlbumComments.rejected";
    },
    [fetchAlbumComments.fulfilled]: (state, action) => {
      state.status = "fetchAlbumComments.fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [fetchArtistComments.pending]: (state, action) => {
      state.status = "fetchArtistComments.pending";
    },
    [fetchArtistComments.rejected]: (state, action) => {
      state.status = "fetchArtistComments.rejected";
    },
    [fetchArtistComments.fulfilled]: (state, action) => {
      state.status = "fetchArtistComments.fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [fetchSongComments.pending]: (state, action) => {
      state.status = "fetchSongComments.pending";
    },
    [fetchSongComments.rejected]: (state, action) => {
      state.status = "fetchSongComments.rejected";
    },
    [fetchSongComments.fulfilled]: (state, action) => {
      state.status = "fetchSongComments.fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [fetchVerseComments.pending]: (state, action) => {
      state.status = "fetchVerseComments.pending";
    },
    [fetchVerseComments.rejected]: (state, action) => {
      state.status = "fetchVerseComments.rejected";
    },
    [fetchVerseComments.fulfilled]: (state, action) => {
      state.status = "fetchVerseComments.fulfilled";
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

export const selectCommentsStatus = createSelector(
  [(state) => state.comments.status],
  (commentsStatus) => commentsStatus
);
