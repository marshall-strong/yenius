import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import {
  addAlbumComment,
  addArtistComment,
  addSongComment,
  addVerseComment,
  deleteComment,
  editComment,
  fetchAlbumComments,
  fetchArtistComments,
  fetchSongComments,
  fetchVerseComments,
} from "./commentsSliceThunks";

const commentsAdapter = createEntityAdapter({
  selectId: (comment) => comment.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = commentsAdapter.getInitialState({
  status: {
    addAlbumComment: null,
    addArtistComment: null,
    addSongComment: null,
    addVerseComment: null,
    deleteComment: null,
    editComment: null,
    fetchAlbumComments: null,
    fetchArtistComments: null,
    fetchSongComments: null,
    fetchVerseComments: null,
  },
});

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // comments asyncThunks
    // addAlbumComment
    [addAlbumComment.pending]: (state, action) => {
      state.status.addAlbumComment = "pending";
    },
    [addAlbumComment.fulfilled]: (state, action) => {
      state.status.addAlbumComment = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [addAlbumComment.rejected]: (state, action) => {
      state.status.addAlbumComment = "rejected";
    },

    // addArtistComment
    [addArtistComment.pending]: (state, action) => {
      state.status.addArtistComment = "pending";
    },
    [addArtistComment.fulfilled]: (state, action) => {
      state.status.addArtistComment = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [addArtistComment.rejected]: (state, action) => {
      state.status.addArtistComment = "rejected";
    },

    // addSongComment
    [addSongComment.pending]: (state, action) => {
      state.status.addSongComment = "pending";
    },
    [addSongComment.fulfilled]: (state, action) => {
      state.status.addSongComment = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [addSongComment.rejected]: (state, action) => {
      state.status.addSongComment = "rejected";
    },

    // addVerseComment
    [addVerseComment.pending]: (state, action) => {
      state.status.addVerseComment = "pending";
    },
    [addVerseComment.fulfilled]: (state, action) => {
      state.status.addVerseComment = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [addVerseComment.rejected]: (state, action) => {
      state.status.addVerseComment = "rejected";
    },

    // deleteComment
    [deleteComment.pending]: (state, action) => {
      state.status.deleteComment = "pending";
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.status.deleteComment = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.removeOne(state, action.payload.comments.id);
      }
    },
    [deleteComment.rejected]: (state, action) => {
      state.status.deleteComment = "rejected";
    },

    // editComment
    [editComment.pending]: (state, action) => {
      state.status.editComment = "pending";
    },
    [editComment.fulfilled]: (state, action) => {
      state.status.editComment = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.upsertMany(state, action.payload.comments);
      }
    },
    [editComment.rejected]: (state, action) => {
      state.status.editComment = "rejected";
    },

    // fetchAlbumComments
    [fetchAlbumComments.pending]: (state, action) => {
      state.status.fetchAlbumComments = "pending";
    },
    [fetchAlbumComments.fulfilled]: (state, action) => {
      state.status.fetchAlbumComments = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [fetchAlbumComments.rejected]: (state, action) => {
      state.status.fetchAlbumComments = "rejected";
    },

    // fetchArtistComments
    [fetchArtistComments.pending]: (state, action) => {
      state.status.fetchArtistComments = "pending";
    },
    [fetchArtistComments.fulfilled]: (state, action) => {
      state.status.fetchArtistComments = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [fetchArtistComments.rejected]: (state, action) => {
      state.status.fetchArtistComments = "rejected";
    },

    // fetchSongComments
    [fetchSongComments.pending]: (state, action) => {
      state.status.fetchSongComments = "pending";
    },
    [fetchSongComments.fulfilled]: (state, action) => {
      state.status.fetchSongComments = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.setAll(state, action.payload.comments);
      }
    },
    [fetchSongComments.rejected]: (state, action) => {
      state.status.fetchSongComments = "rejected";
    },

    // fetchVerseComments
    [fetchVerseComments.pending]: (state, action) => {
      state.status.fetchVerseComments = "pending";
    },
    [fetchVerseComments.fulfilled]: (state, action) => {
      state.status.fetchVerseComments = "fulfilled";
      if (action.payload.comments) {
        commentsAdapter.upsertMany(state, action.payload.comments);
      }
    },
    [fetchVerseComments.rejected]: (state, action) => {
      state.status.fetchVerseComments = "rejected";
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
