import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchAlbumPage } from "../albums/albumsAsyncThunks";
import { fetchArtistPage } from "../artists/artistsAsyncThunks";
import {
  fetchSongPage,
  fetchSongAnnotations,
  fetchSongComments,
} from "../songs/songsAsyncThunks";

import {
  addNewComment,
  addAlbumComment,
  addArtistComment,
  addSongComment,
  addVerseComment,
  fetchAlbumComments,
  fetchArtistComments,
  // fetchSongComments,
  fetchVerseComments,
} from "./commentsAsyncThunks";

import { fetchVerseAnnotations } from "../verses/versesAsyncThunks";

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
    // SongPage
    [fetchSongPage.pending]: (state) => {
      state.status = "fetchSongPage.pending";
      commentsAdapter.removeAll(state);
    },
    [fetchSongAnnotations.fulfilled]: (state, action) => {
      if (action.payload.comments) {
        commentsAdapter.upsertMany(state, action.payload.comments);
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
        commentsAdapter.upsertMany(state, action.payload.comments);
      }
    },
    //
    [fetchVerseAnnotations.pending]: (state, action) => {
      state.status = "fetchVerseAnnotations.pending";
    },
    [fetchVerseAnnotations.rejected]: (state, action) => {
      state.status = "fetchVerseAnnotations.rejected";
    },
    [fetchVerseAnnotations.fulfilled]: (state, action) => {
      state.status = "fetchVerseAnnotations.fulfilled";
      if (action.payload.comments) {
        commentsAdapter.upsertMany(state, action.payload.comments);
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
    [fetchVerseComments.pending]: (state, action) => {
      state.status = "fetchVerseComments.pending";
    },
    [fetchVerseComments.rejected]: (state, action) => {
      state.status = "fetchVerseComments.rejected";
    },
    [fetchVerseComments.fulfilled]: (state, action) => {
      state.status = "fetchVerseComments.fulfilled";
      if (action.payload.comments) {
        commentsAdapter.upsertMany(state, action.payload.comments);
      }
    },

    [addAlbumComment.pending]: (state, action) => {
      state.status = "addAlbumComment.pending";
    },
    [addAlbumComment.rejected]: (state, action) => {
      state.status = "addAlbumComment.rejected";
    },
    [addAlbumComment.fulfilled]: (state, action) => {
      state.status = "addAlbumComment.fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [addArtistComment.pending]: (state, action) => {
      state.status = "addArtistComment.pending";
    },
    [addArtistComment.rejected]: (state, action) => {
      state.status = "addArtistComment.rejected";
    },
    [addArtistComment.fulfilled]: (state, action) => {
      state.status = "addArtistComment.fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [addSongComment.pending]: (state, action) => {
      state.status = "addSongComment.pending";
    },
    [addSongComment.rejected]: (state, action) => {
      state.status = "addSongComment.rejected";
    },
    [addSongComment.fulfilled]: (state, action) => {
      state.status = "addSongComment.fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [addVerseComment.pending]: (state, action) => {
      state.status = "addVerseComment.pending";
    },
    [addVerseComment.rejected]: (state, action) => {
      state.status = "addVerseComment.rejected";
    },
    [addVerseComment.fulfilled]: (state, action) => {
      state.status = "addVerseComment.fulfilled";
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
    (_state, commentableId) => commentableId,
    (_state, _commentableId, commentableType) => commentableType,
  ],
  (comments, commentableId, commentableType) =>
    comments.filter(
      (c) =>
        c.commentableId === parseInt(commentableId) &&
        c.commentableType === commentableType
    )
);

export const selectCommentIdsByCommentable = createSelector(
  [
    selectAllComments,
    (_state, commentableId) => commentableId,
    (_state, _commentableId, commentableType) => commentableType,
  ],
  (comments, commentableId, commentableType) => {
    const selectedComments = comments.filter(
      (c) =>
        c.commentableId === parseInt(commentableId) &&
        c.commentableType === commentableType
    );
    const selectedCommentIds = selectedComments.map((c) => c.id);
    return selectedCommentIds;
  }
);
